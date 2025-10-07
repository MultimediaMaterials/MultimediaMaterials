import { courseSidebar1 } from "./course1/sidebar";

export const coursePages = {
  "1": {
    type: "article",
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
  "3": {
    title: "State Management with Redux",
    description: "Master state management in React applications.",
    content: "This is the course content for State Management with Redux.",
  },
}