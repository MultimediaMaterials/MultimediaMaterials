// src/components/ChapterContent.jsx
import { Link, useLocation } from "react-router-dom";
import { COURSES } from "../data/coursesData";
import { getChapterNavigation } from "../utils/navigation";

// 引入所有區塊元件
import HeadingBlock from "./blocks/HeadingBlock";
import ParagraphBlock from "./blocks/ParagraphBlock";
import ImageBlock from "./blocks/ImageBlock";
import AlertBlock from "./blocks/AlertBlock";
import YoutubeBlock from "./blocks/YoutubeBlock";
import HtmlEmbedBlock from "./blocks/HtmlEmbedBlock";
import OrderedListBlock from "./blocks/OrderedListBlock";
import GoogleFormBlock from './blocks/GoogleFormBlock';
import InteractiveSimulationBlock from './blocks/InteractiveSimulationBlock';
import { useEffect } from "react";

// 建立一個元件對應表，方便查找
const blockComponents = {
  heading: HeadingBlock,
  paragraph: ParagraphBlock,
  image: ImageBlock,
  alert: AlertBlock,
  youtubeEmbed: YoutubeBlock,
  htmlEmbed: HtmlEmbedBlock,
  orderedList: OrderedListBlock,
  googleFormEmbed: GoogleFormBlock,
  interactiveSimulation: InteractiveSimulationBlock,
};

// 主要的章節內容元件
const ChapterContent = ({ courseId, lessonId, chapterId }) => {
  const course = COURSES[courseId];
  const lesson = course.lessons.find((l) => l.id === lessonId);
  const chapter = lesson?.chapters.find((c) => c.id === chapterId);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  if (!chapter) return <div>找不到章節內容。</div>;

  const { prevChapter, nextStep } = getChapterNavigation(
    courseId,
    lessonId,
    chapterId,
  );
  const renderNextStepButton = () => {
    if (!nextStep) return <div />; // 如果沒有下一步，留空

    switch (nextStep.type) {
      case "next_chapter":
        return (
          <Link
            to={`/course/${courseId}/${nextStep.data.lessonId}/${nextStep.data.id}`}
            className="bg-blue-900 text-white text-xl font-bold py-4 px-8 rounded-lg hover:bg-blue-800 transition-colors"
          >
            下一章 →
          </Link>
        );
      case "next_lesson":
        return (
          <Link
            to={`/course/${courseId}/${nextStep.data.lessonId}/${nextStep.data.id}`}
            className="bg-green-600 text-white text-xl font-bold py-4 px-8 rounded-lg hover:bg-green-700 transition-colors" // 使用不同顏色提示
          >
            前往下一單元 →
          </Link>
        );
      case "course_complete":
        return (
          <Link
          to="/courses"
          className="bg-emerald-500 text-white text-xl font-bold py-4 px-8 rounded-lg hover:bg-emerald-600 transition-colors"
          >
            恭喜！您已完成所有課程！
          </Link>
        );
      default:
        return <div />;
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-4">
        {chapter.title}
      </h1>

      {/* ✨ 區塊渲染引擎核心 ✨ */}
      <div>
        {chapter.content.map((block, index) => {
          const Component = blockComponents[block.type];
          if (!Component) {
            return <div  key={`${chapterId}-${index}`}>錯誤：未知的區塊類型 "{block.type}"</div>;
          }
          // 將 block.data 的所有屬性作為 props 傳給對應的元件
          return <Component  key={`${chapterId}-${index}`} {...block.data} />;
        })}
      </div>

      {/* 導覽按鈕 */}
      <div className="mt-12 flex justify-between items-center border-t pt-8">
        {/* 上一步按鈕 */}
        {prevChapter ? (
          <Link
            to={`/course/${courseId}/${prevChapter.lessonId}/${prevChapter.id}`}
            className="bg-gray-600 text-white text-xl font-bold py-4 px-8 rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← 上一章
          </Link>
        ) : (
          <div />
        )}{" "}
        {/* 佔位元，讓按鈕保持在右邊 */}
        {/* 下一步按鈕 */}
        {renderNextStepButton()}
      </div>
    </div>
  );
};

export default ChapterContent;

// 建議建立一個 src/utils/navigation.js 檔案來放 getChapterNavigation 函數
// 這樣可以讓 ChapterContent.jsx 更乾淨
