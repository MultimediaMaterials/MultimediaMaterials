// frontend/src/pages/test/test.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import BaseLayout from "../../components/layout/BaseLayout";
import SectionCard from "../../components/card/SectionCard";

// 從 .env 檔案讀取 API URL，若失敗則使用預設值
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const CoursesPage = () => {
  // 'idle'（初始）、'loading'（載入中）、'success'（成功）、'error'（失敗）
  const [status, setStatus] = useState('idle');
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 設定狀態為載入中，立即觸發畫面更新
    setStatus('loading');
    setError(null);

    const fetchCourses = async () => {
      try {
        // 印出將要請求的 URL，這是唯一的除錯資訊，用於確認位址正確
        console.log(`準備請求後端 API: ${API_URL}/courses/`);
        
        const response = await axios.get(`${API_URL}/courses/`);
        
        // 成功取得資料
        setCourses(response.data);
        setStatus('success');
        
        // 成功後，請到 Django 後端終端機查看，應會顯示 "GET /api/courses/ ... 200"
        console.log("成功從後端取得資料:", response.data);

      } catch (err) {
        // 請求失敗
        setStatus('error');
        // 儲存詳細的錯誤資訊
        setError(err);
        console.error("連線後端失敗:", err);
      }
    };

    // 延遲 500 毫秒執行，方便清楚看到「載入中」的畫面
    const timer = setTimeout(() => {
      fetchCourses();
    }, 500);

    // 元件卸載時清除計時器，這是良好的開發習慣
    return () => clearTimeout(timer);

  }, []); // 空依賴陣列，確保只在元件首次載入時執行

  // --- 根據不同狀態渲染不同畫面 ---
  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <div className="text-center p-10">
            <span className="loading loading-spinner loading-lg"></span>
            <p className="mt-4 text-xl">正在從 Django 後端載入課程資料...</p>
          </div>
        );

      case 'error':
        return (
          <div role="alert" className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M10 14l2-2m0 0l2-2m-2 2l-2 2m2-2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-bold">連線後端失敗！</h3>
              <div className="text-xs">
                請確認 Django 伺服器是否正在執行，並查看瀏覽器 Console 中的錯誤細節。
              </div>
              <pre className="text-xs mt-2 bg-base-300 p-2 rounded">
                {error?.message || "未知錯誤"}
              </pre>
            </div>
          </div>
        );

      case 'success':
        if (courses.length === 0) {
          return (
            <div className="text-center p-10">
              <h3 className="text-2xl font-bold">✅ 成功連線至後端！</h3>
              <p className="mt-4">但目前資料庫中尚無任何課程。請至 Django Admin 新增課程資料。</p>
            </div>
          );
        }
        return (
          <>
            <h3 className="text-center text-2xl font-bold text-success mb-4">
              ✅ 成功連線後端，已取得課程資料！
            </h3>
            <div className="flex flex-wrap gap-8 justify-center">
              {courses.map(course => (
                <SectionCard
                  key={course.id}
                  title={course.title}
                  subtitle={course.subtitle}
                  summary={course.summary}
                  imgUrl={course.imgUrl}
                  path={`/courses/${course.id}`}
                />
              ))}
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <BaseLayout>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">課程總覽</h1>
        {renderContent()}
      </div>
    </BaseLayout>
  );
};

export default CoursesPage;
