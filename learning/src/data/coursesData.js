// src/data/coursesData.js

export const COURSES = {
  'chatgpt': {
    id: 'chatgpt',
    title: 'ChatGPT 基礎功能小學堂',
    description: '學習如何使用 AI 幫手 ChatGPT，讓生活更便利。包含問答、寫作、翻譯等實用功能。',
    imageUrl: '/images/chatgpt-logo.png', // 圖片請放在 /public/images/ 資料夾中
    lessons: [
      {
        id: 'L1',
        title: '核心功能入門',
        chapters: [
          {
            id: 'C1-1',
            title: '主題一：快速查詢 — 問答功能',
            content: [
              {
                type: 'alert',
                data: {
                  style: 'info',
                  text: '「想知道『高血壓要避免哪些食物』，或『如何搭車去台北車站』，可以直接問 ChatGPT，就像和人聊天一樣。」',
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: 'ChatGPT 可以取代搜尋引擎，直接給您整理好的答案，不需要自己瀏覽許多網站。',
                },
              },
              {
                type: 'heading',
                data: { level: 2, text: '操作步驟流程' },
              },
              {
                type: 'orderedList', // 新的有序列表區塊
                data: {
                  items: [
                    '直接輸入問題，例如：「我有高血壓，飲食上要避免什麼？」或「從中正紀念堂要怎麼搭車到台北車站？」',
                    '也可用圖片提問，如「請幫我找像這個的產品」。',
                    '閱讀回覆後，如果覺得太複雜，可再補充指令：「可以用更簡單的方式說明嗎？」',
                  ],
                },
              },
            ],
          },
          {
            id: 'C1-2',
            title: '主題二：文字協助 — 寫作與潤飾',
            content: [
              {
                type: 'alert',
                data: {
                  style: 'info',
                  text: '「要寫 Line 給家人或準備一份簡短演講稿，但不知道如何表達更好。」',
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: 'ChatGPT 可以幫您修改、潤飾或重組文字，讓內容更清楚、簡短、或更有感情。',
                },
              },
              {
                type: 'heading',
                data: { level: 2, text: '操作步驟流程' },
              },
              {
                type: 'orderedList',
                data: {
                  items: [
                    '輸入原始文字，例如：「幫我把這段話寫得更客氣一點：『請你明天把報告交給我。』」或「幫我把這段話改得更有感情：『孫子，謝謝你來看我。』」',
                    'ChatGPT 會提供潤飾後版本。若不滿意，可以再補充要求：「再簡短一點」或「更活潑一些」。',
                  ],
                },
              },
            ],
          },
          {
            id: 'C1-3',
            title: '主題三：娛樂與陪伴 — 輕鬆互動',
            content: [
              {
                type: 'alert',
                data: {
                  style: 'info',
                  text: '「想要有人聊天，或學點英文、聽故事，讓生活更有趣。」',
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: 'ChatGPT 能根據您的需求陪伴對話，提供知識、故事與練習，讓日常更豐富。',
                },
              },
              {
                type: 'heading',
                data: { level: 2, text: '操作步驟流程' },
              },
              {
                type: 'orderedList',
                data: {
                  items: [
                    '輸入想聊的主題，例如：「跟我說一個有趣的歷史故事。」、「我想練習英文打招呼。」或「可以陪我聊聊下棋的技巧嗎？」',
                    '覺得太難時，可以補充條件：「請用簡單一點的說法。」',
                  ],
                },
              },
            ],
          },
          {
            id: 'C1-4',
            title: '主題四：翻譯與語言學習',
            content: [
                {
                  type: 'youtubeEmbed',
                  data: {
                    videoId: '9YYKYunIaQE',
                  }
                }
            ],
          },
          {
            id: 'C1-5',
            title: '小測驗',
            content: [
                {
                  type: 'googleFormEmbed',
                  data: {
                    formUrl: ''
                  }
                }
            ],
          }
        ],
      },
      {
        id: 'L2',
        title: '核心功能入門',
        chapters: [
          {
            id: 'C2-1',
            title: '主題一：快速查詢 — 問答功能',
            content: [
              {
                type: 'alert',
                data: {
                  style: 'info',
                  text: '「想知道『高血壓要避免哪些食物』，或『如何搭車去台北車站』，可以直接問 ChatGPT，就像和人聊天一樣。」',
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: 'ChatGPT 可以取代搜尋引擎，直接給您整理好的答案，不需要自己瀏覽許多網站。',
                },
              },
              {
                type: 'heading',
                data: { level: 2, text: '操作步驟流程' },
              },
              {
                type: 'orderedList', // 新的有序列表區塊
                data: {
                  items: [
                    '直接輸入問題，例如：「我有高血壓，飲食上要避免什麼？」或「從中正紀念堂要怎麼搭車到台北車站？」',
                    '也可用圖片提問，如「請幫我找像這個的產品」。',
                    '閱讀回覆後，如果覺得太複雜，可再補充指令：「可以用更簡單的方式說明嗎？」',
                  ],
                },
              },
            ],
          },
          {
            id: 'C2-2',
            title: '主題二：文字協助 — 寫作與潤飾',
            content: [
              {
                type: 'alert',
                data: {
                  style: 'info',
                  text: '「要寫 Line 給家人或準備一份簡短演講稿，但不知道如何表達更好。」',
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: 'ChatGPT 可以幫您修改、潤飾或重組文字，讓內容更清楚、簡短、或更有感情。',
                },
              },
              {
                type: 'heading',
                data: { level: 2, text: '操作步驟流程' },
              },
              {
                type: 'orderedList',
                data: {
                  items: [
                    '輸入原始文字，例如：「幫我把這段話寫得更客氣一點：『請你明天把報告交給我。』」或「幫我把這段話改得更有感情：『孫子，謝謝你來看我。』」',
                    'ChatGPT 會提供潤飾後版本。若不滿意，可以再補充要求：「再簡短一點」或「更活潑一些」。',
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  'google-maps': {
    id: 'google-maps',
    title: 'Google Map 完全指南',
    description: '學習使用 Google 地圖，從地點查詢到路線規劃，讓您出門不再迷路，輕鬆掌握交通方式。',
    imageUrl: '/images/google-maps-logo.png',
    lessons: [
      {
        id: 'L1',
        title: '核心三功能',
        chapters: [
          {
            id: 'C1-1',
            title: '一、地點查詢',
            content: [
              {
                type: 'alert',
                data: {
                  style: 'info',
                  text: '這個週末想要出門跟許久不見的朋友見面，朋友邀請你到「星巴克 龍門門市」一起喝咖啡聊天。「龍門門市在哪裡？」跟著我們一起學習操作Google Map找到朋友指定的地點吧！',
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: '地點查詢是 Google Map 最基礎也最核心的功能。使用者可以透過輸入關鍵字，如店家名稱、地址或景點，來快速鎖定目標在現實世界中的地理位置。這個功能解決了「知道要去哪，但不確定確切位置」的基本問題，是後續進行路線規劃的第一步。',
                },
              },
              {
                type: 'heading',
                data: { level: 2, text: '功能步驟流程' },
              },
              {
                type: 'orderedList',
                data: {
                  items: [
                    '點開搜尋框',
                    '輸入地點「星巴克 龍門門市」',
                    '若有多個類似地點請選取想要去的指定地點',
                    '縮放地圖查看地點位置',
                  ],
                },
              },
            ],
          },
          {
            id: 'C1-2',
            title: '二、導航 (開車、機車、自行車、步行)',
            content: [
              {
                type: 'alert',
                data: {
                  style: 'info',
                  text: '找到「星巴克 龍門門市」的位置了，但是好像離家裡有段距離，要怎麼去到那裡呢？接下來要學習利用Google Map進行多種方式的路線規劃與導航。',
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: '導航功能是在找到目的地後，提供從出發點到終點的具體路線指引。它整合了多種交通方式，包含開車、騎機車、自行車以及步行，並根據不同交通工具的特性與即時路況，計算出最佳或最快的路徑。使用者可以跟隨即時的語音及畫面指示，順利抵達目的地。',
                },
              },
              {
                type: 'heading',
                data: { level: 2, text: '功能步驟流程' },
              },
              {
                type: 'orderedList',
                data: {
                  items: [
                    '點開搜尋框',
                    '輸入地點「星巴克 龍門門市」',
                    '若有多個類似地點請選取想要去的指定地點',
                    '點選「路線」',
                    '按照想要前往的方式點選「開車」、「機車」、「步行」或「單車」',
                    '點「開始」就可以跟著導航出發了',
                  ],
                },
              },
            ],
          },
          {
            id: 'C1-3',
            title: '三、導航 (大眾運輸)',
            content: [
                // ... 根據您的文件繼續填寫 ...
            ],
          }
        ],
      },
    ],
  },
};
