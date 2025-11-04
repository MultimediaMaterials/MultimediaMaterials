// src/layouts/LessonLayout.jsx
import { useParams } from 'react-router-dom';
import { COURSES } from '../data/coursesData';
import SidebarNav from '../components/SidebarNav';
import ChapterContent from '../components/ChapterContent';

const LessonLayout = () => {
  const { courseId, lessonId, chapterId } = useParams();

  const course = COURSES[courseId];
  if (!course) return <div>找不到課程！</div>;

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-8 p-4 md:p-8">
      {/* 側邊導覽列 */}
      <aside className="w-full md:w-1/4">
        <SidebarNav course={course} activeLessonId={lessonId} activeChapterId={chapterId} />
      </aside>

      {/* 主要內容區 */}
      <main className="w-full md:w-3/4">
        <ChapterContent
            courseId={courseId}
            lessonId={lessonId}
            chapterId={chapterId}
        />
      </main>
    </div>
  );
};

export default LessonLayout;
