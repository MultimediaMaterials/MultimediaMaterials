export const InteractiveSimulationExampleData = {
  type: "interactiveSimulation",
  data: {
    // items 陣列，代表模擬的每一步
    items: [
      {
        imageSrc: "/img/line/line-1.png", // 步驟一的背景圖片
        instruction: "首先，請「點擊」下方的對話框來開始輸入訊息。", // 給使用者的提示文字
        action: {
          type: "click", // 互動類型：點擊
          // 互動區域的位置與大小 (使用百分比，才能適應不同螢幕)
          position: { top: "85%", left: "5%", width: "75%", height: "10%" },
        },
      },
      {
        imageSrc: "/img/line/line-1.png", // 範例：相簿的第一張照片
        instruction: "這是一本相簿，請試著「向左滑動」照片來觀看下一張。",
        action: {
          type: "swipe", // ✨ 新的互動類型
          direction: "left", // ✨ 指定方向: 'left', 'right', 'up', 'down'
          position: { top: "20%", left: "10%", width: "80%", height: "60%" },
        },
      },
      {
        imageSrc: "/img/line/line-2.png", // 步驟二的圖片 (鍵盤已彈出)
        instruction: "輸入完畢後，請「長按」右方的傳送按鈕來送出。",
        action: {
          type: "longPress",
          duration: 1000, // 長按需要持續的時間 (毫秒)
          position: { top: "85%", left: "82%", width: "13%", height: "10%" },
        },
      },
    ],
  },
};
