// src/components/blocks/InteractiveSimulationBlock.jsx
import { useState, useRef } from 'react';
import { FaCheckCircle, FaRedo } from 'react-icons/fa';

const InteractiveSimulationBlock = ({ items }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const longPressTimer = useRef();
  const swipeStartRef = useRef(null); // 記錄按下的位置

  const isCompleted = currentStepIndex >= items.length;

  if (isCompleted) {
    return (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-8 my-8 rounded-lg flex flex-col items-center justify-center text-center shadow-lg">
        <FaCheckCircle className="text-5xl mb-4" />
        <h3 className="text-2xl font-bold mb-4">恭喜您，操作練習完成！</h3>
        <p className="text-lg mb-6">您已成功學習此操作流程。</p>
        <button
          onClick={() => setCurrentStepIndex(0)}
          className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
        >
          <FaRedo />
          再練習一次
        </button>
      </div>
    );
  }

  const currentStep = items[currentStepIndex];

  const handleActionSuccess = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      // --- ✨ 關鍵修正 2：切換頁面時，徹底清除「按下」的狀態 ---
      // 這確保了上一頁的「長按不放」，不會被帶到這一頁變成「點擊」
      swipeStartRef.current = null;
      clearTimeout(longPressTimer.current);

      setCurrentStepIndex(prevIndex => prevIndex + 1);
      setIsTransitioning(false);
    }, 500);
  };

  const getCoordinates = (event) => {
    if (event.touches) {
      return { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }
    return { x: event.clientX, y: event.clientY };
  };

  const handleInteractionStart = (event) => {
    event.preventDefault();
    if (isTransitioning) return;

    const { type, duration } = currentStep.action;

    swipeStartRef.current = getCoordinates(event);

    if (type === 'longPress') {
      longPressTimer.current = setTimeout(handleActionSuccess, duration || 1000);
    }
  };

  const handleInteractionMove = (event) => {
    event.preventDefault();
  };

  const handleInteractionEnd = (event) => {
    event.preventDefault();
    if (isTransitioning) return;

    const { type, direction } = currentStep.action;
    clearTimeout(longPressTimer.current);

    // --- 安全檢查 ---
    // 如果 swipeStartRef.current 是 null (代表這是在上一頁按下的，或者被重置過)
    // 我們就直接忽略這次的「放開」事件
    if (!swipeStartRef.current) return;

    const startPos = swipeStartRef.current;
    const endPos = event.changedTouches
      ? { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY }
      : { x: event.clientX, y: event.clientY };

    const deltaX = endPos.x - startPos.x;
    const deltaY = endPos.y - startPos.y;
    const moveDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (type === 'click' && moveDistance < 10) {
      handleActionSuccess();
    }
    else if (type === 'swipe' && moveDistance > 50) {
      let detectedDirection = null;
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        detectedDirection = deltaX > 0 ? 'right' : 'left';
      } else {
        detectedDirection = deltaY > 0 ? 'down' : 'up';
      }

      if (detectedDirection === direction) {
        handleActionSuccess();
      }
    }

    // 互動結束，重置起始點
    swipeStartRef.current = null;
  };

  return (
    <div className="my-8 p-4 bg-zinc-800 rounded-xl shadow-2xl">
      <div className="bg-white text-zinc-800 p-4 rounded-t-lg text-lg font-bold text-center">
        <p>{currentStep.instruction}</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <img
            src={currentStep.imageSrc}
            alt="軟體操作介面"
            className="w-full h-auto block select-none"
            draggable="false"
        />

        {/* 互動區域 */}
        <div
          className={`absolute border-4 rounded-lg cursor-pointer touch-none transition-all duration-300
            ${isTransitioning
              // 成功時：顯示綠色背景與框線 (使用者需要反饋知道成功了)
              ? ' bg-opacity-10 border-green-400 scale-105 shadow-[0_0_20px_rgba(74,222,128,0.8)]'

              // --- ✨ 關鍵修正 1：平常狀態 ---
              // 移除 bg-blue-500，改為 bg-transparent (透明)
              // 稍微加粗邊框或保持虛線，讓使用者知道哪裡可以點，但不遮擋內容
              : 'bg-transparent border-dashed border-blue-400 hover:border-blue-300'
            }`}
          style={{
            top: currentStep.action.position.top,
            left: currentStep.action.position.left,
            width: currentStep.action.position.width,
            height: currentStep.action.position.height,
          }}

          onMouseDown={handleInteractionStart}
          onMouseUp={handleInteractionEnd}
          onMouseMove={handleInteractionMove}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
          onTouchMove={handleInteractionMove}
          onMouseLeave={handleInteractionEnd}
          onContextMenu={(e) => e.preventDefault()}
        ></div>
      </div>
    </div>
  );
};

export default InteractiveSimulationBlock;
