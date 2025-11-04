// src/utils/navigation.js

import { COURSES } from '../data/coursesData';

export const getChapterNavigation = (courseId, lessonId, chapterId) => {
    const course = COURSES[courseId];
    if (!course) return { prevChapter: null, nextStep: null };

    // 找到當前單元和章節的索引
    const currentLessonIndex = course.lessons.findIndex(l => l.id === lessonId);
    if (currentLessonIndex === -1) return { prevChapter: null, nextStep: null };

    const currentLesson = course.lessons[currentLessonIndex];
    const currentChapterIndex = currentLesson.chapters.findIndex(c => c.id === chapterId);
    if (currentChapterIndex === -1) return { prevChapter: null, nextStep: null };

    // --- 決定「上一步」 ---
    let prevChapter = null;
    if (currentChapterIndex > 0) {
        // 情況 1: 同單元內有上一章
        prevChapter = { ...currentLesson.chapters[currentChapterIndex - 1], lessonId: currentLesson.id };
    } else if (currentLessonIndex > 0) {
        // 情況 2: 是單元的第一章，且前面還有單元
        const prevLesson = course.lessons[currentLessonIndex - 1];
        // 上一步是前一個單元的「最後一章」
        prevChapter = { ...prevLesson.chapters[prevLesson.chapters.length - 1], lessonId: prevLesson.id };
    }

    // --- ✨ 決定「下一步」的類型 ✨ ---
    let nextStep = null;
    if (currentChapterIndex < currentLesson.chapters.length - 1) {
        // 類型 1: 同單元內還有下一章
        const nextChapterData = currentLesson.chapters[currentChapterIndex + 1];
        nextStep = {
            type: 'next_chapter',
            data: { ...nextChapterData, lessonId: currentLesson.id }
        };
    } else if (currentLessonIndex < course.lessons.length - 1) {
        // 類型 2: 是單元的最後一章，且後面還有單元
        const nextLesson = course.lessons[currentLessonIndex + 1];
        // 下一步是下一個單元的「第一章」
        const nextChapterData = nextLesson.chapters[0];
        nextStep = {
            type: 'next_lesson',
            data: { ...nextChapterData, lessonId: nextLesson.id }
        };
    } else {
        // 類型 3: 是最後單元的最後一章
        nextStep = {
            type: 'course_complete',
            data: null
        };
    }

    return { prevChapter, nextStep };
}
