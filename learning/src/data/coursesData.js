export const COURSES = {
  "basic-phone-skills": {
    "id": "basic-phone-skills",
    "title": "手機基礎功能小學堂",
    "description": "歡迎來到您的手機操作工具箱！我們將教您最實用、最常用的手機基本功能，幫您連上網路、輕鬆傳照片，並讓手機更符合您的習慣。",
    "imageUrl": "/images/phone-skills-logo.png",
    "lessons": [
      {
        "id": "L1",
        "title": "主題一：省錢與連線",
        "chapters": [
          {
            "id": "C1-1",
            "title": "如何連線 Wi-Fi (無線網路)",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "在家裡或咖啡廳上網，不用手機網路，可以省錢、速度又更快！當您看到手機上網量快用完時，趕快連上 Wi-Fi。"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "Wi-Fi 無所不在，無論是餐廳、飯店或是學校。手機可以透過 Wi-Fi 密碼連上他免費上網。如此一來，您看影片、傳照片時就不會扣到手機的網路費了！"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟 (iOS)"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "找到並點選手機的「設定」App (圖示是一個齒輪)。",
                    "點選列表最上方的「Wi-Fi」選項。",
                    "確保「Wi-Fi」開關是綠色 (已開啟)。",
                    "在下方的列表中，找到您的網路名稱，點選後輸入密碼。",
                    "密碼輸入正確後，Wi-Fi 圖示 (像扇形波浪) 會出現在螢幕最上方，表示連線成功，可以省網路費了！"
                  ]
                }
              },
              {
                "type": "interactiveSimulation",
                "data": {
                  "items": [
                    {
                      "imageSrc": "/img/line/line-1.png",
                      "instruction": "首先，請「點擊」下方的對話框來開始輸入訊息。",
                      "action": {
                        "type": "click",
                        "position": {
                          "top": "85%",
                          "left": "5%",
                          "width": "75%",
                          "height": "10%"
                        }
                      }
                    },
                    {
                      "imageSrc": "/img/line/line-1.png",
                      "instruction": "這是一本相簿，請試著「向左滑動」照片來觀看下一張。",
                      "action": {
                        "type": "swipe",
                        "direction": "left",
                        "position": {
                          "top": "20%",
                          "left": "10%",
                          "width": "80%",
                          "height": "60%"
                        }
                      }
                    },
                    {
                      "imageSrc": "/img/line/line-2.png",
                      "instruction": "輸入完畢後，請「長按」右方的傳送按鈕來送出。",
                      "action": {
                        "type": "longPress",
                        "duration": 1000,
                        "position": {
                          "top": "85%",
                          "left": "82%",
                          "width": "13%",
                          "height": "10%"
                        }
                      }
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": "C1-2",
            "title": "如何連線藍牙 (Bluetooth)",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "買了無線耳機或智慧手錶，想讓手機和它們「牽手」連起來；或想在車上聽手機裡存的音樂，就靠它了！"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "藍牙就像一條「看不見的短線」，能讓您的手機和耳機、音箱等設備隔空配對。配對成功後，您就能無線地使用這些設備。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟 (iOS)"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "找到並點選手機的「設定」App (齒輪圖案)。",
                    "點選「藍牙」選項。",
                    "確保「藍牙」開關是綠色 (已開啟)。",
                    "開啟您想連接的設備 (如耳機)，讓它進入「配對模式」(通常會閃燈)。",
                    "在手機的「其他裝置」列表中找到該設備名稱，點選它來完成連線。",
                    "連線成功後，設備名稱下方會顯示「已連線」。"
                  ]
                }
              }
            ]
          },
          {
            "id": "C1-3",
            "title": "如何快速分享檔案 (AirDrop)",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "拍了孫子的超可愛大合照，想立刻、完整畫質傳給旁邊的親友？不用傳 LINE 讓畫質變差，也不用傳簡訊。"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "這是蘋果手機之間最快、最清楚的傳照片方式。它就像一個「私人的快速郵差」，可以把「原汁原味」的高畫質照片和影片，快速傳到另一支蘋果手機裡。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟 (iOS)"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "打開「照片」App，選取您想傳送的照片。",
                    "點選螢幕左下方的「分享」圖示 (一個往上箭頭的方框)。",
                    "在分享列表中，點選「AirDrop」圖示。",
                    "點選列表中對方的名稱。",
                    "等待對方手機彈出「接受」提示，請對方點擊後即可快速完成傳輸。"
                  ]
                }
              }
            ]
          },
          {
            "id": "C1-4",
            "title": "如何開啟熱點 (個人熱點)",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "當家人的平板或筆電突然沒網路時，您的手機可以暫時變成一台「行動基地台」，分享網路給他們救急。"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "「個人熱點」就是讓您的手機暫時「分一半網路」給別人用。它讓您的手機變成一個臨時的 Wi-Fi 機器。(提醒：分享網路會用到您手機自己的流量喔！)"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟 (iOS)"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "找到並點選手機的「設定」App。",
                    "點選「個人熱點」選項。",
                    "開啟「允許其他人加入」的開關 (變為綠色)。",
                    "記住畫面上顯示的「Wi-Fi 密碼」。",
                    "讓想連線的裝置去他們的 Wi-Fi 列表中，找到您的手機名稱，輸入您剛才記下的密碼即可連線。"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": "L2",
        "title": "主題二：介面與個人化",
        "chapters": [
          {
            "id": "C2-1",
            "title": "如何設定字體大小",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "看手機上的字像螞蟻一樣小，讀訊息很吃力？我們要教您把字「放大再放大」，讓您看得清楚、看得舒服。"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "這個功能讓您可以自己決定手機裡文字的大小。調大之後，訊息、網頁和 App 裡面的字都會變大，保護您的眼睛不疲勞。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟 (iOS)"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "找到並點選手機的「設定」App (齒輪圖案)。",
                    "點選「螢幕顯示與亮度」。",
                    "點選「文字大小」選項。",
                    "拖曳下方出現的滑桿 (左右移動)，直到上方的文字示範變成您最舒服的大小。",
                    "返回到前一頁，您會發現手機裡大部分的字都變大了。"
                  ]
                }
              }
            ]
          },
          {
            "id": "C2-2",
            "title": "如何更換桌布 (背景圖片)",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "想把最喜歡的孫子、伴侶或自己拍的美景，放在手機背景上，一打開手機就能看到，心情都好了！"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "桌布就是手機鎖定或主畫面的「背景圖」。您可以隨時更換，把它變成一個充滿回憶和個人風格的畫面。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟 (iOS)"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "找到並點選手機的「設定」App。",
                    "點選「背景圖片」選項。",
                    "點選「加入新的背景圖片」。",
                    "點選上方的「照片」圖示，然後在相簿裡選一張您最喜歡的照片。",
                    "選好後，點選右上角的「加入」，然後選「設為背景圖片組合」即可。"
                  ]
                }
              },
              {
                "type": "interactiveSimulation",
                "data": {
                  "items": [
                    {
                      "instruction": "點選「背景圖片」選項。",
                      "imageSrc": "/img/basic/change-background/IMG_0324.png",
                      "action": {
                        "type": "click",
                        "position": {
                          "left": "6.02%",
                          "top": "69.04%",
                          "width": "87.43%",
                          "height": "4.08%"
                        }
                      }
                    },
                    {
                      "instruction": "點選「加入新的背景圖片」。",
                      "imageSrc": "/img/basic/change-background/IMG_0325.png",
                      "action": {
                        "type": "click",
                        "position": {
                          "left": "30.21%",
                          "top": "61.7%",
                          "width": "39.4%",
                          "height": "3.42%"
                        }
                      }
                    },
                    {
                      "instruction": "點選上方的「照片」圖示，然後在相簿裡選一張您最喜歡的照片。",
                      "imageSrc": "/img/basic/change-background/IMG_0326.png",
                      "action": {
                        "type": "click",
                        "position": {
                          "left": "4.95%",
                          "top": "13.53%",
                          "width": "17.67%",
                          "height": "8.31%"
                        }
                      }
                    },
                    {
                      "instruction": "在相簿裡選一張您最喜歡的照片。",
                      "imageSrc": "/img/basic/change-background/IMG_0327.png",
                      "action": {
                        "type": "click",
                        "position": {
                          "left": "1.95%",
                          "top": "24.51%",
                          "width": "96.28%",
                          "height": "74.51%"
                        }
                      }
                    }
                  ]
                }
              }
            ]
          },
          {
            "id": "C2-3",
            "title": "如何更換鈴聲 (來電聲音)",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "想換一個特別的來電鈴聲，讓您在公共場合時，不會聽錯別人的電話，或是想換成您喜歡的歌曲。"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "這個功能讓您可以選擇手機來電時發出的聲音。選擇一個您最熟悉、最喜歡的鈴聲，就不會漏接重要電話了。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟 (iOS)"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "找到並點選手機的「設定」App。",
                    "點選「聲音與觸覺回饋」選項。",
                    "點選「鈴聲」。",
                    "在列表中，點選您喜歡的鈴聲，手機會立刻發出聲音試聽。",
                    "點選後手機會自動儲存，下次來電就是這個聲音了。"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": "L3",
        "title": "主題三：App 與儲存",
        "chapters": [
          {
            "id": "C3-1",
            "title": "如何下載 App (應用程式)",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "您想下載 LINE、YouTube 或其他好用的 App (例如：醫院掛號 App)。下載 App 就像去商店拿東西一樣。"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "App Store (應用程式商店) 是手機的「軟體百貨公司」，所有 App 都必須在這裡下載。這裡下載的 App 都是安全且經過檢查的。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟 (iOS)"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "找到並點選「App Store」App (圖示是一個藍色底，中間是白色 A 的圓圈)。",
                    "點選畫面右下方的「搜尋」(放大鏡圖案)。",
                    "在最上方的搜尋框裡，輸入您想下載的 App 名稱。",
                    "找到 App 後，點選右邊的「取得」按鈕 (有時會顯示一個雲朵圖案)。",
                    "手機會要求您輸入密碼或掃描您的臉部來確認。",
                    "等待它下載完成，您就可以在手機主畫面看到這個新 App 了。"
                  ]
                }
              }
            ]
          },
          {
            "id": "C3-2",
            "title": "如何刪除 App (移除應用程式)",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "有些遊戲或 App 已經很久沒用了，佔用手機太多空間，讓手機變得卡卡、反應很慢。我們要把它們清掉！"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "刪除 App 就像清理家裡多餘的雜物。刪除後，手機會釋放出儲存空間，讓手機跑得更快，但請不要隨意刪除您不認識或常用的 App。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟 (iOS)"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "在手機主畫面上，找到您想刪除的 App。",
                    "用手指長按這個 App 的圖示，直到畫面上出現一個選單。",
                    "點選選單中的「移除 App」(或「刪除 App」)。",
                    "手機會再次詢問您是否確定刪除，點選「刪除 App」即可。",
                    "這個 App 和它佔用的空間就會被清出來了。"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": "L4",
        "title": "主題四：相機與分享",
        "chapters": [
          {
            "id": "C4-1",
            "title": "如何拍照與看照片",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "看到孫子可愛的模樣、朋友間的歡樂聚會、或是路邊的漂亮花朵，想立刻拍下來留念，並且知道去哪裡找到這些照片。"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "「相機」就是您手機裡的照相機，用來拍下照片或影片。「照片」App 就像您的「電子相簿」，所有拍好的照片都會自動存放在這裡。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟 (iOS)"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "打開「相機」App (圖示像一個小鏡頭)。",
                    "將鏡頭對準您想拍的人或景物，輕輕點擊螢幕，讓畫面看起來更清楚 (對焦)。",
                    "點選螢幕下方的「白色大圓點」(快門)，聽到「喀擦」聲就拍好了。",
                    "拍好後，找到並點選「照片」App (多色風車圖案)，您剛拍的照片就在最前面了。"
                  ]
                }
              }
            ]
          },
          {
            "id": "C4-2",
            "title": "如何簡單編輯照片",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "拍好的照片有點歪斜，或是想裁掉旁邊多餘的部分，讓照片看起來更完美。"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "編輯功能可以讓您對照片進行簡單的修改，例如「裁切」(剪掉不要的部分) 和「旋轉」(把歪的照片轉正)。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟 (iOS)"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "在「照片」App 中找到您想修改的照片。",
                    "點選照片後，點選右上方的「編輯」按鈕。",
                    "點選下方的「裁切」圖示 (兩個箭頭交叉的方框)。",
                    "您可以拖曳照片邊緣的角來改變大小，或是點選左上角的方塊箭頭來旋轉照片。",
                    "完成後，點選右下角的「完成」儲存修改。"
                  ]
                }
              }
            ]
          },
          {
            "id": "C4-3",
            "title": "如何設定相簿 (整理照片)",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "照片越積越多，想把不同活動的照片分開放，例如把「旅遊照片」和「孫子照片」分開，方便查找。"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "相簿就像您家裡的「檔案夾」，可以讓您把不同主題的照片分門別類放好，這樣想找特定照片時就不用一張張慢慢滑了。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟 (iOS)"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "打開「照片」App。",
                    "點選右下角的「相簿」選項。",
                    "點選左上角的「+」號，然後選擇「新增相簿」。",
                    "輸入一個相簿名稱 (例如：「2024年家庭旅遊」)，然後點選「儲存」。",
                    "接下來，您可以回到所有照片中，長按並點選想加入的照片，再點選右下角的「...」→「加入相簿」，選擇您剛才建立的新相簿即可。"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "id": "L5",
        "title": "主題五：安全警報站",
        "chapters": [
          {
            "id": "C5-1",
            "title": "【警示】網路上「一頁式網站」與「假中獎」騙局",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "warning",
                  "text": "您在 Facebook 或 LINE 上看到「名牌家電超低價大促銷」，或是「恭喜您中獎！點擊領取獎金」的廣告。它們要求您立刻填寫身分證字號、姓名、住址等詳細資料。"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "這類網站通常被稱為「一頁式詐騙」。它們的目的就是騙您的錢或騙您的資料。網站上賣的東西不是假貨、爛貨，就是您付了錢也收不到東西。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 3,
                  "text": "核心原則：請務必記住這三點！"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "價格極低不買：看到名牌商品價格低到不合理 (例如：原價一萬元，現價九百元)，一定是詐騙！",
                    "填資料是陷阱：只要是假中獎或可疑網站，要求您填寫過多的個人資料，就是在騙取您的個資！請立刻關閉視窗。",
                    "要求先付費是騙局：任何要求您先付「稅金」、「手續費」才能領獎的，都是假的！請直接忽略或關閉視窗。"
                  ]
                }
              }
            ]
          },
          {
            "id": "C5-2",
            "title": "【警示】識別可疑訊息與連結",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "warning",
                  "text": "您收到一則簡訊說「銀行帳號被凍結，請點擊連結處理」。這時該怎麼辦？"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "詐騙訊息和廣告通常會利用您貪小便宜或害怕被罰錢的心情。學會辨識它們，是保護自己的第一道防線。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 3,
                  "text": "核心原則：不點、不給、先查證！"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "不點：簡訊或 LINE 裡來路不明的連結，絕對不要點！真正的銀行或政府機關不會用簡訊要您輸入密碼。",
                    "不給：絕對不要在任何網頁上輸入您的銀行帳號、密碼或身份證字號。",
                    "先查證：收到親友「借錢」的訊息時，請務必打電話給他本人確認，不要直接匯款。"
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "google-maps": {
    "id": "google-maps",
    "title": "Google Map 完全指南",
    "description": "學習使用 Google 地圖，從地點查詢到路線規劃，讓您出門不再迷路，輕鬆掌握交通方式。",
    "imageUrl": "/images/google-maps-logo.png",
    "lessons": [
      {
        "id": "L1",
        "title": "核心三功能",
        "chapters": [
          {
            "id": "C1-1",
            "title": "一、地點查詢",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "這個週末想要出門跟許久不見的朋友見面，朋友邀請你到「星巴克 龍門門市」一起喝咖啡聊天。「龍門門市在哪裡？」跟著我們一起學習操作Google Map找到朋友指定的地點吧！"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "地點查詢是 Google Map 最基礎也最核心的功能。使用者可以透過輸入關鍵字，如店家名稱、地址或景點，來快速鎖定目標在現實世界中的地理位置。這個功能解決了「知道要去哪，但不確定確切位置」的基本問題，是後續進行路線規劃的第一步。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "功能步驟流程"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "點開搜尋框",
                    "輸入地點「星巴克 龍門門市」",
                    "若有多個類似地點請選取想要去的指定地點",
                    "縮放地圖查看地點位置"
                  ]
                }
              }
            ]
          },
          {
            "id": "C1-2",
            "title": "二、導航 (個人交通)",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "找到「星巴克 龍門門市」的位置了，但是好像離家裡有段距離，要怎麼去到那裡呢？接下來要學習利用Google Map進行多種方式的路線規劃與導航。"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "導航功能是在找到目的地後，提供從出發點到終點的具體路線指引。它整合了多種交通方式，包含開車、騎機車、自行車以及步行，並根據不同交通工具的特性與即時路況，計算出最佳或最快的路徑。使用者可以跟隨即時的語音及畫面指示，順利抵達目的地。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "功能步驟流程"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "點開搜尋框",
                    "輸入地點「星巴克 龍門門市」",
                    "若有多個類似地點請選取想要去的指定地點",
                    "點選「路線」",
                    "按照想要前往的方式點選「開車」、「機車」、「步行」或「單車」",
                    "點「開始」就可以跟著導航出發了"
                  ]
                }
              }
            ]
          },
          {
            "id": "C1-3",
            "title": "三、導航 (大眾運輸)",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "找到「星巴克 龍門門市」的位置了，但是不想在繁忙的道路駕車前往，捷運和公車是你出門的首選，那麼要如何搭乘大眾運輸去到那裡呢？"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "此功能專為搭乘大眾運輸工具的使用者設計。它會整合公車、捷運等多種系統的即時資訊，提供數個包含轉乘建議、班次時間、步行距離與預估總時長的搭乘方案。這讓使用者能有效率地規劃行程，並根據時間、方便性等考量，選擇最符合自己需求的路線。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "功能步驟流程"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "點開搜尋框",
                    "輸入地點「星巴克 龍門門市」",
                    "若有多個類似地點請選取想要去的指定地點",
                    "點選「路線」",
                    "點選「大眾運輸」",
                    "Google Map 會列出多種方案規劃，請選擇想要搭乘的方案",
                    "點「開始」就可以跟著指示出發搭車了"
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "chatgpt": {
    "id": "chatgpt",
    "title": "ChatGPT 基礎功能小學堂",
    "description": "學習如何使用 AI 幫手 ChatGPT，讓生活更便利。包含問答、寫作、翻譯等實用功能。",
    "imageUrl": "/images/chatgpt-logo.png",
    "lessons": [
      {
        "id": "L1",
        "title": "五大核心功能",
        "chapters": [
          {
            "id": "C1-1",
            "title": "主題一：快速查詢 — 問答功能",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "「想知道『高血壓要避免哪些食物』，或『如何搭車去台北車站』，可以直接問 ChatGPT，就像和人聊天一樣。」"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "ChatGPT 可以取代搜尋引擎，直接給您整理好的答案，不需要自己瀏覽許多網站。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟流程"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "直接輸入問題，例如：「我有高血壓，飲食上要避免什麼？」或「從中正紀念堂要怎麼搭車到台北車站？」",
                    "也可用圖片提問，如「請幫我找像這個的產品」。",
                    "閱讀回覆後，如果覺得太複雜，可再補充指令：「可以用更簡單的方式說明嗎？」"
                  ]
                }
              }
            ]
          },
          {
            "id": "C1-2",
            "title": "主題二：文字協助 — 寫作與潤飾",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "「要寫 Line 給家人或準備一份簡短演講稿，但不知道如何表達更好。」"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "ChatGPT 可以幫您修改、潤飾或重組文字，讓內容更清楚、簡短、或更有感情。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟流程"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "輸入原始文字，例如：「幫我把這段話寫得更客氣一點：『請你明天把報告交給我。』」或「幫我把這段話改得更有感情：『孫子，謝謝你來看我。』」",
                    "ChatGPT 會提供潤飾後版本。若不滿意，可以再補充要求：「再簡短一點」或「更活潑一些」。"
                  ]
                }
              }
            ]
          },
          {
            "id": "C1-3",
            "title": "主題三：娛樂與陪伴 — 輕鬆互動",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "「想要有人聊天，或學點英文、聽故事，讓生活更有趣。」"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "ChatGPT 能根據您的需求陪伴對話，提供知識、故事與練習，讓日常更豐富。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟流程"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "輸入想聊的主題，例如：「跟我說一個有趣的歷史故事。」、「我想練習英文打招呼。」或「可以陪我聊聊下棋的技巧嗎？」",
                    "覺得太難時，可以補充條件：「請用簡單一點的說法。」"
                  ]
                }
              }
            ]
          },
          {
            "id": "C1-4",
            "title": "主題四：翻譯與語言學習",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "「想看懂英文藥品說明、或用英文傳訊息給孫子，但不確定文法正不正確。」"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "ChatGPT 可以翻譯句子，並依需求調整難易度，也能生成例句幫助學習。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟流程"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "輸入要翻譯的句子，例如：「幫我把這句英文翻成中文: Take care of yourself.」",
                    "如果翻譯太難，可以補充要求：「用小學生能懂的中文翻譯。」或「給我三種說法: 正式、口語、簡單。」",
                    "進一步練習：「請用 Good morning 造三個日常生活句子。」或「幫我寫一段英文訊息，祝孫子生日快樂。」"
                  ]
                }
              }
            ]
          },
          {
            "id": "C1-5",
            "title": "主題五：知識整理與摘要",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "「看到一篇很長的健康新聞，資訊太多，需要簡單重點，才方便理解與應用。」"
                }
              },
              {
                "type": "paragraph",
                "data": {
                  "text": "ChatGPT 可以將文章簡化成條列或摘要，並依照需求調整難度，甚至轉化成提醒或待辦清單。"
                }
              },
              {
                "type": "heading",
                "data": {
                  "level": 2,
                  "text": "操作步驟流程"
                }
              },
              {
                "type": "orderedList",
                "data": {
                  "items": [
                    "輸入原始內容，例如：「請幫我摘要這篇新聞內容：......(貼上文章)」",
                    "指定摘要方式：「幫我用三點重點解釋。」",
                    "如果內容仍太難，可以補充：「請用生活化的例子說明。」或「改成問答形式。」",
                    "也可以轉化為建議或清單：「把健康新聞的重點變成三個生活提醒。」或「幫我做成待辦清單。」"
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "tests": {
    "id": "tests",
    "title": "前後測",
    "description": "多媒體教材設計與製作",
    "imageUrl": "/images/chatgpt-logo.png",
    "lessons": [
      {
        "id": "L1",
        "title": "前測",
        "chapters": [
          {
            "id": "C1-1",
            "title": "前測問卷",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "請完成前測"
                }
              },
              {
                "type": "googleFormEmbed",
                "data": {
                  "formUrl": "https://google.com"
                }
              }
            ]
          }
        ]
      },
      {
        "id": "L2",
        "title": "後測",
        "chapters": [
          {
            "id": "C2-1",
            "title": "後測問卷",
            "content": [
              {
                "type": "alert",
                "data": {
                  "style": "info",
                  "text": "請完成後測"
                }
              },
              {
                "type": "googleFormEmbed",
                "data": {
                  "formUrl": "https://google.com"
                }
              }
            ]
          }
        ]
      }
    ]
  }
};
