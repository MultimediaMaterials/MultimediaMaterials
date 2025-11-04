// src/components/CourseCard.jsx

// 簡單的播放圖示
const PlayIcon = () => (
  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path>
  </svg>
);

const CourseCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row border-2 border-transparent hover:border-blue-500 transition-all duration-300">

      {/* 課程圖片 */}
      <img
        className="w-full h-56 object-cover md:w-2/5"
        src={imageUrl}
        alt={title}
      />

      {/* 課程資訊 */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        </div>

        {/* 操作按鈕 */}
        <button className="mt-6 bg-blue-800 text-white text-xl font-bold py-4 px-6 rounded-lg w-full md:w-auto self-start flex items-center justify-center hover:bg-blue-800 transition-colors">
          <PlayIcon />
          開始學習
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
