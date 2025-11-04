const AlertBlock = ({ style = 'info', text }) => {
  const styles = {
    info: 'bg-blue-50 border-blue-400 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-400 text-yellow-800',
    success: 'bg-green-50 border-green-400 text-green-800',
  };
  return (
    <div className={`p-6 border-l-4 my-6 rounded-r-lg ${styles[style]}`}>
      <p className="text-lg">{text}</p>
    </div>
  );
};
export default AlertBlock;
