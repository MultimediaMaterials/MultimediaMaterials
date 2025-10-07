import { courseSidebar1 } from "./course1/sidebar";

export const coursePages = {
  "1": {
    type: "article",
    menu: "1",
    title: "手機基礎功能小學堂",
    description: "歡迎來到您的手機操作工具箱！在這裡，我們教您最實用、最常用的手機基本功能。這些技巧就像您口袋裡的 **「萬用鑰匙」** ，能幫您連上網路省錢、和家人輕鬆傳照片、並讓手機更符合您的習慣。",
    content: [
      {
        id: "topics",
        type: "cards",
        data: courseSidebar1
      }
    ],
  },
  "2": {
    type: "article",
    menu: "2",
    title: "ChatGPT 基礎功能小學堂",
    description: "歡迎來到 ChatGPT 的智慧工具箱！這裡將帶您一步一步認識 ChatGPT —— 一個能回答問題、協助寫作、陪伴聊天的 AI 幫手。",
    content: [
      {
        id: "1",
        type: "p",
        height: 400,
        data: "我們會以生活化的例子示範，包含如何快速查詢資訊、潤飾訊息文字、翻譯與學習語言，以及整理文章重點。內容簡單易懂，搭配清楚的操作流程，幫助您循序漸進地掌握最實用的功能，讓 ChatGPT 成為日常生活的得力助手。"
      }
    ],
  },
  "1.1": {
    type: "article",
    menu: "1",
    parent: "1.1",
    title: "省錢與連線 — 網路與藍牙設定",
    description: "這組功能教您如何連接家裡的 Wi-Fi 或是將手機連接到其他設備，讓您省網路費、使用更方便。",
    content: [
      {
        id: "tabs",
        type: "tabs",
        data: "1.1"
      },
      {
        id: "vid",
        type: "video",
        data: {
          videoUrl: "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
        }
      }
    ]
  },
  "1.1.1": {
    type: "article",
    menu: "1",
    parent: "1.1",
    title: "連線 Wi-Fi (無線網路)",
    description: "省網路費！ 在家裡或咖啡廳上網，不用手機網路，可以省錢、速度又更快！",
    content: [
      {
        id: "tabs",
        type: "tabs",
        data: "1.1"
      },
      {
        id: "t1",
        type: "p",
        data: "測試測試",
        height: 600,
      }
    ]
  },
  "1.1.2": {
    type: "article",
    menu: "1",
    parent: "1.1",
    title: "連線藍牙 (Bluetooth)",
    description: "無線連結！ 想用無線耳機聽音樂、或在車上播放手機裡的音樂，就靠它了。",
    content: [
      {
        id: "tabs",
        type: "tabs",
        data: "1.1"
      },
      {
        id: "t1",
        type: "p",
        data: "測試測試",
        height: 600,
      }
    ]
  },
  "1.2": {
    type: "article",
    menu: "1",
    title: "介面與個人化 — 讓手機更順手",
    description: "這組功能教您如何調整手機的顯示和聲音設定，讓您看得更清楚、用得更習慣。",
    content: [
      {
        id: "vid",
        type: "video",
        data: {
          videoUrl: "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
        }
      }
    ]
  },
}