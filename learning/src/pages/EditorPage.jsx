// src/pages/EditorPage.jsx
import { useState, useMemo } from 'react';
import { COURSES as initialCoursesData } from '../data/coursesData';
import ChapterEditor from '../components/editor/ChapterEditor';

const EditorPage = () => {
  // Load the initial course data into state
  const [coursesData, setCoursesData] = useState(initialCoursesData);

  // State for the dropdown selections
  const [selectedCourseId, setSelectedCourseId] = useState(Object.keys(coursesData)[0]);
  const [selectedLessonId, setSelectedLessonId] = useState(coursesData[Object.keys(coursesData)[0]].lessons[0].id);
  const [selectedChapterId, setSelectedChapterId] = useState(coursesData[Object.keys(coursesData)[0]].lessons[0].chapters[0].id);

  // Memoized values to avoid unnecessary recalculations
  const selectedCourse = useMemo(() => coursesData[selectedCourseId], [coursesData, selectedCourseId]);
  const selectedLesson = useMemo(() => selectedCourse?.lessons.find(l => l.id === selectedLessonId), [selectedCourse, selectedLessonId]);

  // ✨ New handler function for the Course dropdown
  const handleCourseChange = (e) => {
    const newCourseId = e.target.value;
    setSelectedCourseId(newCourseId);

    // When the course changes, reset both the lesson and chapter
    const newCourse = coursesData[newCourseId];
    if (newCourse.lessons.length > 0) {
      const firstLesson = newCourse.lessons[0];
      setSelectedLessonId(firstLesson.id);

      if (firstLesson.chapters.length > 0) {
        setSelectedChapterId(firstLesson.chapters[0].id);
      } else {
        setSelectedChapterId(null); // Handle case where first lesson has no chapters
      }
    } else {
      setSelectedLessonId(null); // Handle case where course has no lessons
      setSelectedChapterId(null);
    }
  };

  // ✨ New handler function for the Lesson dropdown
  const handleLessonChange = (e) => {
    const newLessonId = e.target.value;
    setSelectedLessonId(newLessonId);

    // When the lesson changes, reset the chapter to its first option
    const newLesson = selectedCourse.lessons.find(l => l.id === newLessonId);
    if (newLesson && newLesson.chapters.length > 0) {
      setSelectedChapterId(newLesson.chapters[0].id);
    } else {
      setSelectedChapterId(null);
    }
  };

  // Handler to update the entire course data state
  const handleChapterContentChange = (newContent) => {
    setCoursesData(prevData => {
      // Deep clone to avoid mutation issues
      const newData = JSON.parse(JSON.stringify(prevData));
      const course = newData[selectedCourseId];
      const lesson = course.lessons.find(l => l.id === selectedLessonId);
      const chapter = lesson.chapters.find(c => c.id === selectedChapterId);
      chapter.content = newContent;
      return newData;
    });
  };

  // Handler for exporting the data
  const handleExport = () => {
    const exportString = `export const COURSES = ${JSON.stringify(coursesData, null, 2)};`;
    navigator.clipboard.writeText(exportString).then(() => {
      alert('Updated courses data copied to clipboard!');
    }, () => {
      alert('Failed to copy. Please copy manually from the text box.');
    });
  };

  return (
    <div className="container mx-auto p-8 font-sans">
      <h1 className="text-4xl font-bold mb-4">Content Editor</h1>
      <p className="text-zinc-600 mb-8">Select a chapter to edit its content blocks.</p>

      {/* Selection Dropdowns */}
      <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-white rounded-lg shadow">
        {/* Course Selector */}
        <div>
          <label htmlFor="course-select" className="block text-sm font-medium text-zinc-700">Course</label>
          <select id="course-select" value={selectedCourseId} onChange={handleCourseChange} className="mt-1 block w-full p-2 border border-zinc-300 rounded-md">
            {Object.values(coursesData).map(course => (
              <option key={course.id} value={course.id}>{course.title}</option>
            ))}
          </select>
        </div>
        {/* Lesson Selector */}
        <div>
          <label htmlFor="lesson-select" className="block text-sm font-medium text-zinc-700">Lesson</label>
          <select id="lesson-select" value={selectedLessonId} onChange={handleLessonChange} className="mt-1 block w-full p-2 border border-zinc-300 rounded-md">
            {selectedCourse?.lessons.map(lesson => (
              <option key={lesson.id} value={lesson.id}>{lesson.title}</option>
            ))}
          </select>
        </div>
        {/* Chapter Selector */}
        <div>
          <label htmlFor="chapter-select" className="block text-sm font-medium text-zinc-700">Chapter</label>
          <select id="chapter-select" value={selectedChapterId} onChange={e => setSelectedChapterId(e.target.value)} className="mt-1 block w-full p-2 border border-zinc-300 rounded-md">
            {selectedLesson?.chapters.map(chapter => (
              <option key={chapter.id} value={chapter.id}>{chapter.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Chapter Editor Component */}
      {selectedLesson && (
        <ChapterEditor
          chapter={selectedLesson.chapters.find(c => c.id === selectedChapterId)}
          onContentChange={handleChapterContentChange}
        />
      )}

      {/* Export Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Export Content</h2>
        <p className="text-zinc-600 mb-4">Click the button to copy the updated data. The developer can then paste this into the `src/data/coursesData.js` file.</p>
        <button onClick={handleExport} className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">
          Copy Updated Data to Clipboard
        </button>
        <textarea
          readOnly
          value={`export const COURSES = ${JSON.stringify(coursesData, null, 2)};`}
          className="w-full h-64 mt-4 p-4 font-mono text-sm bg-zinc-100 rounded-md border"
        />
      </div>
    </div>
  );
};

export default EditorPage;
