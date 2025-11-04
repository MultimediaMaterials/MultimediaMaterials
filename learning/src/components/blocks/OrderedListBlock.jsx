// src/components/blocks/OrderedListBlock.jsx

const OrderedListBlock = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ol className="list-decimal list-inside space-y-4 my-6 pl-4">
      {items.map((item, index) => (
        <li key={index} className="text-lg text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-md border">
          {item}
        </li>
      ))}
    </ol>
  );
};

export default OrderedListBlock;
