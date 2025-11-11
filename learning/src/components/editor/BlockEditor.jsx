// src/components/editor/BlockEditor.jsx
import React from 'react';
import JsonEditor from './JsonEditor';

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
        return <Field label="Items (one per line)" type="textarea" value={data.items?.join('\n')} onChange={e => handleChange('items', e.target.value.split('\n'))} />;
      case 'interactiveSimulation': {
        const handleItemChange = (itemIndex, field, value) => {
          const newItems = [...data.items];
          newItems[itemIndex] = { ...newItems[itemIndex], [field]: value };
          handleChange('items', newItems);
        };

        const handleActionChange = (itemIndex, field, value) => {
          const newItems = [...data.items];
          newItems[itemIndex].action = { ...newItems[itemIndex].action, [field]: value };
          handleChange('items', newItems);
        };

        const handlePositionChange = (itemIndex, field, value) => {
          const newItems = [...data.items];
          newItems[itemIndex].action.position = { ...newItems[itemIndex].action.position, [field]: value };
          handleChange('items', newItems);
        };

        const handleAddItem = () => {
          const newItems = [...data.items, { instruction: 'New Step', imageSrc: '', action: { type: 'click', position: { top: '0', left: '0', width: '50px', height: '50px' } } }];
          handleChange('items', newItems);
        };

        const handleDeleteItem = (itemIndex) => {
          if (confirm('Delete this simulation step?')) {
            const newItems = data.items.filter((_, i) => i !== itemIndex);
            handleChange('items', newItems);
          }
        };

        const handlePositionObjectChange = (itemIndex, newPositionObject) => {
          const newItems = [...data.items];
          newItems[itemIndex].action.position = newPositionObject;
          handleChange('items', newItems);
        };

        return (
          <div className="space-y-4">
            {data.items?.map((item, itemIndex) => (
              <div key={itemIndex} className="p-4 border border-zinc-300 rounded-md bg-zinc-50 space-y-3">
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold text-md text-zinc-800">Step {itemIndex + 1}</h5>
                  <button onClick={() => handleDeleteItem(itemIndex)} className="text-red-500 hover:text-red-700 text-sm">Delete Step</button>
                </div>
                <Field label="Instruction" value={item.instruction} onChange={e => handleItemChange(itemIndex, 'instruction', e.target.value)} />
                <Field label="Image URL" value={item.imageSrc} onChange={e => handleItemChange(itemIndex, 'imageSrc', e.target.value)} />

                <h6 className="font-semibold text-sm pt-2 border-t mt-4">Action</h6>
                <label className="block text-sm font-medium text-zinc-700">Type
                  <select value={item.action.type} onChange={e => handleActionChange(itemIndex, 'type', e.target.value)} className="mt-1 block w-full p-2 border border-zinc-300 rounded-md">
                    <option value="click">Click</option>
                    <option value="swipe">Swipe</option>
                    <option value="longPress">Long Press</option>
                  </select>
                </label>

                {item.action.type === 'swipe' && (
                  <label className="block text-sm font-medium text-zinc-700">Direction
                    <select value={item.action.direction} onChange={e => handleActionChange(itemIndex, 'direction', e.target.value)} className="mt-1 block w-full p-2 border border-zinc-300 rounded-md">
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                    </select>
                  </label>
                )}
                {item.action.type === 'longPress' && (
                  <Field label="Duration (ms)" type="number" value={item.action.duration} onChange={e => handleActionChange(itemIndex, 'duration', parseInt(e.target.value))} />
                )}

                <h6 className="font-semibold text-sm pt-2 border-t mt-4">Hotspot Position</h6>
                <JsonEditor
                  label="Position Object"
                  initialObject={item.action.position}
                  onObjectChange={(newPosition) => handlePositionObjectChange(itemIndex, newPosition)}
                />
              </div>
            ))}
            <button onClick={handleAddItem} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm w-full">
              + Add New Step
            </button>
          </div>
        );
      }
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
