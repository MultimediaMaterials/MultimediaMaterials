const HeadingBlock = ({ level, text }) => {
  const Tag = `h${level}`; // 動態決定是 h1, h2, h3...
  const styles = {
    1: 'text-4xl font-bold text-gray-800 mb-8',
    2: 'text-3xl font-bold text-gray-800 mb-6 mt-10',
    3: 'text-2xl font-bold text-gray-700 mb-4 mt-8',
  };
  return <Tag className={styles[level] || styles[2]}>{text}</Tag>;
};
export default HeadingBlock;
