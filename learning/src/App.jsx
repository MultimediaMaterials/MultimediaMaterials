// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LessonLayout from './layouts/LessonLayout';

// 導覽列元件
const Navbar = () => (
  <header className="bg-white shadow-md sticky top-0 z-10">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold text-blue-900">
        樂齡數位學堂
      </Link>
      <Link to="/courses" className="text-xl text-zinc-800 hover:text-blue-900">課程列表</Link>
    </nav>
  </header>
);


function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-zinc-800">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<CoursesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:courseId" element={<CourseDetailPage />} />
          <Route path="/course/:courseId/:lessonId/:chapterId" element={<LessonLayout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
