// src/components/blocks/GoogleFormBlock.jsx

const GoogleFormBlock = ({ formUrl }) => {
  // A simple check to ensure the URL is provided
  if (!formUrl) {
    return (
      <div className="my-8 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
        <p className="font-bold">Configuration Error</p>
        <p>The Google Form URL is missing for this block.</p>
      </div>
    );
  }

  return (
    <div className="my-8">
      <iframe
        src={formUrl}
        width="100%"
        height="800" // A reasonable default height, forms can be long
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Embedded Google Form" // Important for accessibility
        className="rounded-lg shadow-md border border-zinc-200"
      >
        Loading form...
      </iframe>
    </div>
  );
};

export default GoogleFormBlock;
