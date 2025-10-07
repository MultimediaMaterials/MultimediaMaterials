// frontend/src/pages/test/test.jsx (完整修正 + Debug)

import { useState, useEffect } from "react";
import axios from "axios";

// 修正路徑: 跳出 test -> 跳出 pages -> 進入 components/layout
import BaseLayout from "../../components/layout/BaseLayout"; 
// 修正路徑: 跳出 test -> 跳出 pages -> 進入 components/card
import SectionCard from "../../components/card/SectionCard"; 

// 從 .env 讀取 API URL，如果沒有則使用預設值
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // [Debug] 步驟 1: 檢查 useEffect 是否被執行
    console.log("Component mounted. Starting useEffect...");

    const fetchCourses = async () => {
      try {
        // [Debug] 步驟 2: 檢查 fetchCourses 是否被呼叫，以及 API_URL 是否正確
        const fullUrl = `${API_URL}/courses/`;
        console.log("Calling fetchCourses with URL:", fullUrl);
        
        const response = await axios.get(fullUrl);
        
        // [Debug] 步驟 3: 檢查 API 是否回傳了東西
        console.log("API response received:", response.data);
        
        setCourses(response.data);
      } catch (err) {
        // [Debug] 步驟 4: 如果出錯，印出詳細錯誤
        console.error("API call failed:", err);
        setError("無法獲取課程資料，請檢查後端伺服器是否運行或查看 Console 錯誤。");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []); // 空依賴陣列，確保只執行一次

  // [Debug] 步驟 5: 檢查元件是否真的在渲染
  console.log("Rendering CoursesPage component with state:", { loading, error, coursesCount: courses.length });

  return (
    <BaseLayout>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">所有課程 (來自後端)</h1>
        
        {loading && <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>}
        
        {error && <div className="alert alert-error"><svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2 2m2-2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>{error}</span></div>}
        
        <div className="flex flex-wrap gap-8 justify-center">
          {!loading && !error && courses.map(course => (
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
      </div>
    </BaseLayout>
  );
};

export default CoursesPage;