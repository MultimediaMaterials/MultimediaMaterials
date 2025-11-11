// src/App.jsx

import { useState } from 'react';
import ImageSelectorTool from './components/ImageSelectorTool';
import ClickableImageSequence from './components/ClickableImageSequence';
import './App.css';

// 你的圖片列表
const imagesToEdit = [
  '/images/IMG_0324.png',
  '/images/IMG_0325.png',
  '/images/IMG_0326.png',
  '/images/IMG_0327.png',
];

function App() {
  const [isEditorMode, setIsEditorMode] = useState(true); // 預設為編輯模式
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="App">
      <header className="app-header">
        <h1>互動圖片設定工具</h1>
        <button onClick={() => setIsEditorMode(!isEditorMode)}>
          切換到 {isEditorMode ? '預覽模式' : '編輯模式'}
        </button>
      </header>

      <main>
        {isEditorMode ? (
          <div>
            <div className="editor-controls">
              <p>選擇要編輯的圖片:</p>
              {imagesToEdit.map((img, index) => (
                <button
                  key={img}
                  onClick={() => setCurrentImageIndex(index)}
                  className={currentImageIndex === index ? 'active' : ''}
                >
                  圖片 {index + 1}
                </button>
              ))}
            </div>
            <ImageSelectorTool imageUrl={imagesToEdit[currentImageIndex]} />
          </div>
        ) : (
          <ClickableImageSequence />
        )}
      </main>
    </div>
  );
}

export default App;