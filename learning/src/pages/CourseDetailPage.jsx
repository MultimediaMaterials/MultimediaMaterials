// src/pages/CourseDetailPage.jsx (修正後的版本)
import { Link, useParams } from 'react-router-dom';
import { COURSES } from '../data/coursesData';

const CourseDetailPage = () => {
    const { courseId } = useParams();
    const course = COURSES[courseId];

    if (!course) return <div>找不到課程</div>;

    return (
        <div className="container mx-auto p-6 md:p-12">
            <h1 className="text-4xl font-bold text-center mb-4">{course.title}</h1>
            <p className="text-xl text-center text-gray-600 mb-10">{course.description}</p>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">課程單元</h2>
                <ul className="space-y-4">
                    {course.lessons.map((lesson, index) => (
                        <li key={lesson.id}>
                            {/* === ✨ 關鍵修改處 ✨ === */}
                            {/* 我們現在連結到該單元的第一個章節 */}
                            <Link
                                to={`/course/${course.id}/${lesson.id}/${lesson.chapters[0].id}`}
                                className="block p-4 rounded-lg text-lg hover:bg-gray-100 transition-colors border"
                            >
                                <span className="font-bold text-blue-700 mr-4">單元 {index + 1}:</span>
                                {lesson.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CourseDetailPage;
