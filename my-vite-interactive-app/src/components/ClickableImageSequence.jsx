// src/components/ClickableImageSequence.jsx

import React, { useState } from 'react';
import './ClickableImageSequence.css';

// ===================================================================
// == 資料結構已更新為新的 position 格式 ==
// ===================================================================
const stepsData = [
  {
    image: '/images/IMG_0324.png',
    hint: '提示：請點擊圖片中的「紅色按鈕」',
    position: {
      left: "6.02%",
      top: "69.04%",
      width: "87.43%",
      height: "4.08%"
    },
  },
  {
    image: '/images/IMG_0325.png',
    hint: '提示：請點擊圖片中的「紅色按鈕」',
    position: {
      left: "30.21%",
      top: "61.7%",
      width: "39.4%",
      height: "3.42%"
    },
  },
  {
    image: '/images/IMG_0326.png',
    hint: '提示：請點擊圖片中的「紅色按鈕」',
    position: {
      left: "4.95%",
      top: "13.53%",
      width: "17.67%",
      height: "8.31%"
    },
  },
  {
    image: '/images/IMG_0327.png',
    hint: '提示：請點擊圖片中的「紅色按鈕」',
    position: {
      left: "1.95%",
      top: "24.51%",
      width: "96.28%",
      height: "74.51%"
    },
  },
];
// ===================================================================

const ClickableImageSequence = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAreaClick = () => {
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="shared-image-container finished-container">
        <h2>恭喜你，全部完成了！</h2>
        <button onClick={handleReset}>重新開始</button>
      </div>
    );
  }

  // 關鍵改動：解構出 position 而不是 targetArea
  const { image, hint, position } = stepsData[currentStep];

  return (
    <div className="shared-image-container">
      <h2 className="hint-text">{hint}</h2>
      <div className="shared-image-wrapper">
        <img src={image} alt={`Step ${currentStep + 1}`} />
        <div
          className="clickable-area"
          // 關鍵改動：直接將 position 物件傳給 style
          style={position}
          onClick={handleAreaClick}
        ></div>
      </div>
      <p className="progress-indicator">
        進度: {currentStep + 1} / {stepsData.length}
      </p>
    </div>
  );
};

export default ClickableImageSequence;