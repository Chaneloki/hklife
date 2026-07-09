#!/usr/bin/env python3
"""本地開發用嘅簡單 HTTP server，確保所有文字檔案都用 UTF-8 charset 送出，
避免瀏覽器將 .js / .css 入面嘅中文字錯誤解讀做亂碼。

呢個 server 仲兼任 Chatbot bonus function 嘅 BYOK（bring your own key）relay：
- 呢個遊戲唔用開發者自己嘅 API key，玩家要自己入自己嘅 Gemini／DeepSeek API key，仲要自己揀 model。
- Frontend 送 provider／apiKey／model／prompt 落嚟純粹係要幫玩家轉發去 provider（因為瀏覽器 call
  provider 好大機會撞 CORS），server 完全唔會 log、唔會保存、唔會寫入任何檔案或者 database——
  處理完呢次 request 就即刻拋棄。

Provider adapter 分開處理，唔可以將唔同 provider 嘅 request／response format 混用：
- Gemini：v1beta/models/<model>:generateContent endpoint，?key=<player key>，
  {contents:[{parts:[{text}]}]} body，讀 candidates[0].content.parts[].text。
- DeepSeek：OpenAI-compatible chat completions endpoint，Authorization: Bearer header，
  {model, messages, stream:false} body，讀 choices[0].message.content。
"""
import http.server
import socketserver
import sys
import json
import urllib.request
import urllib.error
import urllib.parse

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8123

TEXT_TYPES = ("text/html", "text/css", "text/javascript", "application/javascript", "application/json")

MAX_PROMPT_CHARS = 8000  # 粗略上限，避免一次過送太大段 prompt

# 呢啲淨係「建議預設值」，唔係唯一真相——provider 官方隨時會加新 model，玩家一定要可以手動改
GEMINI_MODEL_PRESETS = ["gemini-2.5-flash", "gemini-2.5-pro", "gemini-3.5-flash"]
DEFAULT_GEMINI_MODEL = GEMINI_MODEL_PRESETS[0]
DEEPSEEK_MODEL_PRESETS = ["deepseek-v4-flash", "deepseek-v4-pro"]
DEFAULT_DEEPSEEK_MODEL = DEEPSEEK_MODEL_PRESETS[0]


class AdapterError(Exception):
    """幫每個 provider adapter 統一攜帶「provider 實際 HTTP status + 錯誤內容」，
    等 classify_error() 可以判斷返係邊種錯誤（key／model／quota／rate limit……）先俾一個具體訊息。"""
    def __init__(self, status, detail):
        super().__init__(detail)
        self.status = status
        self.detail = detail


def make_error(error_type, status, message, provider_status=None, provider_body_preview=""):
    payload = {
        "ok": False,
        "errorType": error_type,
        "status": status,
        "message": message
    }
    if provider_status is not None:
        payload["providerStatus"] = provider_status
    if provider_body_preview:
        payload["providerBodyPreview"] = provider_body_preview[:300]
    return payload


def _read_http_error_body(e):
    try:
        raw = e.read()
        text = raw.decode("utf-8", errors="replace")
        try:
            parsed = json.loads(text)
            if isinstance(parsed, dict):
                parsed["_preview"] = text[:300]
            return parsed
        except Exception:
            return {"raw": text, "_preview": text[:300]}
    except Exception:
        return {}


def _extract_provider_message(body):
    if not isinstance(body, dict):
        return None
    err = body.get("error")
    if isinstance(err, dict):
        return err.get("message") or err.get("status")
    if isinstance(err, str):
        return err
    return body.get("message")


