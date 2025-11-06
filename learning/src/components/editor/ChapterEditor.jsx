// src/components/editor/ChapterEditor.jsx
import { useState } from 'react';
import BlockEditor from './BlockEditor';

const availableBlocks = [
  'heading', 'paragraph', 'alert', 'image', 'youtubeEmbed', 'orderedList', 'googleFormEmbed'
];

const ChapterEditor = ({ chapter, onContentChange }) => {
  if (!chapter) return <div>Select a chapter to begin editing.</div>;

  const handleBlockChange = (index, newBlockData) => {
    const newContent = [...chapter.content];
    newContent[index].data = newBlockData;
    onContentChange(newContent);
  };

  const handleAddBlock = (type) => {
    let newBlock;
    // Default structures for new blocks
    switch(type) {
      case 'heading': newBlock = { type, data: { level: 2, text: 'New Heading' } }; break;
      case 'paragraph': newBlock = { type, data: { text: 'New paragraph text.' } }; break;
      case 'alert': newBlock = { type, data: { style: 'info', text: 'New alert message.' } }; break;
      // Add other default cases as needed
      default: newBlock = { type, data: {} };
    }
    onContentChange([...chapter.content, newBlock]);
  };

  const handleDeleteBlock = (index) => {
    if (confirm('Are you sure you want to delete this block?')) {
      const newContent = chapter.content.filter((_, i) => i !== index);
      onContentChange(newContent);
    }
  };

  const handleMoveBlock = (index, direction) => {
    const newContent = [...chapter.content];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= newContent.length) return;

    // Swap elements
    [newContent[index], newContent[targetIndex]] = [newContent[targetIndex], newContent[index]];
    onContentChange(newContent);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 pb-4 border-b">Editing: {chapter.title}</h2>
      <div className="space-y-6">
        {chapter.content.map((block, index) => (
          <BlockEditor
            key={index}
            index={index}
            block={block}
            onChange={handleBlockChange}
            onDelete={handleDeleteBlock}
            onMove={handleMoveBlock}
          />
        ))}
      </div>

      <div className="mt-8 pt-6 border-t">
        <h3 className="text-lg font-semibold mb-2">Add New Block</h3>
        <div className="flex flex-wrap gap-2">
          {availableBlocks.map(type => (
            <button key={type} onClick={() => handleAddBlock(type)} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 text-sm">
              + {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterEditor;
