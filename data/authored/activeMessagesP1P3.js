// data/authored/activeMessagesP1P3.js
// Author-provided W1-W12 P1-P3 NPC active message content. Do not auto-generate missing messages.

export const p1p3ActiveMessages = [
  {
    "id": "p1p3_peer_outgoing_25",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "outgoingInvite",
    "personalityAliases": [
      "pers_outgoing_inviter",
      "outgoing_inviter"
    ],
    "threshold": 25,
    "maxRelationshipCap": 80,
    "title": "風扇會不會跌下來",
    "scene": "早會剛結束，大家混亂地排隊回課室。家朗沒有在理隊伍，而是在看天花板的風扇。",
    "messageText": "你望下個風扇，轉得好慢，我覺得佢陣間會跌落嚟……如果跌落嚟，你話我哋要衝去邊度匿？我諗住衝去老師枱底，你呢？",
    "minorEvent": "課室門口災難預演。",
    "choices": [
      {
        "id": "positive",
        "text": "我覺得門口近啲喎，或者我哋坐近門口位嗰陣預演一次？",
        "playerLine": "我覺得門口近啲喎，或者我哋坐近門口位嗰陣預演一次？",
        "npcFollowUp": "預演？好喎，但唔可以俾老師知我哋係練走佬。",
        "relationshipDelta": 1,
        "resultText": "家朗一下子精神起來，明明隊伍還在慢慢前進，他已經把回課室那幾步想像成一場秘密演習。你沒有只是跟他走，而是進入了他的無聊荒謬劇。"
      },
      {
        "id": "neutral",
        "text": "風扇點會跌落嚟，你係咪驚得滯？",
        "playerLine": "風扇點會跌落嚟，你係咪驚得滯？",
        "npcFollowUp": "我冇驚呀，我只係預防啫。萬一真係跌呢？",
        "relationshipDelta": 0,
        "resultText": "你把事情拉回現實，但家朗沒有完全停下來。他仍然抬頭望了風扇一眼，像覺得你雖然不配合，但至少有聽見。"
      },
      {
        "id": "negative",
        "text": "你可唔可以行快兩步，老師望住呀。",
        "playerLine": "你可唔可以行快兩步，老師望住呀。",
        "npcFollowUp": "哦……行啦行啦。",
        "relationshipDelta": -1,
        "resultText": "家朗收起了那個風扇災難計劃，腳步快了半步。你們確實跟上隊伍，但他剛才那點興奮也被一起推回去了。"
      }
    ]
  },
  {
    "id": "p1p3_peer_outgoing_30",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "outgoingInvite",
    "personalityAliases": [
      "pers_outgoing_inviter",
      "outgoing_inviter"
    ],
    "threshold": 30,
    "maxRelationshipCap": 80,
    "title": "水樽蓋和課室門口",
    "scene": "小息鐘聲剛響，大家把椅子推得亂七八糟。家朗站在課室門口，手指著你水樽邊緣一小滴水。",
    "messageText": "你個水樽蓋又冇扭實呀，滴到好似一條細河咁。你如果一路行一路扭，實會撞到人。不如我企門口等你扭好，之後我哋先衝。",
    "minorEvent": "小息門口等你扭好水樽蓋。",
    "choices": [
      {
        "id": "positive",
        "text": "好呀，你唔好我一扭好就即刻跑。",
        "playerLine": "好呀，你唔好我一扭好就即刻跑。",
        "npcFollowUp": "得啦，我數三下先跑，唔會偷步。",
        "relationshipDelta": 1,
        "resultText": "他把等待講成一個比賽規則，像是真的為你留了位置，又不想承認自己是在等人。"
      },
      {
        "id": "neutral",
        "text": "我自己慢慢嚟，你先去啦。",
        "playerLine": "我自己慢慢嚟，你先去啦。",
        "npcFollowUp": "咁我行慢少少，唔算等你，得未？",
        "relationshipDelta": 0,
        "resultText": "家朗把話說得很快，但腳步真的沒有立刻衝出去。"
      },
      {
        "id": "negative",
        "text": "你唔好成日睇住我啲嘢啦。",
        "playerLine": "你唔好成日睇住我啲嘢啦。",
        "npcFollowUp": "我只係見到滴水啫，又唔係特登望。",
        "relationshipDelta": -1,
        "resultText": "他把視線移開，像把那滴水也當成自己多管閒事的證據。"
      }
    ]
  },
  {
    "id": "p1p3_peer_outgoing_35",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "outgoingInvite",
    "personalityAliases": [
      "pers_outgoing_inviter",
      "outgoing_inviter"
    ],
    "threshold": 35,
    "maxRelationshipCap": 80,
    "title": "地磚不能踩海",
    "scene": "排隊去音樂室的路上，走廊地磚有深淺兩種顏色。家朗刻意只踩深色磚，鞋尖停在淺色邊緣。",
    "messageText": "我宣布，淺色係海，踩到就沉。你行到音樂室之前唔可以落海。嗱，我俾你三次復活機會。",
    "minorEvent": "走廊地磚路線小遊戲。",
    "choices": [
      {
        "id": "positive",
        "text": "咁深色磚咁少，我哋要計路線喎。",
        "playerLine": "咁深色磚咁少，我哋要計路線喎。",
        "npcFollowUp": "係呀！你睇，前面嗰格要斜行先過到。",
        "relationshipDelta": 1,
        "resultText": "家朗像找到隊友一樣低聲指路。普通走廊一下子變成只有你們兩個知道規則的地圖。"
      },
      {
        "id": "neutral",
        "text": "你自己玩啦，我跟住隊就得。",
        "playerLine": "你自己玩啦，我跟住隊就得。",
        "npcFollowUp": "都得，你當我係偵察兵。",
        "relationshipDelta": 0,
        "resultText": "他沒有逼你加入，但還是把自己放進一個很認真的角色裡。"
      },
      {
        "id": "negative",
        "text": "你再咁跳會撞到人。",
        "playerLine": "你再咁跳會撞到人。",
        "npcFollowUp": "我冇跳，我係行得準。",
        "relationshipDelta": -1,
        "resultText": "他把腳放平，步子變得正常，但整個人像被迫從遊戲裡退出來。"
      }
    ]
  },
  {
    "id": "p1p3_peer_outgoing_40",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "outgoingInvite",
    "personalityAliases": [
      "pers_outgoing_inviter",
      "outgoing_inviter"
    ],
    "threshold": 40,
    "maxRelationshipCap": 80,
    "title": "椅腳尖叫聲",
    "scene": "午飯後，課室有一張椅子每次一拖就發出尖尖的聲音。家朗趴在桌上，像在等那張椅子再次叫。",
    "messageText": "嗰張椅一拖就好似尖叫。我覺得佢唔鍾意坐喺第三行。你話如果我哋幫佢搬去窗邊，佢會唔會靜啲？",
    "minorEvent": "幫尖叫椅腳墊紙。",
    "choices": [
      {
        "id": "positive",
        "text": "唔可以亂搬，但可以試下墊張紙喺椅腳下面。",
        "playerLine": "唔可以亂搬，但可以試下墊張紙喺椅腳下面。",
        "npcFollowUp": "你呢個方法好似真係有用喎，少少似修理師。",
        "relationshipDelta": 1,
        "resultText": "家朗難得沒有只想玩，而是認真看著那張紙怎樣墊在椅腳下。你接住了他的荒謬，也把它變成可以試的小方法。"
      },
      {
        "id": "neutral",
        "text": "椅係死物嚟㗎。",
        "playerLine": "椅係死物嚟㗎。",
        "npcFollowUp": "咁佢叫得好生動喎。",
        "relationshipDelta": 0,
        "resultText": "你沒有加入他的想像，但他還是忍不住替那張椅辯解了一句。"
      },
      {
        "id": "negative",
        "text": "你可唔可以唔好咁煩，椅都要講。",
        "playerLine": "你可唔可以唔好咁煩，椅都要講。",
        "npcFollowUp": "……咁我唔講。",
        "relationshipDelta": -1,
        "resultText": "那張椅又尖叫了一下，但家朗沒有再笑。"
      }
    ]
  },
  {
    "id": "p1p3_peer_outgoing_45",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "outgoingInvite",
    "personalityAliases": [
      "pers_outgoing_inviter",
      "outgoing_inviter"
    ],
    "threshold": 45,
    "maxRelationshipCap": 80,
    "title": "他是不是太吵",
    "scene": "老師剛提醒過全班小息回來要安靜。家朗坐下後沒有立刻說話，只用手指在桌面畫一個小小的圈。",
    "messageText": "我頭先係咪真係太嘈？我只係想叫人快啲返嚟，但老師望住我嗰陣，好似我係帶頭嘈嗰個。",
    "minorEvent": "小息後用細聲暗號叫人回位。",
    "choices": [
      {
        "id": "positive",
        "text": "你係嘈咗少少，但你係想叫大家返嚟。下次你可以細聲啲叫我先。",
        "playerLine": "你係嘈咗少少，但你係想叫大家返嚟。下次你可以細聲啲叫我先。",
        "npcFollowUp": "即係我唔係完全錯晒？",
        "relationshipDelta": 1,
        "resultText": "家朗鬆了一點，像第一次把自己是不是太多聲音這件事交給你判斷，而不是自己用笑聲蓋過去。"
      },
      {
        "id": "neutral",
        "text": "老師都係叫大家安靜啫。",
        "playerLine": "老師都係叫大家安靜啫。",
        "npcFollowUp": "嗯，可能啦。",
        "relationshipDelta": 0,
        "resultText": "你沒有把事情說得很重，他也沒有再追問，只是把桌上的圈擦走。"
      },
      {
        "id": "negative",
        "text": "你真係成日好嘈。",
        "playerLine": "你真係成日好嘈。",
        "npcFollowUp": "哦，知道。",
        "relationshipDelta": -1,
        "resultText": "家朗很快答完，但之後一小段時間都沒有再把話丟過來。"
      }
    ]
  },
  {
    "id": "p1p3_peer_quiet_observer_25",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "quietObserver",
    "personalityAliases": [
      "pers_quiet_observer",
      "quiet_observer"
    ],
    "threshold": 25,
    "maxRelationshipCap": 80,
    "title": "蘋果味擦膠",
    "scene": "小息時，她坐在角落，手裡沒有看書，只是反覆折疊一張廣告傳單的邊緣。",
    "messageText": "……你舊擦膠，係咪好香蘋果味？我頭先喺隔離位聞到。我嗰支就冇味嘅，只係一舊膠，用極都用唔完。",
    "minorEvent": "交換聞一聞文具味道。",
    "choices": [
      {
        "id": "positive",
        "text": "咁俾你試下？呢舊買嗰陣個包裝好似話係永久留香嘅。",
        "playerLine": "咁俾你試下？呢舊買嗰陣個包裝好似話係永久留香嘅。",
        "npcFollowUp": "永久……會唔會好誇張？",
        "relationshipDelta": 1,
        "resultText": "她接過擦膠時只捏住一個角，很輕地聞了一下，又很快還給你。這不是很大的分享，但像一個只在座位旁邊發生的小秘密。"
      },
      {
        "id": "neutral",
        "text": "係呀，係蘋果味。你買邊隻牌子？",
        "playerLine": "係呀，係蘋果味。你買邊隻牌子？",
        "npcFollowUp": "我唔記得，屋企人買嘅。好似藍色包裝。",
        "relationshipDelta": 0,
        "resultText": "話題停在文具上，沒有再靠近，也沒有變尷尬。她把傳單的邊又折了一次，好像只是完成了一次很小的確認。"
      },
      {
        "id": "negative",
        "text": "唔好意思，我唔鍾意人哋掂我啲文具。",
        "playerLine": "唔好意思，我唔鍾意人哋掂我啲文具。",
        "npcFollowUp": "哦……我冇話要拎。",
        "relationshipDelta": -1,
        "resultText": "她的手指停了一下，之後繼續折那張傳單。她沒有生氣，但你感覺那個太近的觀察被你推遠了一點。"
      }
    ]
  },
  {
    "id": "p1p3_peer_quiet_observer_30",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "quietObserver",
    "personalityAliases": [
      "pers_quiet_observer",
      "quiet_observer"
    ],
    "threshold": 30,
    "maxRelationshipCap": 80,
    "title": "擦到起毛的字",
    "scene": "中文堂後，她看見你紙上有一個字被擦到灰灰的，紙面起了一圈毛邊。她把自己的鉛筆轉了半圈，才開口。",
    "messageText": "你嗰個字……擦太多次會穿㗎。我以前試過，穿咗之後個洞好似會一直叫人望住。",
    "minorEvent": "一起看一個被擦花的字。",
    "choices": [
      {
        "id": "positive",
        "text": "咁你可唔可以幫我睇下，呢個字邊度怪？",
        "playerLine": "咁你可唔可以幫我睇下，呢個字邊度怪？",
        "npcFollowUp": "我睇一眼……係呢一撇太長。",
        "relationshipDelta": 1,
        "resultText": "她沒有直接幫你寫，只是用指尖在空中比了一下。那個起毛的洞沒有再像錯誤，反而像一個可以一起修好的地方。"
      },
      {
        "id": "neutral",
        "text": "我下次輕啲擦。",
        "playerLine": "我下次輕啲擦。",
        "npcFollowUp": "嗯，用細力啲會好啲。",
        "relationshipDelta": 0,
        "resultText": "你接住了提醒，但話題停在紙面上。"
      },
      {
        "id": "negative",
        "text": "你唔好睇我張紙啦。",
        "playerLine": "你唔好睇我張紙啦。",
        "npcFollowUp": "……好。",
        "relationshipDelta": -1,
        "resultText": "她把視線移回自己的簿，像把提醒也一起收回去了。"
      }
    ]
  },
  {
    "id": "p1p3_peer_quiet_observer_35",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "quietObserver",
    "personalityAliases": [
      "pers_quiet_observer",
      "quiet_observer"
    ],
    "threshold": 35,
    "maxRelationshipCap": 80,
    "title": "雨聲和窗邊座位",
    "scene": "午飯後下起細雨，窗邊有一滴水沿著玻璃慢慢往下走。穎心沒有看書，而是在看那滴水走到哪裡停。",
    "messageText": "你有冇發覺，雨細嗰陣，課室反而好似靜啲。其實我幾鍾意坐窗邊，但有人會話悶。",
    "minorEvent": "小息看窗邊水滴路線。",
    "choices": [
      {
        "id": "positive",
        "text": "唔悶呀，可以睇水滴比賽邊條快。",
        "playerLine": "唔悶呀，可以睇水滴比賽邊條快。",
        "npcFollowUp": "我頭先都係咁諗，但冇講出嚟。",
        "relationshipDelta": 1,
        "resultText": "她的眼睛亮了一點點，像發現那滴水不是只有自己在看。"
      },
      {
        "id": "neutral",
        "text": "我都覺得雨聲幾靜。",
        "playerLine": "我都覺得雨聲幾靜。",
        "npcFollowUp": "嗯，唔使講咁多嘢。",
        "relationshipDelta": 0,
        "resultText": "你們短短地同意了同一種安靜，沒有再把它說破。"
      },
      {
        "id": "negative",
        "text": "雨天好悶，我想出去玩。",
        "playerLine": "雨天好悶，我想出去玩。",
        "npcFollowUp": "哦，咁你去啦。",
        "relationshipDelta": -1,
        "resultText": "她沒有留你，只是繼續看那滴水慢慢滑下去。"
      }
    ]
  },
  {
    "id": "p1p3_peer_quiet_observer_40",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "quietObserver",
    "personalityAliases": [
      "pers_quiet_observer",
      "quiet_observer"
    ],
    "threshold": 40,
    "maxRelationshipCap": 80,
    "title": "傳單折成小盒子",
    "scene": "她把廣告傳單折成一個很小的紙盒，盒口歪歪的，裡面放著一小截斷掉的鉛筆芯。",
    "messageText": "我唔知點解會留住呢啲斷芯。丟咗好似又有少少可惜。你有冇啲咁細嘅嘢，明知冇用都唔想掉？",
    "minorEvent": "紙盒收藏小碎物。",
    "choices": [
      {
        "id": "positive",
        "text": "我有啲擦膠碎都會留，因為顏色幾靚。",
        "playerLine": "我有啲擦膠碎都會留，因為顏色幾靚。",
        "npcFollowUp": "擦膠碎……應該可以放到呢個盒入面。",
        "relationshipDelta": 1,
        "resultText": "她把紙盒推近一點，像你們正在交換一種很奇怪但安全的收藏。"
      },
      {
        "id": "neutral",
        "text": "我通常都丟咗。",
        "playerLine": "我通常都丟咗。",
        "npcFollowUp": "咁你枱面應該會乾淨啲。",
        "relationshipDelta": 0,
        "resultText": "她沒有覺得你錯，只是把斷芯放回盒裡。"
      },
      {
        "id": "negative",
        "text": "斷咗就冇用啦，留嚟做咩。",
        "playerLine": "斷咗就冇用啦，留嚟做咩。",
        "npcFollowUp": "嗯，可能係。",
        "relationshipDelta": -1,
        "resultText": "她把盒口合上，像忽然覺得那截鉛筆芯不應該被你看見。"
      }
    ]
  },
  {
    "id": "p1p3_peer_quiet_observer_45",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "quietObserver",
    "personalityAliases": [
      "pers_quiet_observer",
      "quiet_observer"
    ],
    "threshold": 45,
    "maxRelationshipCap": 80,
    "title": "她留了一半位置",
    "scene": "小息時，角落的長椅只剩下一點空位。穎心把自己的書包往裡面挪了一小格，但沒有叫你。",
    "messageText": "我唔知你想唔想坐。我只是……移開少少。如果你想去操場都得。",
    "minorEvent": "小息角落長椅短暫同坐。",
    "choices": [
      {
        "id": "positive",
        "text": "我坐一陣就好，多謝你留位。",
        "playerLine": "我坐一陣就好，多謝你留位。",
        "npcFollowUp": "嗯，一陣都得。",
        "relationshipDelta": 1,
        "resultText": "她沒有看著你說話，但那半格空位一直沒有被別人坐走。你知道她其實是等過你的。"
      },
      {
        "id": "neutral",
        "text": "我企一陣先。",
        "playerLine": "我企一陣先。",
        "npcFollowUp": "好。",
        "relationshipDelta": 0,
        "resultText": "位置仍然空著一會兒，像一個沒有用上的邀請。"
      },
      {
        "id": "negative",
        "text": "你唔使特登留俾我。",
        "playerLine": "你唔使特登留俾我。",
        "npcFollowUp": "哦，我冇特登。",
        "relationshipDelta": -1,
        "resultText": "她很快把書包移回原位，像急著證明自己真的沒有等你。"
      }
    ]
  },
  {
    "id": "p1p3_peer_competitive_25",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "competitivePeer",
    "personalityAliases": [
      "pers_competitive_peer",
      "competitive_peer"
    ],
    "threshold": 25,
    "maxRelationshipCap": 80,
    "title": "別人的書包扣",
    "scene": "他正在用指甲摳桌面上的透明膠紙痕跡，指甲縫裡全是灰塵。",
    "messageText": "我見到隔籬班個阿聰，佢個袋有隻扣好靚，我老豆話如果我下次考到前五，就買個更好嘅畀我。你個袋……係咪好貴㗎？",
    "minorEvent": "一起研究隔籬班書包扣。",
    "choices": [
      {
        "id": "positive",
        "text": "呢個係舊年用嘅啦。不過你話嗰個扣，係咪銀色嗰隻？我有見過人賣。",
        "playerLine": "呢個係舊年用嘅啦。不過你話嗰個扣，係咪銀色嗰隻？我有見過人賣。",
        "npcFollowUp": "係呀，銀色，仲會反光嗰隻。佢行過嚟嗰陣我一眼就見到。",
        "relationshipDelta": 1,
        "resultText": "你沒有接住「貴不貴」這個比較，而是接住了他真正盯住的東西。梓軒的語氣鬆了一點，像終於可以講那個扣，而不是講自己夠不夠好。"
      },
      {
        "id": "neutral",
        "text": "都係普通啫，唔係咩名牌。",
        "playerLine": "都係普通啫，唔係咩名牌。",
        "npcFollowUp": "哦，咁睇落都幾新。",
        "relationshipDelta": 0,
        "resultText": "話題被你避開了。梓軒又摳了摳桌面的膠紙痕，好像還有話想講，但沒有再追問價格。"
      },
      {
        "id": "negative",
        "text": "你幾時先肯唔好成日諗住買嘢？",
        "playerLine": "你幾時先肯唔好成日諗住買嘢？",
        "npcFollowUp": "我又唔係真係買到，講吓都唔得咩。",
        "relationshipDelta": -1,
        "resultText": "他的手指停在膠紙痕上，指甲邊沾著灰。他好像被你說中了，又好像覺得你沒有聽懂他為什麼一直看那個扣。"
      }
    ]
  },
  {
    "id": "p1p3_peer_competitive_30",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "competitivePeer",
    "personalityAliases": [
      "pers_competitive_peer",
      "competitive_peer"
    ],
    "threshold": 30,
    "maxRelationshipCap": 80,
    "title": "默書簿簽名欄",
    "scene": "放學前，他看見你把默書簿翻到簽名欄，又很快合上塞回書包。他自己那本簿的角已經被折得很平。",
    "messageText": "你係咪唔想叫屋企人簽呀？驚佢哋問點解錯嗰幾個？我唔係笑你，我都覺得簽名欄好似比個分數仲煩。",
    "minorEvent": "一起想怎樣把默書簿拿給家長看。",
    "choices": [
      {
        "id": "positive",
        "text": "係呀，我驚佢問完又叫我即刻重默。",
        "playerLine": "係呀，我驚佢問完又叫我即刻重默。",
        "npcFollowUp": "我都係。一問就好似錯字又跳出嚟。",
        "relationshipDelta": 1,
        "resultText": "他沒有再把分數拿來比，反而像終於找到另一個怕簽名欄的人。"
      },
      {
        "id": "neutral",
        "text": "我只係唔記得，唔係驚。",
        "playerLine": "我只係唔記得，唔係驚。",
        "npcFollowUp": "哦……咁你記得啦，老師聽日會睇。",
        "relationshipDelta": 0,
        "resultText": "他沒有拆穿你，但那個「哦」拖得有點長。"
      },
      {
        "id": "negative",
        "text": "你唔好成日講分數同簽名啦。",
        "playerLine": "你唔好成日講分數同簽名啦。",
        "npcFollowUp": "我又冇話你低分，只係問吓啫。",
        "relationshipDelta": -1,
        "resultText": "他把簿角壓得更平，語氣也硬了一點。"
      }
    ]
  },
  {
    "id": "p1p3_peer_competitive_35",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "competitivePeer",
    "personalityAliases": [
      "pers_competitive_peer",
      "competitive_peer"
    ],
    "threshold": 35,
    "maxRelationshipCap": 80,
    "title": "鉛筆上的金色字",
    "scene": "小測前，他把一支寫著「100分加油」的鉛筆轉來轉去，金色字被他的手指磨到有點掉色。",
    "messageText": "呢支筆係我阿姨送嘅，話用呢支會考好啲。其實邊有咁神，不過我又唔敢唔用。你考試會唔會用特別嘢？",
    "minorEvent": "小測前交換安心文具。",
    "choices": [
      {
        "id": "positive",
        "text": "我有時都會用固定嗰支筆，唔係真係神，但會安心啲。",
        "playerLine": "我有時都會用固定嗰支筆，唔係真係神，但會安心啲。",
        "npcFollowUp": "係囉，安心啲都算有用啦。",
        "relationshipDelta": 1,
        "resultText": "梓軒像立刻抓住了「安心」兩個字，終於不用假裝自己完全不信這支筆。"
      },
      {
        "id": "neutral",
        "text": "我冇，邊支喺手就用邊支。",
        "playerLine": "我冇，邊支喺手就用邊支。",
        "npcFollowUp": "咁你幾隨便喎。",
        "relationshipDelta": 0,
        "resultText": "他像有點佩服，又有點不明白你怎樣不靠任何儀式上場。"
      },
      {
        "id": "negative",
        "text": "靠支筆有咩用，溫書先有用。",
        "playerLine": "靠支筆有咩用，溫書先有用。",
        "npcFollowUp": "我知呀，使唔使你講。",
        "relationshipDelta": -1,
        "resultText": "他把鉛筆收回筆袋，像連那點小迷信都不想再被看見。"
      }
    ]
  },
  {
    "id": "p1p3_peer_competitive_40",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "competitivePeer",
    "personalityAliases": [
      "pers_competitive_peer",
      "competitive_peer"
    ],
    "threshold": 40,
    "maxRelationshipCap": 80,
    "title": "改正貼紙的邊",
    "scene": "老師派回改正貼紙，他的貼紙貼歪了一點。他用指甲慢慢撕起邊角，想重貼，又怕撕爛紙。",
    "messageText": "如果貼歪咗，老師會唔會覺得我連改正都唔認真？明明我有改，只係貼歪。",
    "minorEvent": "幫他把改正貼紙貼直。",
    "choices": [
      {
        "id": "positive",
        "text": "你可以貼一張細紙喺下面遮住，咁睇落會直啲。",
        "playerLine": "你可以貼一張細紙喺下面遮住，咁睇落會直啲。",
        "npcFollowUp": "咁樣會唔會似特登整靚？",
        "relationshipDelta": 1,
        "resultText": "他嘴上還在擔心，但手已經停下來等你看角度。你接住的不是分數，而是他怕被誤會不認真的心情。"
      },
      {
        "id": "neutral",
        "text": "應該唔會，老師睇內容多啲。",
        "playerLine": "應該唔會，老師睇內容多啲。",
        "npcFollowUp": "希望係啦。",
        "relationshipDelta": 0,
        "resultText": "你說得合理，但他的眼睛還是盯著那一個歪角。"
      },
      {
        "id": "negative",
        "text": "你真係咩都要驚一餐。",
        "playerLine": "你真係咩都要驚一餐。",
        "npcFollowUp": "我唔驚就唔代表會好。",
        "relationshipDelta": -1,
        "resultText": "他把貼紙按下去，不再調整，但那張紙被按得有點皺。"
      }
    ]
  },
  {
    "id": "p1p3_peer_competitive_45",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "competitivePeer",
    "personalityAliases": [
      "pers_competitive_peer",
      "competitive_peer"
    ],
    "threshold": 45,
    "maxRelationshipCap": 80,
    "title": "前五名的影子",
    "scene": "走廊公布欄旁，他沒有看自己的作品，而是看著旁邊高年級比賽得獎名單。紙面反光，他的名字當然不在上面。",
    "messageText": "有時我覺得，前五名好似一個門口。入到去就有新袋扣、新鉛筆、新笑容。入唔到，就咩都冇。",
    "minorEvent": "一起做少錯一字清單。",
    "choices": [
      {
        "id": "positive",
        "text": "咁我哋可以先唔諗門口，諗下一次少錯一個字。你上次最常錯邊個？",
        "playerLine": "咁我哋可以先唔諗門口，諗下一次少錯一個字。你上次最常錯邊個？",
        "npcFollowUp": "你講到好似前五名好遠咁……但少錯一個好似又做到。",
        "relationshipDelta": 1,
        "resultText": "梓軒沒有立刻反駁你。那個很大的門口被你拆成了一個比較小的錯字。"
      },
      {
        "id": "neutral",
        "text": "你可能諗太多啦。",
        "playerLine": "你可能諗太多啦。",
        "npcFollowUp": "可能，但我屋企人會諗。",
        "relationshipDelta": 0,
        "resultText": "你沒有完全進入他的壓力，但他讓你聽見那壓力不是只在學校裡。"
      },
      {
        "id": "negative",
        "text": "你成日講前五名，聽到都煩。",
        "playerLine": "你成日講前五名，聽到都煩。",
        "npcFollowUp": "咁你咪唔好聽。",
        "relationshipDelta": -1,
        "resultText": "他把視線從名單上移開，像把那扇門也一起關起來。"
      }
    ]
  },
  {
    "id": "p1p3_peer_curious_troublemaker_25",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "curiousTroublemaker",
    "personalityAliases": [
      "pers_mischief_maker",
      "pers_curious_troublemaker",
      "mischief_maker",
      "curious_troublemaker"
    ],
    "threshold": 25,
    "maxRelationshipCap": 80,
    "title": "走廊窗邊的飛蛾",
    "scene": "他正蹲在走廊窗邊，盯著一隻飛進來的飛蛾。",
    "messageText": "佢隻翼上面有好似人臉嘅紋。老師話呢度以前係荒地，你覺唔覺……佢係嚟睇我哋有冇交功課嘅？如果我哋唔交，佢會唔會帶埋佢啲同伴入嚟？",
    "minorEvent": "給飛蛾的功課證明小紙條。",
    "choices": [
      {
        "id": "positive",
        "text": "好似係有啲眼嘅紋喎……不如我哋寫張紙仔喺窗邊，話佢聽我哋交咗？",
        "playerLine": "好似係有啲眼嘅紋喎……不如我哋寫張紙仔喺窗邊，話佢聽我哋交咗？",
        "npcFollowUp": "得！但字要細，唔可以俾老師以為我哋同昆蟲通信。",
        "relationshipDelta": 1,
        "resultText": "柏宇差點笑出聲，又趕快壓低。那隻飛蛾還是普通飛蛾，但你們已經替它安排了一個很奇怪的任務。"
      },
      {
        "id": "neutral",
        "text": "只係普通飛蛾啫，唔好玩啦。",
        "playerLine": "只係普通飛蛾啫，唔好玩啦。",
        "npcFollowUp": "普通飛蛾唔會咁啱飛入嚟望住功課簿㗎。",
        "relationshipDelta": 0,
        "resultText": "你沒有加入他的超現實推理，但他還是把那隻飛蛾看得很認真。"
      },
      {
        "id": "negative",
        "text": "你好嘔心呀，離遠啲。",
        "playerLine": "你好嘔心呀，離遠啲。",
        "npcFollowUp": "佢又冇掂你……",
        "relationshipDelta": -1,
        "resultText": "柏宇站起來時還回頭看了飛蛾一眼，像覺得你錯過了一個很重要的怪事。那個窗邊的小世界被你關在外面了。"
      }
    ]
  },
  {
    "id": "p1p3_peer_curious_troublemaker_30",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "curiousTroublemaker",
    "personalityAliases": [
      "pers_mischief_maker",
      "pers_curious_troublemaker",
      "mischief_maker",
      "curious_troublemaker"
    ],
    "threshold": 30,
    "maxRelationshipCap": 80,
    "title": "手冊角落的歪印",
    "scene": "老師蓋手冊時有一個紅色印仔蓋歪了，角落只剩半個圖案。柏宇把自己的手冊和你的手冊並排，像在比對證物。",
    "messageText": "你睇，你呢個印仔缺咗半邊，我嗰個又多咗一條紅線。呢啲唔似普通蓋錯，似係手冊怪獸行過留低嘅腳印。",
    "minorEvent": "記錄手冊歪印腳印。",
    "choices": [
      {
        "id": "positive",
        "text": "咁我哋要畫低腳印形狀，睇下有冇下一個。",
        "playerLine": "咁我哋要畫低腳印形狀，睇下有冇下一個。",
        "npcFollowUp": "好，案件名叫：紅印怪獸第一次出現。",
        "relationshipDelta": 1,
        "resultText": "柏宇立刻把鉛筆拿出來，像終於有人承認這不是無聊的蓋錯。"
      },
      {
        "id": "neutral",
        "text": "可能只係老師蓋太快。",
        "playerLine": "可能只係老師蓋太快。",
        "npcFollowUp": "老師蓋太快都可以係怪獸干擾。",
        "relationshipDelta": 0,
        "resultText": "你沒有相信，但他把你的解釋也塞進他的怪談裡。"
      },
      {
        "id": "negative",
        "text": "你唔好拎我本手冊亂講。",
        "playerLine": "你唔好拎我本手冊亂講。",
        "npcFollowUp": "我冇亂，我係比較。",
        "relationshipDelta": -1,
        "resultText": "他把手冊推回來，但那個缺半邊的印仔也失去了秘密證物的身份。"
      }
    ]
  },
  {
    "id": "p1p3_peer_curious_troublemaker_35",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "curiousTroublemaker",
    "personalityAliases": [
      "pers_mischief_maker",
      "pers_curious_troublemaker",
      "mischief_maker",
      "curious_troublemaker"
    ],
    "threshold": 35,
    "maxRelationshipCap": 80,
    "title": "飲水機的氣泡",
    "scene": "飲水機水面冒起一串小氣泡，柏宇沒有喝水，反而蹲下去看透明杯底。",
    "messageText": "你有冇聽過，水入面有時會有細細粒空氣困住？我覺得佢哋係被困喺水入面嘅訊息。你飲之前要唔要先問佢哋想講咩？",
    "minorEvent": "飲水機氣泡訊息觀察。",
    "choices": [
      {
        "id": "positive",
        "text": "咁我哋要等氣泡升晒先飲，睇下佢哋排咩形狀。",
        "playerLine": "咁我哋要等氣泡升晒先飲，睇下佢哋排咩形狀。",
        "npcFollowUp": "你呢個方法好科學，又好怪，我鍾意。",
        "relationshipDelta": 1,
        "resultText": "柏宇把杯子捧得很穩，像你們正在進行一個很嚴肅的荒謬實驗。"
      },
      {
        "id": "neutral",
        "text": "我淨係想飲水。",
        "playerLine": "我淨係想飲水。",
        "npcFollowUp": "飲都可以順便聽吓㗎。",
        "relationshipDelta": 0,
        "resultText": "你沒有接住實驗，他也沒有放棄把飲水變成謎團。"
      },
      {
        "id": "negative",
        "text": "你成日講到啲嘢好污糟，我唔想飲喇。",
        "playerLine": "你成日講到啲嘢好污糟，我唔想飲喇。",
        "npcFollowUp": "氣泡又唔污糟……",
        "relationshipDelta": -1,
        "resultText": "他有點委屈地看著杯底，好像你把一串氣泡都嫌棄了。"
      }
    ]
  },
  {
    "id": "p1p3_peer_curious_troublemaker_40",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "curiousTroublemaker",
    "personalityAliases": [
      "pers_mischief_maker",
      "pers_curious_troublemaker",
      "mischief_maker",
      "curious_troublemaker"
    ],
    "threshold": 40,
    "maxRelationshipCap": 80,
    "title": "第三格門鎖的箭嘴",
    "scene": "廁所外面的牆上有一道很淡的刮痕，像一個小小的箭嘴。柏宇站在門外，沒有進去，只是盯著那個痕。",
    "messageText": "你睇嗰個箭嘴，係咪指住第三格？我唔入去，我只係覺得有人以前可能喺度留低路線。",
    "minorEvent": "記下牆上小箭嘴。",
    "choices": [
      {
        "id": "positive",
        "text": "我哋唔入去，但可以畫低個箭嘴方向。",
        "playerLine": "我哋唔入去，但可以畫低個箭嘴方向。",
        "npcFollowUp": "對，調查員唔一定要衝入危險地方。",
        "relationshipDelta": 1,
        "resultText": "柏宇很用力地點頭，像你替他的好奇加了一條安全線，令它不至於變成闖禍。"
      },
      {
        "id": "neutral",
        "text": "可能係掃把撞到啫。",
        "playerLine": "可能係掃把撞到啫。",
        "npcFollowUp": "掃把都可能撞出線索。",
        "relationshipDelta": 0,
        "resultText": "他把你的正常解釋變成另一種可能，沒有被完全打散。"
      },
      {
        "id": "negative",
        "text": "你唔好喺廁所門口咁怪啦。",
        "playerLine": "你唔好喺廁所門口咁怪啦。",
        "npcFollowUp": "我企喺外面咋嘛。",
        "relationshipDelta": -1,
        "resultText": "他退開半步，像也知道這個地方確實不適合太大聲講秘密。"
      }
    ]
  },
  {
    "id": "p1p3_peer_curious_troublemaker_45",
    "lifeStageSet": "p1_p3",
    "identity": "same_age_peer",
    "personalityId": "curiousTroublemaker",
    "personalityAliases": [
      "pers_mischief_maker",
      "pers_curious_troublemaker",
      "mischief_maker",
      "curious_troublemaker"
    ],
    "threshold": 45,
    "maxRelationshipCap": 80,
    "title": "被沒收的小地圖",
    "scene": "下課後，他從書包夾層摸出一張皺皺的小紙，只剩半張。上面畫著走廊、樓梯和幾個你看不懂的叉號。",
    "messageText": "老師收咗我半張地圖，話我上堂畫呢啲會分心。其實我又唔係唔聽，我只係怕啲地方過咗今日就唔記得。",
    "minorEvent": "補回半張校園小地圖。",
    "choices": [
      {
        "id": "positive",
        "text": "咁你可以小息先畫，或者我幫你記住一個地方。",
        "playerLine": "咁你可以小息先畫，或者我幫你記住一個地方。",
        "npcFollowUp": "你幫我記？咁我哋要分工。",
        "relationshipDelta": 1,
        "resultText": "柏宇把剩下半張紙攤平，像那不是被沒收後的殘缺，而是一張可以繼續補完的地圖。"
      },
      {
        "id": "neutral",
        "text": "上堂畫地圖真係會俾人話。",
        "playerLine": "上堂畫地圖真係會俾人話。",
        "npcFollowUp": "我知，但有啲地方一閃就唔見。",
        "relationshipDelta": 0,
        "resultText": "你承認規矩，他承認自己不是完全無辜，話題停在兩邊之間。"
      },
      {
        "id": "negative",
        "text": "你抵俾老師收啦。",
        "playerLine": "你抵俾老師收啦。",
        "npcFollowUp": "……我又冇畫你。",
        "relationshipDelta": -1,
        "resultText": "柏宇把半張地圖摺回去，像不想再讓你看見那個他很認真的怪世界。"
      }
    ]
  },
  {
    "id": "p1p3_senior_strict_prefect_25",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_strict_prefect",
    "personalityAliases": [
      "strict_prefect",
      "pers_senior_strict_prefect"
    ],
    "threshold": 25,
    "maxRelationshipCap": 80,
    "title": "螞蟻隊伍和轉彎位",
    "scene": "走廊沒人，他靠在欄杆上，手裡拿著一張揉皺的檢查表，不是在巡邏，而是在看螞蟻排隊。",
    "messageText": "如果啲螞蟻行唔直，你會唔會想拎水喉沖散佢哋？……有時我覺得呢度啲隊伍好似啲螞蟻，只要有一個轉彎，後面全部都會撞埋一嚿。你係咪嗰個令隊伍撞埋一嚿嘅人？",
    "minorEvent": "放學轉彎位觀察。",
    "choices": [
      {
        "id": "positive",
        "text": "咁如果我行得好直，係咪會令你舒服啲？其實我覺得嗰個轉彎位設計得好怪。",
        "playerLine": "咁如果我行得好直，係咪會令你舒服啲？其實我覺得嗰個轉彎位設計得好怪。",
        "npcFollowUp": "係。你未到轉彎位之前就要睇定，唔好去到先諗。",
        "relationshipDelta": 1,
        "resultText": "俊朗把檢查表摺起來，語氣還是硬，但你聽得出他不是純粹想罵人。他是真的很在意隊伍會不會亂成一團。"
      },
      {
        "id": "neutral",
        "text": "你係咪太無聊啦？仲有陣間要集合。",
        "playerLine": "你係咪太無聊啦？仲有陣間要集合。",
        "npcFollowUp": "冇人跑咪可以睇吓。",
        "relationshipDelta": 0,
        "resultText": "你把話題拉回現實，他沒有生氣，只是又看了一眼那隻走歪的螞蟻。"
      },
      {
        "id": "negative",
        "text": "你真係好變態，無端端講咩沖散螞蟻。",
        "playerLine": "你真係好變態，無端端講咩沖散螞蟻。",
        "npcFollowUp": "我講隊伍，唔係講你。",
        "relationshipDelta": -1,
        "resultText": "他的聲音短了一點，那張揉皺的檢查表又被他捏緊。"
      }
    ]
  },
  {
    "id": "p1p3_senior_strict_prefect_30",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_strict_prefect",
    "personalityAliases": [
      "strict_prefect",
      "pers_senior_strict_prefect"
    ],
    "threshold": 30,
    "maxRelationshipCap": 80,
    "title": "紅線貼紙翹起",
    "scene": "樓梯口有一條提醒同學排隊的紅色膠紙，邊角翹起來，很多人經過都踩到。俊朗蹲下去按了兩次，還是翹起。",
    "messageText": "啲人見到紅線都照踩，踩到翹起，又話唔知要企邊。規矩有時唔係冇用，係被人踩到好似冇用。",
    "minorEvent": "留意樓梯口紅線。",
    "choices": [
      {
        "id": "positive",
        "text": "如果貼紙翹起，人真係會睇唔清。要唔要我幫你同老師講？",
        "playerLine": "如果貼紙翹起，人真係會睇唔清。要唔要我幫你同老師講？",
        "npcFollowUp": "唔使你講，我會講。你記住唔好踩就得。",
        "relationshipDelta": 1,
        "resultText": "他嘴硬地把責任收回自己手裡，但沒有拒絕你的觀察。你不是只被他管住，也開始看見他在管一條快爛掉的線。"
      },
      {
        "id": "neutral",
        "text": "可能大家趕時間先踩到。",
        "playerLine": "可能大家趕時間先踩到。",
        "npcFollowUp": "趕時間唔係理由。",
        "relationshipDelta": 0,
        "resultText": "他回答得很快，但沒有再繼續罵下去。"
      },
      {
        "id": "negative",
        "text": "一條膠紙啫，使唔使咁緊張。",
        "playerLine": "一條膠紙啫，使唔使咁緊張。",
        "npcFollowUp": "就係一條膠紙都守唔到，先會亂。",
        "relationshipDelta": -1,
        "resultText": "他站起來，像決定不再跟你解釋這種小事的重要。"
      }
    ]
  },
  {
    "id": "p1p3_senior_strict_prefect_35",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_strict_prefect",
    "personalityAliases": [
      "strict_prefect",
      "pers_senior_strict_prefect"
    ],
    "threshold": 35,
    "maxRelationshipCap": 80,
    "title": "風紀章的別針",
    "scene": "小息快完，他站在牆邊扣風紀章，別針有點鬆，扣一次又彈開。他的表情比平時更煩躁。",
    "messageText": "呢個章成日鬆。跌咗又要俾人話唔整齊，但其實係個扣壞，唔係我冇扣好。",
    "minorEvent": "幫風紀章墊紙。",
    "choices": [
      {
        "id": "positive",
        "text": "你可以喺後面墊一小張紙，可能會實啲。",
        "playerLine": "你可以喺後面墊一小張紙，可能會實啲。",
        "npcFollowUp": "……你試過？",
        "relationshipDelta": 1,
        "resultText": "他看著那張小紙，難得沒有立刻否定。原來他不只是要求別人整齊，也會被一個壞扣弄得很火。"
      },
      {
        "id": "neutral",
        "text": "咁你同老師講個扣壞咗。",
        "playerLine": "咁你同老師講個扣壞咗。",
        "npcFollowUp": "講咗都要等。",
        "relationshipDelta": 0,
        "resultText": "方法很正確，但他像已經試過正確方法卻沒有立刻有用。"
      },
      {
        "id": "negative",
        "text": "你平時咁嚴，自己跌章都幾好笑。",
        "playerLine": "你平時咁嚴，自己跌章都幾好笑。",
        "npcFollowUp": "好笑咩？",
        "relationshipDelta": -1,
        "resultText": "他的手停在別針上，臉一下子冷了。"
      }
    ]
  },
  {
    "id": "p1p3_senior_strict_prefect_40",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_strict_prefect",
    "personalityAliases": [
      "strict_prefect",
      "pers_senior_strict_prefect"
    ],
    "threshold": 40,
    "maxRelationshipCap": 80,
    "title": "記名表上的橡皮印",
    "scene": "檢查表上有幾個名字被擦過又重寫，紙面灰灰的。俊朗盯著那些擦痕，像不太想再寫下一個名字。",
    "messageText": "有時我叫人停低，佢哋話我針對佢。有時我唔寫名，老師又話我冇做好。你覺得警告同寫名，邊個公平啲？",
    "minorEvent": "一起想風紀警告規則。",
    "choices": [
      {
        "id": "positive",
        "text": "第一次可以警告，第二次先寫名。咁人知道自己有機會改。",
        "playerLine": "第一次可以警告，第二次先寫名。咁人知道自己有機會改。",
        "npcFollowUp": "……聽落似規矩。",
        "relationshipDelta": 1,
        "resultText": "俊朗把筆尖移開一點，像第一次把「怎樣管人」這件事拿出來和你商量。"
      },
      {
        "id": "neutral",
        "text": "我唔知，我唔想俾人寫名。",
        "playerLine": "我唔知，我唔想俾人寫名。",
        "npcFollowUp": "冇人想。",
        "relationshipDelta": 0,
        "resultText": "你說了最直接的感受，他也沒有反駁，只是把表摺起來。"
      },
      {
        "id": "negative",
        "text": "你唔好寫人名咪得囉。",
        "playerLine": "你唔好寫人名咪得囉。",
        "npcFollowUp": "咁要風紀嚟做咩？",
        "relationshipDelta": -1,
        "resultText": "他把表握緊，像你把他的角色整個推成了多餘。"
      }
    ]
  },
  {
    "id": "p1p3_senior_strict_prefect_45",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_strict_prefect",
    "personalityAliases": [
      "strict_prefect",
      "pers_senior_strict_prefect"
    ],
    "threshold": 45,
    "maxRelationshipCap": 80,
    "title": "他也會站錯位置",
    "scene": "放學前，走廊臨時換了隊伍位置。俊朗看著新貼的班牌，罕見地停了半秒，然後才指揮別人。",
    "messageText": "今日個牌換咗位。你唔好笑，我都差啲望錯。規矩如果日日改，守規矩嗰個都會亂。",
    "minorEvent": "放學前重新確認新班牌。",
    "choices": [
      {
        "id": "positive",
        "text": "咁你頭先都要重新睇一次，唔係淨係我會亂。",
        "playerLine": "咁你頭先都要重新睇一次，唔係淨係我會亂。",
        "npcFollowUp": "所以我叫你睇牌，唔係叫你估。",
        "relationshipDelta": 1,
        "resultText": "他沒有承認自己慌張，但那半秒已經被你看見。你們之間第一次不是只有他提醒你，而是一起面對一個真的會變的隊伍。"
      },
      {
        "id": "neutral",
        "text": "哦，咁我今日會睇清楚。",
        "playerLine": "哦，咁我今日會睇清楚。",
        "npcFollowUp": "睇清楚就得。",
        "relationshipDelta": 0,
        "resultText": "你接住了方法，沒有碰那半秒的停頓。"
      },
      {
        "id": "negative",
        "text": "原來你都會錯，仲成日話人。",
        "playerLine": "原來你都會錯，仲成日話人。",
        "npcFollowUp": "我冇錯，我係確認。",
        "relationshipDelta": -1,
        "resultText": "俊朗立刻把語氣拉硬，那個剛露出的空隙被他自己堵回去了。"
      }
    ]
  },
  {
    "id": "p1p3_senior_friendly_senior_25",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_friendly_senior",
    "personalityAliases": [
      "friendly_senior",
      "pers_senior_friendly_mentor"
    ],
    "threshold": 25,
    "maxRelationshipCap": 80,
    "title": "塗黑的名字",
    "scene": "小息時她坐在梯間，腿上放著一本寫滿塗鴉的簿，她不是在看書，是在塗黑所有不喜歡的字。",
    "messageText": "你有冇試過覺得自己個名好難聽？我以前覺得芷悠兩個字好似啲老人家。其實你可以唔使跟住手冊上面寫嗰套做，有啲規矩……例如唔准帶零食，其實只要你塞入個筆袋入面，邊個會知？",
    "minorEvent": "梯間交換名字秘密。",
    "choices": [
      {
        "id": "positive",
        "text": "筆袋？唔會穿窿咩？不過……你個名其實幾好聽，好過寫嗰個。",
        "playerLine": "筆袋？唔會穿窿咩？不過……你個名其實幾好聽，好過寫嗰個。",
        "npcFollowUp": "你真係覺得？我以前成日想改到好似漫畫角色咁。",
        "relationshipDelta": 1,
        "resultText": "芷悠笑得很輕，沒有真的把零食拿出來。你接住的不是違規，而是她把自己名字說成不好聽時那一點不安。"
      },
      {
        "id": "neutral",
        "text": "老師話唔准就唔准啦，我唔想俾人捉。",
        "playerLine": "老師話唔准就唔准啦，我唔想俾人捉。",
        "npcFollowUp": "都啱，小一俾人捉到會好驚。",
        "relationshipDelta": 0,
        "resultText": "你保持安全距離，她沒有逼你跟著壞，只把簿角摺了一下。"
      },
      {
        "id": "negative",
        "text": "你身為高年級仲教壞細路？我要話俾班主任聽。",
        "playerLine": "你身為高年級仲教壞細路？我要話俾班主任聽。",
        "npcFollowUp": "我又未真係叫你帶。",
        "relationshipDelta": -1,
        "resultText": "她把簿合上，像一下子記起自己在你眼中仍然是高年級學生，不是可以講怪話的人。"
      }
    ]
  },
  {
    "id": "p1p3_senior_friendly_senior_30",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_friendly_senior",
    "personalityAliases": [
      "friendly_senior",
      "pers_senior_friendly_mentor"
    ],
    "threshold": 30,
    "maxRelationshipCap": 80,
    "title": "下半截報名紙",
    "scene": "朗誦報名紙貼在走廊，下面一半被別人貼的通告遮住。芷悠用指甲輕輕撥開一角，看見裡面寫著「可先試讀」。",
    "messageText": "你頭先只望咗『比賽』兩個字就走。下面其實寫住可以先試讀，唔係即刻報名。好多嘢嚇人係因為你淨係睇到上面。",
    "minorEvent": "和芷悠看報名紙下半截。",
    "choices": [
      {
        "id": "positive",
        "text": "咁你陪我睇下半截得唔得？",
        "playerLine": "咁你陪我睇下半截得唔得？",
        "npcFollowUp": "得呀，睇清楚先，唔答應都可以。",
        "relationshipDelta": 1,
        "resultText": "她把通告角壓住，讓你重新看一次。那張紙仍然是報名紙，但不像剛才那樣一下子推你上台。"
      },
      {
        "id": "neutral",
        "text": "我見到比賽就驚。",
        "playerLine": "我見到比賽就驚。",
        "npcFollowUp": "驚同想睇係兩回事。",
        "relationshipDelta": 0,
        "resultText": "她把退路說得很清楚，你沒有靠近，但也沒有被迫離開。"
      },
      {
        "id": "negative",
        "text": "我唔想睇，睇咗都唔會參加。",
        "playerLine": "我唔想睇，睇咗都唔會參加。",
        "npcFollowUp": "好呀，唔想就唔使逼自己。",
        "relationshipDelta": -1,
        "resultText": "她放開那張紙角，像也放開了這次邀請。"
      }
    ]
  },
  {
    "id": "p1p3_senior_friendly_senior_35",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_friendly_senior",
    "personalityAliases": [
      "friendly_senior",
      "pers_senior_friendly_mentor"
    ],
    "threshold": 35,
    "maxRelationshipCap": 80,
    "title": "她以前排錯隊",
    "scene": "樓梯轉角有一個褪色的班牌貼痕。芷悠站在那裡，看了一會兒，像在看一個很舊的笑話。",
    "messageText": "我小一嗰陣試過跟錯隊，仲跟到人哋班門口先發現。嗰陣我以為全世界都望住我，其實可能得兩個人望到。",
    "minorEvent": "聽芷悠講排錯隊舊事。",
    "choices": [
      {
        "id": "positive",
        "text": "咁你而家仲記得，即係嗰兩個人望得好大力。",
        "playerLine": "咁你而家仲記得，即係嗰兩個人望得好大力。",
        "npcFollowUp": "可能係我自己望返自己望得大力。",
        "relationshipDelta": 1,
        "resultText": "芷悠笑了一下，像你沒有只把這件事當成她安慰你的故事，而是聽見她其實也記得那種尷尬。"
      },
      {
        "id": "neutral",
        "text": "原來高年級都試過咁。",
        "playerLine": "原來高年級都試過咁。",
        "npcFollowUp": "高年級又唔係一出世就識行學校。",
        "relationshipDelta": 0,
        "resultText": "這句話讓她不像一個永遠熟路的人，只是比你早經過一次。"
      },
      {
        "id": "negative",
        "text": "咁你都幾蠢。",
        "playerLine": "咁你都幾蠢。",
        "npcFollowUp": "係呀，嗰陣係。",
        "relationshipDelta": -1,
        "resultText": "她答得很快，但那個笑容淡了一點。"
      }
    ]
  },
  {
    "id": "p1p3_senior_friendly_senior_40",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_friendly_senior",
    "personalityAliases": [
      "friendly_senior",
      "pers_senior_friendly_mentor"
    ],
    "threshold": 40,
    "maxRelationshipCap": 80,
    "title": "塗鴉簿裡的第二個名字",
    "scene": "她那本塗鴉簿翻到一頁，角落寫著一個很誇張的假名，旁邊畫了幾顆星，又被她用鉛筆劃掉一半。",
    "messageText": "我以前想像如果我有第二個名，就可以用第二個人嘅方式講嘢。芷悠要好乖，但另一個名可以唔理人。",
    "minorEvent": "和芷悠的第二個名字小玩笑。",
    "choices": [
      {
        "id": "positive",
        "text": "咁另一個名今日可以陪我睇一張紙，唔使做師姐。",
        "playerLine": "咁另一個名今日可以陪我睇一張紙，唔使做師姐。",
        "npcFollowUp": "你講到好似召喚咁。",
        "relationshipDelta": 1,
        "resultText": "她被你逗笑，肩膀放鬆了一點。你不是只叫她做師姐，而是給了她一個不用一直成熟的位置。"
      },
      {
        "id": "neutral",
        "text": "我唔係好明，但聽落幾得意。",
        "playerLine": "我唔係好明，但聽落幾得意。",
        "npcFollowUp": "唔明都正常，我都未諗清楚。",
        "relationshipDelta": 0,
        "resultText": "你沒有進入那個名字遊戲，但也沒有嘲笑。"
      },
      {
        "id": "negative",
        "text": "咁樣好奇怪，做返自己咪得。",
        "playerLine": "咁樣好奇怪，做返自己咪得。",
        "npcFollowUp": "你以為自己咁易做咩。",
        "relationshipDelta": -1,
        "resultText": "她把那個假名用力劃黑，像不想讓你再看。"
      }
    ]
  },
  {
    "id": "p1p3_senior_friendly_senior_45",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_friendly_senior",
    "personalityAliases": [
      "friendly_senior",
      "pers_senior_friendly_mentor"
    ],
    "threshold": 45,
    "maxRelationshipCap": 80,
    "title": "她不想一直被叫師姐",
    "scene": "放學後，一群小一學生遠遠叫她「師姐」。她笑著應了，但等人走後，把書包帶拉緊了一下。",
    "messageText": "有時我都唔知點解被叫師姐就要識晒所有嘢。我都會唔想答問題，只係我答慢啲，啲小一就會更驚。",
    "minorEvent": "芷悠可以說不知道的一次。",
    "choices": [
      {
        "id": "positive",
        "text": "咁你可以同我講唔知，我唔會即刻驚。",
        "playerLine": "咁你可以同我講唔知，我唔會即刻驚。",
        "npcFollowUp": "你講到好似俾我休息咁。",
        "relationshipDelta": 1,
        "resultText": "芷悠看了你一眼，像第一次可以不用把自己放在很懂事的位置上。"
      },
      {
        "id": "neutral",
        "text": "但你真係識多好多。",
        "playerLine": "但你真係識多好多。",
        "npcFollowUp": "識多啲同識晒係兩回事。",
        "relationshipDelta": 0,
        "resultText": "你仍然把她看成高年級，但她至少把差別說了出來。"
      },
      {
        "id": "negative",
        "text": "你係師姐，梗係要識啦。",
        "playerLine": "你係師姐，梗係要識啦。",
        "npcFollowUp": "……咁都係。",
        "relationshipDelta": -1,
        "resultText": "她又把笑容放回臉上，但那一下像是戴回去的。"
      }
    ]
  },
  {
    "id": "p1p3_senior_aloof_25",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_aloof",
    "personalityAliases": [
      "senior_aloof"
    ],
    "threshold": 25,
    "maxRelationshipCap": 80,
    "title": "廢棄櫃子和爛雨傘",
    "scene": "他在圖書室深處，正對著一個廢棄的櫃子發呆，櫃子裡有一把不知道誰留下的殘破雨傘。",
    "messageText": "呢度啲嘢成日消失，就像這把傘，上個月仲有人用，依家爛咗就丟喺度，邊個都唔理。如果你唔想變得同把遮一樣無人理，最好習慣做完嘢就自己收好。",
    "minorEvent": "查看廢櫃裡的爛傘。",
    "choices": [
      {
        "id": "positive",
        "text": "所以我應該收走佢，定係留低佢？你係咪試過被丟喺度嘅感覺？",
        "playerLine": "所以我應該收走佢，定係留低佢？你係咪試過被丟喺度嘅感覺？",
        "npcFollowUp": "你問太多。不過把遮留喺度都唔會自己好返。",
        "relationshipDelta": 1,
        "resultText": "他嘴上說你問太多，卻沒有立刻走開。你像是碰到他話裡真正卡住的地方，不只是聽到一句冷冰冰的提醒。"
      },
      {
        "id": "neutral",
        "text": "……哦，我知道喇。",
        "playerLine": "……哦，我知道喇。",
        "npcFollowUp": "咁就得。",
        "relationshipDelta": 0,
        "resultText": "對話很短，像他本來也沒有打算說更多。那把爛傘仍然斜斜靠在櫃子裡。"
      },
      {
        "id": "negative",
        "text": "你講嘢好令人唔舒服，你係咪心理有問題？",
        "playerLine": "你講嘢好令人唔舒服，你係咪心理有問題？",
        "npcFollowUp": "咁你咪唔好聽。",
        "relationshipDelta": -1,
        "resultText": "他把櫃門關上，聲音不大，但你感覺他也把話題一起關回去了。"
      }
    ]
  },
  {
    "id": "p1p3_senior_aloof_30",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_aloof",
    "personalityAliases": [
      "senior_aloof"
    ],
    "threshold": 30,
    "maxRelationshipCap": 80,
    "title": "失物箱裡的午餐布",
    "scene": "失物箱裡有一條皺皺的午餐布，角落繡了名字，但線已經鬆開。柏言用尺把它推正，沒有用手拿。",
    "messageText": "啲人丟嘢之前通常都覺得唔重要。等到要用先話唔見。名字都繡住，照樣冇人嚟拎。",
    "minorEvent": "幫失物午餐布找主人。",
    "choices": [
      {
        "id": "positive",
        "text": "可能佢唔知放咗入失物箱。要唔要貼張紙喺班房門口？",
        "playerLine": "可能佢唔知放咗入失物箱。要唔要貼張紙喺班房門口？",
        "npcFollowUp": "你覺得有人會睇？",
        "relationshipDelta": 1,
        "resultText": "他問得冷淡，但沒有否定。你把失物箱裡的午餐布變成一件還可以找回主人的東西。"
      },
      {
        "id": "neutral",
        "text": "我會記得自己啲嘢。",
        "playerLine": "我會記得自己啲嘢。",
        "npcFollowUp": "希望你真係記得。",
        "relationshipDelta": 0,
        "resultText": "他接受你的回答，卻像不太相信任何人能一直記得。"
      },
      {
        "id": "negative",
        "text": "唔見咪買過囉。",
        "playerLine": "唔見咪買過囉。",
        "npcFollowUp": "咁你最好有好多嘢可以買過。",
        "relationshipDelta": -1,
        "resultText": "他的語氣冷了下來，那條午餐布變得更像一件被輕易放棄的東西。"
      }
    ]
  },
  {
    "id": "p1p3_senior_aloof_35",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_aloof",
    "personalityAliases": [
      "senior_aloof"
    ],
    "threshold": 35,
    "maxRelationshipCap": 80,
    "title": "過期借書卡",
    "scene": "圖書室一張桌面上有本書夾著過期借書卡，日期印蓋得很深。柏言把書推回書架旁邊，沒有放進去。",
    "messageText": "逾期一日，兩日，三日，到最後就冇人想承認。其實遲還一本書唔會死人，最煩係裝作唔係自己。",
    "minorEvent": "把過期書放到櫃檯。",
    "choices": [
      {
        "id": "positive",
        "text": "咁不如放喺櫃檯，等佢唔使自己講都可以還。",
        "playerLine": "咁不如放喺櫃檯，等佢唔使自己講都可以還。",
        "npcFollowUp": "逃避都幫佢設路線？你幾好人。",
        "relationshipDelta": 1,
        "resultText": "他像在諷刺，但還是把書拿往櫃檯方向。你沒有要求那個人立刻勇敢，只是留了一條可以補救的路。"
      },
      {
        "id": "neutral",
        "text": "遲還書係唔好。",
        "playerLine": "遲還書係唔好。",
        "npcFollowUp": "嗯，人人都識講。",
        "relationshipDelta": 0,
        "resultText": "你的答案正確，但他似乎想聽的不是規則本身。"
      },
      {
        "id": "negative",
        "text": "你又唔知係邊個，講咁多做咩。",
        "playerLine": "你又唔知係邊個，講咁多做咩。",
        "npcFollowUp": "所以我先冇問你。",
        "relationshipDelta": -1,
        "resultText": "他把書推開一點，像不想再讓你靠近這種麻煩事。"
      }
    ]
  },
  {
    "id": "p1p3_senior_aloof_40",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_aloof",
    "personalityAliases": [
      "senior_aloof"
    ],
    "threshold": 40,
    "maxRelationshipCap": 80,
    "title": "窗台上的孤零橡皮筋",
    "scene": "走廊窗台上有一條斷了一邊的橡皮筋，被風推到角落。柏言停下來看了兩秒。",
    "messageText": "你睇，一斷咗就冇用。明明之前可以綁住成疊紙，依家連自己都圈唔住。",
    "minorEvent": "替斷橡皮筋找新用途。",
    "choices": [
      {
        "id": "positive",
        "text": "斷咗都可以綁細啲嘢，或者做書籤。唔一定即刻冇用。",
        "playerLine": "斷咗都可以綁細啲嘢，或者做書籤。唔一定即刻冇用。",
        "npcFollowUp": "你係咪成日幫冇用嘅嘢諗出路？",
        "relationshipDelta": 1,
        "resultText": "他把橡皮筋拿起來，沒有丟掉。你像是把他一句冷話拐到另一個方向。"
      },
      {
        "id": "neutral",
        "text": "斷咗就掉咗啦。",
        "playerLine": "斷咗就掉咗啦。",
        "npcFollowUp": "大部分人都係咁。",
        "relationshipDelta": 0,
        "resultText": "你的答案很正常，他也沒有反駁，只是把視線移開。"
      },
      {
        "id": "negative",
        "text": "你連橡皮筋都可以講到咁灰。",
        "playerLine": "你連橡皮筋都可以講到咁灰。",
        "npcFollowUp": "咁你聽少啲。",
        "relationshipDelta": -1,
        "resultText": "他沒有生氣，但很快離開窗台，像不想再讓你聽他的想法。"
      }
    ]
  },
  {
    "id": "p1p3_senior_aloof_45",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_aloof",
    "personalityAliases": [
      "senior_aloof"
    ],
    "threshold": 45,
    "maxRelationshipCap": 80,
    "title": "他其實記得誰丟東西",
    "scene": "有人在圖書室門口找不到鉛筆盒，柏言沒有抬頭就說出它被放在第三排桌底。那人走後，他才把書翻過一頁。",
    "messageText": "我唔係唔理人。我只係覺得，如果我每次都提，佢哋永遠唔會自己記得。你係咪都覺得我好似咩都唔關心？",
    "minorEvent": "理解柏言的冷淡提醒。",
    "choices": [
      {
        "id": "positive",
        "text": "你係關心，只係講到好似唔關心。",
        "playerLine": "你係關心，只係講到好似唔關心。",
        "npcFollowUp": "咁都幾麻煩。",
        "relationshipDelta": 1,
        "resultText": "他沒有否認，也沒有承認，只是把書頁壓平了一點。你第一次把他的冷淡看成一種很不方便的關心。"
      },
      {
        "id": "neutral",
        "text": "我都唔知，你平時好少講。",
        "playerLine": "我都唔知，你平時好少講。",
        "npcFollowUp": "少講唔代表冇睇。",
        "relationshipDelta": 0,
        "resultText": "你沒有下判斷，他也只給了你一句很短的答案。"
      },
      {
        "id": "negative",
        "text": "係呀，你好似成日都唔理人。",
        "playerLine": "係呀，你好似成日都唔理人。",
        "npcFollowUp": "咁就當係。",
        "relationshipDelta": -1,
        "resultText": "他把書合上，像你替他選了一個最容易的外殼。"
      }
    ]
  },
  {
    "id": "p1p3_senior_competitive_captain_25",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_competitive_captain",
    "personalityAliases": [
      "senior_competitive_captain"
    ],
    "threshold": 25,
    "maxRelationshipCap": 80,
    "title": "反覆拍球和棋子感",
    "scene": "練習後，她獨自在角落反覆拍球，拍得很響，但眼神沒看球，是在盯著天花板。",
    "messageText": "你覺唔覺得自己係個棋子？教練話去邊，你就去邊，贏咗就話係隊伍強，輸咗就話係我哋冇力。其實我好想有一日故意輸，睇下佢哋會唔會好似你哋咁樣驚。",
    "minorEvent": "練習後談一次故意失手的想法。",
    "choices": [
      {
        "id": "positive",
        "text": "嗰種驚係因為我哋冇選擇。如果你想玩，下場我哋試下夾份輸，睇下有咩發生？",
        "playerLine": "嗰種驚係因為我哋冇選擇。如果你想玩，下場我哋試下夾份輸，睇下有咩發生？",
        "npcFollowUp": "你膽都幾大。不過我可能只係講吓，真係落場我又會想贏。",
        "relationshipDelta": 1,
        "resultText": "她沒有真的立刻要破壞比賽，但你接住了她想試探規則的念頭。那一下拍球聲慢了半拍。"
      },
      {
        "id": "neutral",
        "text": "但我哋係為咗贏先練習㗎嘛，輸咗有咩意義？",
        "playerLine": "但我哋係為咗贏先練習㗎嘛，輸咗有咩意義？",
        "npcFollowUp": "我知。所以我先喺練完之後先諗。",
        "relationshipDelta": 0,
        "resultText": "你守住了目標，她也沒有反駁。球聲繼續響，只是變得更規律。"
      },
      {
        "id": "negative",
        "text": "原來你係咁樣嘅人，我會話俾教練聽。",
        "playerLine": "原來你係咁樣嘅人，我會話俾教練聽。",
        "npcFollowUp": "我又未做。",
        "relationshipDelta": -1,
        "resultText": "球重重彈了一下，她伸手接住，表情像一下子重新變回隊長。"
      }
    ]
  },
  {
    "id": "p1p3_senior_competitive_captain_30",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_competitive_captain",
    "personalityAliases": [
      "senior_competitive_captain"
    ],
    "threshold": 30,
    "maxRelationshipCap": 80,
    "title": "鞋底的白粉線",
    "scene": "球場邊緣的白線被踩到有點散，凱晴用鞋尖把粉末推回線內，好像在修一條快散開的界線。",
    "messageText": "一隻腳踩出界，裁判會吹。可係平時啲人講嘢踩過界，又冇人吹。你覺得點先算出界？",
    "minorEvent": "一起想隊伍說話界線。",
    "choices": [
      {
        "id": "positive",
        "text": "如果講完人哋唔想再玩，可能就出界。",
        "playerLine": "如果講完人哋唔想再玩，可能就出界。",
        "npcFollowUp": "咁即係要睇對方反應。",
        "relationshipDelta": 1,
        "resultText": "凱晴停下鞋尖，像真的把你的答案放進下一場練習裡，而不是只聽一句道理。"
      },
      {
        "id": "neutral",
        "text": "球場有線先算，講嘢好難計。",
        "playerLine": "球場有線先算，講嘢好難計。",
        "npcFollowUp": "所以麻煩。",
        "relationshipDelta": 0,
        "resultText": "你給了安全答案，她沒有不滿，只是繼續把白粉推平。"
      },
      {
        "id": "negative",
        "text": "你唔好成日講到咁複雜啦。",
        "playerLine": "你唔好成日講到咁複雜啦。",
        "npcFollowUp": "隊長唔複雜就唔使做隊長。",
        "relationshipDelta": -1,
        "resultText": "她把鞋尖收回去，像那條被踩散的線也不打算給你看了。"
      }
    ]
  },
  {
    "id": "p1p3_senior_competitive_captain_35",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_competitive_captain",
    "personalityAliases": [
      "senior_competitive_captain"
    ],
    "threshold": 35,
    "maxRelationshipCap": 80,
    "title": "隊友水樽上的名字貼",
    "scene": "練習後水樽排成一排，幾張名字貼被汗水浸到捲起。凱晴把它們逐個按回去，按到指尖發白。",
    "messageText": "如果比賽輸，大家會話成隊輸。但水樽唔見嗰陣，又會叫我逐個記邊個邊個。隊長係咪即係要記住所有人啲小錯？",
    "minorEvent": "提醒隊友自己貼好名字貼。",
    "choices": [
      {
        "id": "positive",
        "text": "你可以叫每個人自己貼返好，唔一定全部你記。",
        "playerLine": "你可以叫每個人自己貼返好，唔一定全部你記。",
        "npcFollowUp": "叫佢哋自己做，佢哋又話我煩。",
        "relationshipDelta": 1,
        "resultText": "她嘴上抱怨，但已經把其中一個水樽推到旁邊，像真的想試一次不全部自己扛。"
      },
      {
        "id": "neutral",
        "text": "可能隊長係要記多啲。",
        "playerLine": "可能隊長係要記多啲。",
        "npcFollowUp": "我知，所以我咪記。",
        "relationshipDelta": 0,
        "resultText": "你說出她已經知道的答案，她沒有反駁，手上的名字貼也沒有停。"
      },
      {
        "id": "negative",
        "text": "你自己想做隊長，就唔好呻。",
        "playerLine": "你自己想做隊長，就唔好呻。",
        "npcFollowUp": "我冇話我唔做。",
        "relationshipDelta": -1,
        "resultText": "她把最後一張貼紙按得太用力，邊角皺了起來。"
      }
    ]
  },
  {
    "id": "p1p3_senior_competitive_captain_40",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_competitive_captain",
    "personalityAliases": [
      "senior_competitive_captain"
    ],
    "threshold": 40,
    "maxRelationshipCap": 80,
    "title": "球拍膠布和手指泡",
    "scene": "她的手指貼著一小塊膠布，球拍握柄上也纏了新的白色膠帶。她用拇指按著膠帶接口，按了一遍又一遍。",
    "messageText": "教練話磨到起泡就代表練得夠。但如果起泡之後握唔穩，輸咗又係自己問題。你覺得努力到痛就一定啱？",
    "minorEvent": "幫凱晴重新貼握柄膠帶。",
    "choices": [
      {
        "id": "positive",
        "text": "痛到握唔穩就唔啱。你可以休息一下，但唔代表你冇努力。",
        "playerLine": "痛到握唔穩就唔啱。你可以休息一下，但唔代表你冇努力。",
        "npcFollowUp": "休息呢兩個字，教練講出嚟同你講出嚟差好遠。",
        "relationshipDelta": 1,
        "resultText": "她看著膠布，拍球聲終於停了一下。你不是叫她放棄，而是讓她不用把痛當成唯一證明。"
      },
      {
        "id": "neutral",
        "text": "練習有時係會痛。",
        "playerLine": "練習有時係會痛。",
        "npcFollowUp": "我知，我冇話唔練。",
        "relationshipDelta": 0,
        "resultText": "她接受這個答案，因為這也是她一直對自己說的話。"
      },
      {
        "id": "negative",
        "text": "你怕痛就唔好做隊長。",
        "playerLine": "你怕痛就唔好做隊長。",
        "npcFollowUp": "我唔怕痛。",
        "relationshipDelta": -1,
        "resultText": "她立刻回了一句，快得像不想讓那句話停在空氣裡。"
      }
    ]
  },
  {
    "id": "p1p3_senior_competitive_captain_45",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_competitive_captain",
    "personalityAliases": [
      "senior_competitive_captain"
    ],
    "threshold": 45,
    "maxRelationshipCap": 80,
    "title": "不要替她加油",
    "scene": "操場角落，她一個人練定點投球。每進一球，她沒有笑；每失一球，她也沒有罵，只是在心裡數。",
    "messageText": "你如果企喺度睇，可以唔可以唔好嗌加油？我今日唔想聽人叫我加油，我想知冇聲嗰陣自己會唔會穩。",
    "minorEvent": "無聲幫凱晴數投球。",
    "choices": [
      {
        "id": "positive",
        "text": "好，我幫你數，但唔出聲。",
        "playerLine": "好，我幫你數，但唔出聲。",
        "npcFollowUp": "入咗就記一下，唔好拍手。",
        "relationshipDelta": 1,
        "resultText": "凱晴把球丟給自己又接住。她讓你留下，但要求你用她指定的方式留下，這比普通鼓勵更像信任。"
      },
      {
        "id": "neutral",
        "text": "點解唔想人加油？",
        "playerLine": "點解唔想人加油？",
        "npcFollowUp": "因為有人加油，我會想證明俾佢睇。",
        "relationshipDelta": 0,
        "resultText": "她說得很直接，但沒有要你一定明白。"
      },
      {
        "id": "negative",
        "text": "加油都唔得，你都幾難服侍。",
        "playerLine": "加油都唔得，你都幾難服侍。",
        "npcFollowUp": "咁你可以唔睇。",
        "relationshipDelta": -1,
        "resultText": "她轉回球場，像把自己那個不想被聲音推著走的空間收回去。"
      }
    ]
  },
  {
    "id": "p1p3_senior_gentle_helper_25",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_gentle_helper",
    "personalityAliases": [
      "senior_gentle_helper"
    ],
    "threshold": 25,
    "maxRelationshipCap": 80,
    "title": "缺頁書和擦不掉的字",
    "scene": "服務時間，她不是在整理書，而是在數著書架上每一本缺頁的書，並用膠紙慢慢修補。",
    "messageText": "呢本書，已經有四個小朋友畫過粗口喺入面，我擦極都仲有痕跡。有啲人好似好鍾意留低啲污糟嘢，想人記得佢。你呢？你係咪嗰種會寫嘢入去嘅人？",
    "minorEvent": "修補被畫花的圖書。",
    "choices": [
      {
        "id": "positive",
        "text": "我唔會畫，但我可以幫你用擦膠一齊擦，或者搵啲嘢貼住佢。",
        "playerLine": "我唔會畫，但我可以幫你用擦膠一齊擦，或者搵啲嘢貼住佢。",
        "npcFollowUp": "貼住佢……都可以，至少下一個人唔使第一眼就見到。",
        "relationshipDelta": 1,
        "resultText": "嘉澄把便條紙拿近了一點，像你不是只說自己沒有做壞事，而是真的願意幫她把那本書補回一點點。"
      },
      {
        "id": "neutral",
        "text": "我冇畫過，我唔清楚。",
        "playerLine": "我冇畫過，我唔清楚。",
        "npcFollowUp": "嗯，冇畫就好。",
        "relationshipDelta": 0,
        "resultText": "你和那本書保持距離，她也沒有怪你。她低頭繼續把膠紙剪短。"
      },
      {
        "id": "negative",
        "text": "你成日搞埋啲無聊嘢，好浪費時間。",
        "playerLine": "你成日搞埋啲無聊嘢，好浪費時間。",
        "npcFollowUp": "如果唔整，下一個人就會睇到。",
        "relationshipDelta": -1,
        "resultText": "她的聲音仍然很輕，但手上的膠紙貼得更慢。那種安靜的服務感，被你說成了不重要的事。"
      }
    ]
  },
  {
    "id": "p1p3_senior_gentle_helper_30",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_gentle_helper",
    "personalityAliases": [
      "senior_gentle_helper"
    ],
    "threshold": 30,
    "maxRelationshipCap": 80,
    "title": "借書卡插反",
    "scene": "圖書角有幾張借書卡插反了方向，日期印被擋住。嘉澄沒有立即重插，而是把卡逐張排在桌上。",
    "messageText": "你睇，箭嘴應該向上。插反咗，下一個人就唔知邊日還。其實錯一次唔大，但每個人都錯一次，最後就會變到好亂。",
    "minorEvent": "整理借書卡方向。",
    "choices": [
      {
        "id": "positive",
        "text": "咁我幫你睇箭嘴，你負責插返入去。",
        "playerLine": "咁我幫你睇箭嘴，你負責插返入去。",
        "npcFollowUp": "好，你講向上定向下，我慢慢插。",
        "relationshipDelta": 1,
        "resultText": "嘉澄把第一張卡交給你，像把一個很細但真正需要細心的工作分給你。"
      },
      {
        "id": "neutral",
        "text": "原來有方向，我以前冇留意。",
        "playerLine": "原來有方向，我以前冇留意。",
        "npcFollowUp": "好多小事都係留意先見到。",
        "relationshipDelta": 0,
        "resultText": "你知道了規則，但還未真正加入她的工作。"
      },
      {
        "id": "negative",
        "text": "插反都冇人會睇啦。",
        "playerLine": "插反都冇人會睇啦。",
        "npcFollowUp": "我會睇。",
        "relationshipDelta": -1,
        "resultText": "她只說了三個字，卻把那些卡收得更整齊。"
      }
    ]
  },
  {
    "id": "p1p3_senior_gentle_helper_35",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_gentle_helper",
    "personalityAliases": [
      "senior_gentle_helper"
    ],
    "threshold": 35,
    "maxRelationshipCap": 80,
    "title": "書架灰塵留下的空位",
    "scene": "書架上有一格灰塵缺了一個長方形，像有本書剛被抽走。嘉澄用手指沿著那個空位畫了一圈。",
    "messageText": "呢度少咗一本書。灰塵會記得書放過邊度，但人唔一定記得。",
    "minorEvent": "用灰塵空位找缺書。",
    "choices": [
      {
        "id": "positive",
        "text": "咁我哋可以跟住灰塵個形狀搵返同樣大小嘅書。",
        "playerLine": "咁我哋可以跟住灰塵個形狀搵返同樣大小嘅書。",
        "npcFollowUp": "你諗得幾仔細。",
        "relationshipDelta": 1,
        "resultText": "嘉澄的聲音很輕，但她真的開始看旁邊幾本書的厚度。你沒有嫌灰塵髒，而是把它當成線索。"
      },
      {
        "id": "neutral",
        "text": "可能有人借咗。",
        "playerLine": "可能有人借咗。",
        "npcFollowUp": "希望有登記。",
        "relationshipDelta": 0,
        "resultText": "你給出最普通的可能，她沒有反駁，只是記下那個空位。"
      },
      {
        "id": "negative",
        "text": "灰塵好污糟，你唔好摸啦。",
        "playerLine": "灰塵好污糟，你唔好摸啦。",
        "npcFollowUp": "我等陣會洗手。",
        "relationshipDelta": -1,
        "resultText": "她收回手指，像把自己看見的小線索也一起收回去。"
      }
    ]
  },
  {
    "id": "p1p3_senior_gentle_helper_40",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_gentle_helper",
    "personalityAliases": [
      "senior_gentle_helper"
    ],
    "threshold": 40,
    "maxRelationshipCap": 80,
    "title": "書裡的怪書籤",
    "scene": "一本故事書裡夾著一張很舊的便利貼，上面用鉛筆寫著「唔想返學」，字已經淡到快看不清。",
    "messageText": "呢張唔係借書卡，但我又唔想直接掉。可能係好耐之前有個人真係唔想返學。",
    "minorEvent": "保存怪書籤。",
    "choices": [
      {
        "id": "positive",
        "text": "可以夾返入信封，寫低喺邊本書找到，唔使丟。",
        "playerLine": "可以夾返入信封，寫低喺邊本書找到，唔使丟。",
        "npcFollowUp": "咁佢就唔會夾喺故事入面嚇到下一個人。",
        "relationshipDelta": 1,
        "resultText": "嘉澄把便利貼放到一張白紙上，像你幫她找到一種不丟掉、也不讓它繼續嚇人的方法。"
      },
      {
        "id": "neutral",
        "text": "可能只係有人亂寫。",
        "playerLine": "可能只係有人亂寫。",
        "npcFollowUp": "可能。",
        "relationshipDelta": 0,
        "resultText": "她接受這個可能，但手仍然沒有把便利貼丟進垃圾桶。"
      },
      {
        "id": "negative",
        "text": "呢啲掉咗咪算，諗咁多做咩。",
        "playerLine": "呢啲掉咗咪算，諗咁多做咩。",
        "npcFollowUp": "嗯。",
        "relationshipDelta": -1,
        "resultText": "她把便利貼壓在手心下，聲音低到幾乎聽不見。"
      }
    ]
  },
  {
    "id": "p1p3_senior_gentle_helper_45",
    "lifeStageSet": "p1_p3",
    "identity": "senior_student",
    "personalityId": "pers_senior_gentle_helper",
    "personalityAliases": [
      "senior_gentle_helper"
    ],
    "threshold": 45,
    "maxRelationshipCap": 80,
    "title": "請勿畫花的告示",
    "scene": "服務時間快完，嘉澄拿著一張空白告示紙，上面只寫了「請勿」兩個字，後面一直沒有落筆。",
    "messageText": "我唔想寫到好似罵人。可是如果寫得太溫柔，又好似冇人會理。你覺得『請勿畫花圖書』會唔會好兇？",
    "minorEvent": "一起寫圖書角小告示。",
    "choices": [
      {
        "id": "positive",
        "text": "可以寫『下一個人都想睇清楚』，咁唔係鬧人。",
        "playerLine": "可以寫『下一個人都想睇清楚』，咁唔係鬧人。",
        "npcFollowUp": "下一個人……呢句好啲。",
        "relationshipDelta": 1,
        "resultText": "嘉澄把原本的兩個字擦淡，重新寫得很慢。你不是幫她管人，而是幫她把溫柔變得有用。"
      },
      {
        "id": "neutral",
        "text": "直接寫清楚都得啦。",
        "playerLine": "直接寫清楚都得啦。",
        "npcFollowUp": "可能係我怕人覺得我煩。",
        "relationshipDelta": 0,
        "resultText": "你給了實用答案，她也知道實用不一定能解決她在意的語氣。"
      },
      {
        "id": "negative",
        "text": "寫咩都冇用啦，會畫嘅人照畫。",
        "playerLine": "寫咩都冇用啦，會畫嘅人照畫。",
        "npcFollowUp": "但我都要寫。",
        "relationshipDelta": -1,
        "resultText": "她把筆握緊了一點，像你說中了她最怕聽到的事，但她仍然不想放棄。"
      }
    ]
  }
];
