// src/components/blocks/InteractiveSimulationBlock.jsx
import { useState, useRef } from 'react';
import { FaCheckCircle, FaRedo } from 'react-icons/fa';

const InteractiveSimulationBlock = ({ items }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const longPressTimer = useRef();
  const swipeStartRef = useRef(null);

  const isCompleted = currentStepIndex >= items.length;
  const currentStep = items[currentStepIndex];

  const handleActionSuccess = () => {
    setCurrentStepIndex(prevIndex => prevIndex + 1);
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  const getCoordinates = (event) => {
    if (event.touches) {
      return { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }
    return { x: event.clientX, y: event.clientY };
  };

  const handleInteractionStart = (event) => {
    const { type, duration } = currentStep.action;

    // ✨ 1. 關鍵修改：只在滑動模式下阻止預設行為
    // 這會阻止圖片拖放和頁面滾動的開始
    if (type === 'swipe') {
      event.preventDefault();
      swipeStartRef.current = getCoordinates(event);
    }

    if (type === 'longPress') {
      longPressTimer.current = setTimeout(handleActionSuccess, duration || 1000);
    }
  };

  // ✨ 2. 新增函式：在滑動過程中持續阻止預設行為
  const handleInteractionMove = (event) => {
    // 當使用者手指/滑鼠在螢幕上移動時，持續阻止瀏覽器滾動頁面
    if (currentStep.action.type === 'swipe' && swipeStartRef.current) {
        event.preventDefault();
    }
  };

  const handleInteractionEnd = (event) => {
    const { type, direction } = currentStep.action;
    clearTimeout(longPressTimer.current);

    if (type === 'swipe' && swipeStartRef.current) {
      const startPos = swipeStartRef.current;
      const endPos = event.changedTouches ? { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY } : { x: event.clientX, y: event.clientY };

      const deltaX = endPos.x - startPos.x;
      const deltaY = endPos.y - startPos.y;

      const swipeThreshold = 50;

      let detectedDirection = null;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > swipeThreshold) detectedDirection = 'right';
        else if (deltaX < -swipeThreshold) detectedDirection = 'left';
      } else {
        if (deltaY > swipeThreshold) detectedDirection = 'down';
        else if (deltaY < -swipeThreshold) detectedDirection = 'up';
      }

      if (detectedDirection === direction) {
        handleActionSuccess();
      }

      swipeStartRef.current = null;
    }
  };

  const handleClick = (event) => {
    // 阻止點擊事件冒泡，以防觸發其他東西
    event.preventDefault();
    if (currentStep.action.type === 'click') {
      handleActionSuccess();
    }
  };

  if (isCompleted) {
      // 結束畫面
      return (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-8 my-8 rounded-lg flex flex-col items-center justify-center text-center shadow-lg">
          <FaCheckCircle className="text-5xl mb-4" />
          <h3 className="text-2xl font-bold mb-4">恭喜您，操作練習完成！</h3>
          <p className="text-lg mb-6">您已成功學習此操作流程。</p>
          <button
            onClick={handleReset}
            className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
          >
            <FaRedo />
            再練習一次
          </button>
        </div>
      );
    }

  return (
    <div className="my-8 p-4 bg-zinc-800 rounded-xl shadow-2xl">
      <div className="bg-white text-zinc-800 p-4 rounded-t-lg text-lg font-bold text-center">
        <p>{currentStep.instruction}</p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* ✨ 3. 關鍵修改：將圖片設定為不可拖動 */}
        <img
            src={currentStep.imageSrc}
            alt="軟體操作介面"
            className="w-full h-auto block"
            draggable="false"
        />
        <div
          className="absolute border-4 border-dashed border-blue-400 rounded-lg cursor-pointer touch-none"
          style={{
            top: currentStep.action.position.top,
            left: currentStep.action.position.left,
            width: currentStep.action.position.width,
            height: currentStep.action.position.height,
          }}

          // ✨ 4. 關鍵修改：綁定所有必要的事件處理器
          onClick={handleClick}
          onMouseDown={handleInteractionStart}
          onMouseUp={handleInteractionEnd}
          onMouseMove={handleInteractionMove}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
          onTouchMove={handleInteractionMove}
          onMouseLeave={handleInteractionEnd} // 當滑鼠移出區域時，也視為互動結束
          // 防止瀏覽器在長按時跳出右鍵選單
          onContextMenu={(e) => e.preventDefault()}
        ></div>
      </div>
    </div>
  );
};

export default InteractiveSimulationBlock;