# ============================================================
# Gemini adapter：generateContent，?key=...，{contents:[{parts:[{text}]}]} → candidates parts text
# ============================================================
def call_gemini(api_key, model, prompt):
    safe_model = urllib.parse.quote(model, safe="")
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{safe_model}:generateContent?key={urllib.parse.quote(api_key, safe='')}"
    body = json.dumps({
        "contents": [
            {
                "parts": [
                    {"text": prompt}
                ]
            }
        ]
    }).encode("utf-8")
    req = urllib.request.Request(url, data=body, headers={
        "Content-Type": "application/json"
    }, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        body_data = _read_http_error_body(e)
        raise AdapterError(e.code, _extract_provider_message(body_data) or body_data.get("_preview") or "")
    except urllib.error.URLError as e:
        raise AdapterError(0, str(e.reason))
    except json.JSONDecodeError:
        raise AdapterError(0, "Gemini 回應唔係合法 JSON")

    candidates = data.get("candidates") or []
    parts = candidates[0].get("content", {}).get("parts", []) if candidates else []
    text = "".join(p.get("text", "") for p in parts if isinstance(p, dict)).strip()
    if not text:
        raise AdapterError(0, "Gemini 回覆解析唔到內容（回應格式同預期唔同）")
    return text


def list_gemini_models(api_key):
    url = "https://generativelanguage.googleapis.com/v1beta/models"
    req = urllib.request.Request(url, headers={"x-goog-api-key": api_key}, method="GET")
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    models = data.get("models") or []
    ids = []
    for m in models:
        name = m.get("name") or ""
        ids.append(name.split("/")[-1] if "/" in name else name)
    return [i for i in ids if i]


# ============================================================
# DeepSeek adapter：OpenAI-compatible chat completions
# ============================================================
def call_deepseek(api_key, model, prompt):
    body = json.dumps({
        "model": model,
        "messages": [
            {"role": "system", "content": "Reply OK only." if prompt == "Reply OK only." else "你係一個聊天助手。"},
            {"role": "user", "content": prompt}
        ],
        "stream": False
    }).encode("utf-8")
    req = urllib.request.Request("https://api.deepseek.com/chat/completions", data=body, headers={
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        body_data = _read_http_error_body(e)
        raise AdapterError(e.code, _extract_provider_message(body_data) or body_data.get("_preview") or "")
    except urllib.error.URLError as e:
        raise AdapterError(0, str(e.reason))
    except json.JSONDecodeError:
        raise AdapterError(0, "DeepSeek 回應唔係合法 JSON")

    choices = data.get("choices") or []
    if not choices:
        raise AdapterError(0, "DeepSeek 冇回覆任何內容")
    text = (choices[0].get("message", {}).get("content") or "").strip()
    if not text:
        raise AdapterError(0, "DeepSeek 回覆係空嘅")
    return text


def list_deepseek_models(api_key):
    req = urllib.request.Request("https://api.deepseek.com/models",
                                  headers={"Authorization": f"Bearer {api_key}"}, method="GET")
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    return [m.get("id") for m in (data.get("data") or []) if m.get("id")]


PROVIDER_CALLERS = {"gemini": call_gemini, "deepseek": call_deepseek}
PROVIDER_MODEL_LISTERS = {"gemini": list_gemini_models, "deepseek": list_deepseek_models}
PROVIDER_DEFAULT_MODEL = {"gemini": DEFAULT_GEMINI_MODEL, "deepseek": DEFAULT_DEEPSEEK_MODEL}


def classify_provider_error(provider_id, e):
    status = e.status
    detail = e.detail or ""
    if status == 0:
        return make_error("network_error" if "JSON" not in detail and "解析" not in detail else "provider_parse_error",
                          502,
                          f"{provider_id} 連線或者回應解析有問題：{detail or '網絡錯誤'}",
                          provider_status=None,
                          provider_body_preview=detail)
    if status in (401, 403):
        message = f"{provider_id} API key 無效或者冇權限（HTTP {status}）：{detail or '請檢查你個 key 係咪打啱、係咪已經過期。'}"
    elif status == 404:
        message = f"此 model 可能不可用，請換另一個 model 或使用「取得可用模型」（HTTP 404：{detail or '搵唔到呢個 model'}）。"
    elif status == 400:
        message = f"此 model 可能不可用，請換另一個 model 或使用「取得可用模型」（HTTP 400：{detail or '請求格式或者 model id 有問題'}）。"
    elif status == 429:
        message = f"{provider_id} 話請求太密（HTTP 429 rate limit），等陣先再試。"
    elif status in (402,) or (detail and ("billing" in detail.lower() or "quota" in detail.lower())):
        message = f"{provider_id} 話帳戶 quota／billing 有問題（HTTP {status}）：{detail}"
    else:
        message = f"{provider_id} 回應錯誤（HTTP {status}）：{detail or '未知錯誤'}"
    return make_error("provider_http_error", 502, message, provider_status=status, provider_body_preview=detail)


class UTF8Handler(http.server.SimpleHTTPRequestHandler):
    def guess_type(self, path):
        ctype = super().guess_type(path)
        if ctype in TEXT_TYPES:
            return f"{ctype}; charset=utf-8"
        return ctype

    def end_headers(self):
        # 開發用 server：唔想瀏覽器 cache 住舊版 .js module，落 no-store 保證每次都攞返最新檔案
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, format, *args):
        # 明確覆寫 access log：BYOK request body 有 apiKey，絕對唔可以留低喺 stdout／log 檔，
        # 所以呢個 handler 完全唔印任何 request 內容，得返靜默處理
        pass

    def _send_json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _read_json_body(self):
        length = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(length) if length else b"{}"
        return json.loads(raw.decode("utf-8"))

    def _api_method_not_allowed(self):
        self._send_json(405, make_error("method_not_allowed", 405, "此 API route 只支援 POST。"))

    def _not_found_json(self):
        self._send_json(404, make_error("not_implemented", 404, "API route 未實作或路由未接好。"))

    def do_GET(self):
        if self.path == "/api/chatbot/defaults":
            self._send_json(200, {
                "gemini": {"presets": GEMINI_MODEL_PRESETS, "default": DEFAULT_GEMINI_MODEL},
                "deepseek": {"presets": DEEPSEEK_MODEL_PRESETS, "default": DEFAULT_DEEPSEEK_MODEL}
            })
            return
        if self.path.startswith("/api/"):
            self._api_method_not_allowed()
            return
        super().do_GET()

    def do_HEAD(self):
        if self.path.startswith("/api/"):
            self._api_method_not_allowed()
            return
        super().do_HEAD()

    def do_OPTIONS(self):
        if self.path.startswith("/api/"):
            self._api_method_not_allowed()
            return
        super().do_OPTIONS()

    def do_PUT(self):
        if self.path.startswith("/api/"):
            self._api_method_not_allowed()
            return
        self._not_found_json()

    def do_PATCH(self):
        if self.path.startswith("/api/"):
            self._api_method_not_allowed()
            return
        self._not_found_json()

    def do_DELETE(self):
        if self.path.startswith("/api/"):
            self._api_method_not_allowed()
            return
        self._not_found_json()

    def do_TRACE(self):
        if self.path.startswith("/api/"):
            self._api_method_not_allowed()
            return
        self._not_found_json()

    def do_CONNECT(self):
        if self.path.startswith("/api/"):
            self._api_method_not_allowed()
            return
        self._not_found_json()

    def do_POST(self):
        if self.path == "/api/chatbot/models":
            try:
                payload = self._read_json_body()
            except Exception:
                self._send_json(400, make_error("provider_parse_error", 400, "請求格式錯誤，body 必須係合法 JSON。"))
                return
            provider_id = payload.get("provider")
            api_key = (payload.get("apiKey") or "").strip()
            lister = PROVIDER_MODEL_LISTERS.get(provider_id)
            if not lister:
                self._send_json(400, make_error("invalid_provider", 400, "唔支援嘅 provider。"))
                return
            if not api_key:
                self._send_json(400, make_error("missing_key", 400, "請先設定 API key。"))
                return
            try:
                models = lister(api_key)
                self._send_json(200, {"ok": True, "models": models})
            except Exception as e:
                # 取得模型列表失敗唔應該阻住玩家，frontend 會 fallback 用返 preset／手動輸入
                status = getattr(e, "code", 0)
                self._send_json(200, make_error("provider_http_error", 200, f"取得可用模型失敗（{status or '網絡錯誤'}），可以手動輸入 model id。", provider_status=status or None))
            return

        if self.path == "/api/chatbot/byok":
            try:
                payload = self._read_json_body()
            except Exception:
                self._send_json(400, make_error("provider_parse_error", 400, "請求格式錯誤，body 必須係合法 JSON。"))
                return

            provider_id = payload.get("provider")
            api_key = (payload.get("apiKey") or "").strip()
            model = (payload.get("model") or "").strip()
            mode = payload.get("mode")
            relay_payload = payload.get("payload") or {}
            prompt = (relay_payload.get("prompt") or "").strip()
            # 呢度特登唔會將 payload／api_key／prompt 存落任何變數以外嘅地方，
            # 亦都唔會 print／log——處理完呢個 function 之後就冚唪唥拋棄

            caller = PROVIDER_CALLERS.get(provider_id)
            if not caller:
                self._send_json(400, make_error("invalid_provider", 400, "唔支援嘅 provider。"))
                return
            if not api_key:
                self._send_json(400, make_error("missing_key", 400, "請先設定 API key。"))
                return
            if not model:
                self._send_json(400, make_error("missing_model", 400, "請先揀 model。"))
                return
            if mode not in ("test", "chat"):
                self._send_json(400, make_error("not_implemented", 400, "mode 必須係 test 或 chat。"))
                return
            if not prompt:
                self._send_json(400, make_error("provider_parse_error", 400, "冇嘢好送。"))
                return
            if len(prompt) > MAX_PROMPT_CHARS:
                self._send_json(400, make_error("provider_parse_error", 400, "訊息太長。"))
                return

            try:
                reply = caller(api_key, model, prompt)
                self._send_json(200, {"ok": True, "provider": provider_id, "model": model, "text": reply, "reply": reply})
            except AdapterError as e:
                self._send_json(502, classify_provider_error(provider_id, e))
            except Exception as e:
                self._send_json(502, make_error("network_error", 502, f"{provider_id} 暫時冇回應，請等陣再試（網絡或者未知錯誤）。", provider_body_preview=str(e)))
            return

        if self.path.startswith("/api/"):
            self._not_found_json()
            return
        self._not_found_json()


class ThreadedTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True


if __name__ == "__main__":
    with ThreadedTCPServer(("", PORT), UTF8Handler) as httpd:
        print(f"Serving on http://localhost:{PORT} (UTF-8 charset forced)")
        print("Chatbot 用 BYOK 模式：玩家自己喺遊戲入面輸入 provider／model／API key，server 唔保存任何 key。")
        httpd.serve_forever()
