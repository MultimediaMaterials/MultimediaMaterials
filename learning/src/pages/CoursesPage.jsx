// src/pages/CoursesPage.jsx
import { Link } from 'react-router-dom';
import { COURSES } from '../data/coursesData';

// 將課程資料從物件轉為陣列，方便 map 遍歷
const coursesArray = Object.values(COURSES);

// 課程選擇卡片元件 (為長者特化設計)
const CourseSelectionCard = ({ course }) => (
  <Link
    to={`/course/${course.id}`}
    className="bg-white rounded-2xl shadow-lg overflow-hidden block border-4 border-transparent hover:border-blue-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
  >
    <div className="p-8">
      <img src={course.imageUrl} alt={course.title} className="w-24 h-24 mx-auto mb-6 object-contain" />
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">{course.title}</h2>
      <p className="text-lg text-gray-600 text-center leading-relaxed">{course.description}</p>
    </div>
    <div className="bg-blue-600 text-white text-center text-xl font-bold py-4">
      點我開始學習
    </div>
  </Link>
);

const CoursesPage = () => {
  return (
    <div className="container mx-auto p-6 md:p-12">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">樂齡數位力學堂</h1>
      <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        請選擇您今天想學習的數位工具，我們會一步一步帶您認識它！
      </p>

      {/* 課程列表網格 (在大型螢幕上最多兩欄，避免資訊過多) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {coursesArray.map(course => (
          <CourseSelectionCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
