// src/components/editor/BlockEditor.jsx
import React from 'react';

const BlockEditor = ({ index, block, onChange, onDelete, onMove }) => {
  const { type, data } = block;

  const handleChange = (field, value) => {
    onChange(index, { ...data, [field]: value });
  };

  const renderFields = () => {
    switch (type) {
      case 'heading':
        return (
          <>
            <Field label="Text" value={data.text} onChange={e => handleChange('text', e.target.value)} />
            <Field label="Level (1-3)" type="number" value={data.level} onChange={e => handleChange('level', parseInt(e.target.value))} />
          </>
        );
      case 'paragraph':
        return <Field label="Text" type="textarea" value={data.text} onChange={e => handleChange('text', e.target.value)} />;
      case 'alert':
        return (
          <>
            <Field label="Text" type="textarea" value={data.text} onChange={e => handleChange('text', e.target.value)} />
            <label className="block text-sm font-medium text-zinc-700 mt-2">Style
              <select value={data.style} onChange={e => handleChange('style', e.target.value)} className="mt-1 block w-full p-2 border border-zinc-300 rounded-md">
                <option value="info">Info</option>
                <option value="warning">Warning</option>
                <option value="success">Success</option>
              </select>
            </label>
          </>
        );
      case 'image':
        return (
          <>
            <Field label="Image URL (e.g., /images/pic.png)" value={data.src} onChange={e => handleChange('src', e.target.value)} />
            <Field label="Alt Text (for accessibility)" value={data.alt} onChange={e => handleChange('alt', e.target.value)} />
            <Field label="Caption" value={data.caption} onChange={e => handleChange('caption', e.target.value)} />
          </>
        );
      case 'youtubeEmbed':
        return <Field label="YouTube Video ID" value={data.videoId} onChange={e => handleChange('videoId', e.target.value)} />;
      case 'googleFormEmbed':
        return <Field label="Google Form URL" value={data.formUrl} onChange={e => handleChange('formUrl', e.target.value)} />;
      case 'orderedList':
        return <Field label="Items (one per line)" type="textarea" value={data.items.join('\n')} onChange={e => handleChange('items', e.target.value.split('\n'))} />;
      default:
        return <p className="text-red-500">Unknown block type: {type}</p>;
    }
  };

  return (
    <div className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4 pb-3 border-b">
        <h4 className="font-bold text-lg capitalize text-zinc-700">{type}</h4>
        <div className="flex items-center gap-2">
          <button onClick={() => onMove(index, -1)} title="Move Up" className="p-1 text-zinc-500 hover:text-blue-600">↑</button>
          <button onClick={() => onMove(index, 1)} title="Move Down" className="p-1 text-zinc-500 hover:text-blue-600">↓</button>
          <button onClick={() => onDelete(index)} title="Delete Block" className="p-1 text-zinc-500 hover:text-red-600 font-bold">✕</button>
        </div>
      </div>
      <div className="space-y-3">
        {renderFields()}
      </div>
    </div>
  );
};

// Helper component for form fields to reduce repetition
const Field = ({ label, type = 'text', value, onChange }) => (
  <label className="block text-sm font-medium text-zinc-700">
    {label}
    {type === 'textarea' ? (
      <textarea value={value} onChange={onChange} className="mt-1 block w-full p-2 border border-zinc-300 rounded-md h-24" />
    ) : (
      <input type={type} value={value} onChange={onChange} className="mt-1 block w-full p-2 border border-zinc-300 rounded-md" />
    )}
  </label>
);

export default BlockEditor;
