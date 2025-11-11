// src/components/editor/JsonEditor.jsx
import { useState, useEffect } from 'react';

const JsonEditor = ({ label, initialObject, onObjectChange }) => {
  // Local state to hold the string version of the object
  const [text, setText] = useState('');
  // Local state to track if the current text is valid JSON
  const [isValid, setIsValid] = useState(true);

  // When the initialObject prop changes (e.g., selecting a new chapter),
  // update the local text state to reflect the new object.
  useEffect(() => {
    // JSON.stringify with spacing for readability
    setText(JSON.stringify(initialObject, null, 2));
    setIsValid(true); // Reset validation state
  }, [initialObject]);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);

    try {
      // Try to parse the text into an object
      const newObject = JSON.parse(newText);
      // If successful, the text is valid...
      setIsValid(true);
      // ...and we can call the parent's onChange handler with the new object
      onObjectChange(newObject);
    } catch (error) {
      // If parsing fails, the text is invalid.
      setIsValid(false);
      // We do NOT call the parent's onChange, so the application's main
      // state remains clean and uncorrupted.
    }
  };

  return (
    <label className="block text-sm font-medium text-zinc-700">
      {label}
      <textarea
        value={text}
        onChange={handleChange}
        rows={5}
        className={`mt-1 block w-full p-2 border rounded-md font-mono text-sm
          ${isValid ? 'border-zinc-300 focus:border-blue-500 focus:ring-blue-500' : 'border-red-500 ring-2 ring-red-200'}
        `}
        placeholder='{ "key": "value" }'
      />
      {!isValid && (
        <p className="mt-1 text-xs text-red-600">Invalid JSON format. Please check your syntax.</p>
      )}
    </label>
  );
};

export default JsonEditor;
