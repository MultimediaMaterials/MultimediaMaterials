// src/pages/LessonPage.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { COURSES } from '../data/coursesData';

// 引入一個簡單的圖示庫，或自己製作 SVG 元件
import { FaLightbulb, FaBookOpen, FaClipboardList } from 'react-icons/fa';

const LessonPage = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();

  const course = COURSES[courseId];
  const lessonIndex = course.lessons.findIndex(l => l.id === lessonId);
  const lesson = course.lessons[lessonIndex];

  if (!course || !lesson) {
    return <div>找不到這個單元！</div>;
  }

  const prevLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < course.lessons.length - 1 ? course.lessons[lessonIndex + 1] : null;

  return (
    <div className="container mx-auto p-6 md:p-12 max-w-4xl">
      {/* 麵包屑導覽 */}
      <nav className="text-lg mb-8">
        <Link to="/courses" className="text-blue-600 hover:underline">所有課程</Link>
        <span className="mx-2">/</span>
        <Link to={`/course/${course.id}`} className="text-blue-600 hover:underline">{course.title}</Link>
      </nav>

      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{lesson.title}</h1>

        {/* 功能情境描述 */}
        <div className="mb-10 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
          <h2 className="text-2xl font-bold text-yellow-800 mb-3 flex items-center">
            <FaLightbulb className="mr-3" /> 為什麼要學這個？
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">{lesson.scenario}</p>
        </div>

        {/* 功能介紹 */}
        <div className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <h2 className="text-2xl font-bold text-blue-800 mb-3 flex items-center">
             <FaBookOpen className="mr-3" /> 功能介紹
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">{lesson.introduction}</p>
        </div>

        {/* 操作步驟流程 */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaClipboardList className="mr-3" /> 操作步驟
          </h2>
          <ol className="list-decimal list-inside space-y-6">
            {lesson.steps.map((step, index) => (
              <li key={index} className="text-xl text-gray-700 leading-loose bg-gray-100 p-4 rounded-lg">
                <span className="font-bold text-gray-900">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* 導覽按鈕 */}
      <div className="mt-12 flex justify-between items-center">
        {prevLesson ? (
          <Link to={`/course/${courseId}/${prevLesson.id}`} className="bg-gray-600 text-white text-xl font-bold py-4 px-8 rounded-lg hover:bg-gray-700 transition-colors">
            ← 上一單元
          </Link>
        ) : (
          <div /> // 佔位元，讓 "下一單元" 按鈕保持在右邊
        )}
        {nextLesson ? (
          <Link to={`/course/${courseId}/${nextLesson.id}`} className="bg-blue-900 text-white text-xl font-bold py-4 px-8 rounded-lg hover:bg-blue-800 transition-colors">
            下一單元 →
          </Link>
        ) : (
           <button onClick={() => alert('恭喜您學完所有單元！')} className="bg-green-600 text-white text-xl font-bold py-4 px-8 rounded-lg hover:bg-green-700 transition-colors">
            完成課程！
          </button>
        )}
      </div>
    </div>
  );
};

export default LessonPage;
