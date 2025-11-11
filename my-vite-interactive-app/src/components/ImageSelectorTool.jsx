// src/components/ImageSelectorTool.jsx

import React, { useState, useRef, useEffect } from 'react';
import './ImageSelectorTool.css';

const ImageSelectorTool = ({ imageUrl }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
  const [selectionPx, setSelectionPx] = useState(null);
  // 關鍵改動：新的 state，用來儲存最終的 style 物件
  const [positionStyle, setPositionStyle] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (selectionPx && imageRef.current) {
      const { clientWidth, clientHeight } = imageRef.current;

      if (clientWidth > 0 && clientHeight > 0) {
        // 數字格式的百分比
        const percent = {
          x: parseFloat(((selectionPx.x / clientWidth) * 100).toFixed(2)),
          y: parseFloat(((selectionPx.y / clientHeight) * 100).toFixed(2)),
          width: parseFloat(((selectionPx.width / clientWidth) * 100).toFixed(2)),
          height: parseFloat(((selectionPx.height / clientHeight) * 100).toFixed(2)),
        };

        // 關鍵改動：轉換成你想要的、包含 "%" 的字串格式
        const newPositionStyle = {
          left: `${percent.x}%`,
          top: `${percent.y}%`,
          width: `${percent.width}%`,
          height: `${percent.height}%`,
        };
        setPositionStyle(newPositionStyle);
      }
    } else {
      setPositionStyle(null);
    }
  }, [selectionPx]);

  const getCoords = (event) => ({
    x: event.nativeEvent.offsetX,
    y: event.nativeEvent.offsetY,
  });

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDrawing(true);
    setStartPoint(getCoords(event));
    setSelectionPx(null);
    setPositionStyle(null);
  };

  const handleMouseMove = (event) => {
    if (!isDrawing) return;
    const currentPoint = getCoords(event);
    setSelectionPx({
      x: Math.min(startPoint.x, currentPoint.x),
      y: Math.min(startPoint.y, currentPoint.y),
      width: Math.abs(startPoint.x - currentPoint.x),
      height: Math.abs(startPoint.y - currentPoint.y),
    });
  };

  const handleMouseUp = () => setIsDrawing(false);
  const handleImageLoad = () => {
    setSelectionPx(null);
    setPositionStyle(null);
  }

  return (
    <div className="shared-image-container editor-container-style">
      <h3>圖片範圍框選工具</h3>
      <p>所見即所得：此處圖片大小與預覽模式完全相同。</p>
      <div
        className="shared-image-wrapper"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          ref={imageRef}
          src={imageUrl}
          alt="Selectable"
          draggable="false"
          onLoad={handleImageLoad}
        />
        {selectionPx && (
          <div
            className="selection-box"
            style={{
              left: selectionPx.x,
              top: selectionPx.y,
              width: selectionPx.width,
              height: selectionPx.height,
            }}
          />
        )}
      </div>
      {positionStyle && (
        <div className="info-box">
          <h4>複製這段設定</h4>
          {/* 關鍵改動：輸出你想要的格式 */}
          <pre>
            {`position: ${JSON.stringify(positionStyle, null, 2)}`}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ImageSelectorTool;