const YoutubeBlock = ({ videoId, title }) => (
  <div className="my-8 aspect-w-16 aspect-h-9">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title || "YouTube video player"}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full rounded-lg shadow-lg"
    ></iframe>
  </div>
);
export default YoutubeBlock;
// P.S. 要使用 aspect-ratio 功能，需要安裝 tailwindcss/aspect-ratio 插件
// npm install -D @tailwindcss/aspect-ratio
// 然後在 tailwind.config.js 的 plugins 中加入: require('@tailwindcss/aspect-ratio')
