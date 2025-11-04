// src/components/SidebarNav.jsx
import { Link } from 'react-router-dom';

const SidebarNav = ({ course, activeLessonId, activeChapterId }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{course.title}</h2>
      <nav>
        <ul className="space-y-6">
          {course.lessons.map((lesson) => (
            <li key={lesson.id}>
              <h3 className="font-bold text-lg text-gray-600 mb-3">{lesson.title}</h3>
              <ul className="space-y-2 border-l-2 pl-4">
                {lesson.chapters.map((chapter) => {
                  const isActive = lesson.id === activeLessonId && chapter.id === activeChapterId;
                  return (
                    <li key={chapter.id}>
                      <Link
                        to={`/course/${course.id}/${lesson.id}/${chapter.id}`}
                        className={`block p-2 rounded-md text-md transition-colors ${
                          isActive
                            ? 'bg-blue-100 text-blue-700 font-bold'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {chapter.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarNav;
