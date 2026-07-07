#!/usr/bin/env python3
"""本地開發用嘅簡單 HTTP server，確保所有文字檔案都用 UTF-8 charset 送出，
避免瀏覽器將 .js / .css 入面嘅中文字錯誤解讀做亂碼。"""
import http.server
import socketserver
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8123

TEXT_TYPES = ("text/html", "text/css", "text/javascript", "application/javascript", "application/json")

class UTF8Handler(http.server.SimpleHTTPRequestHandler):
    def guess_type(self, path):
        ctype = super().guess_type(path)
        if ctype in TEXT_TYPES:
            return f"{ctype}; charset=utf-8"
        return ctype

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), UTF8Handler) as httpd:
        print(f"Serving on http://localhost:{PORT} (UTF-8 charset forced)")
        httpd.serve_forever()
