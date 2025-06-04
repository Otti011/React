import React, { useState } from 'react';

function TodoInput({ addTask }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    addTask(input);
    setInput('');
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={input}
        placeholder="Enter a task"
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '8px', width: '65%' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px 12px', marginLeft: '10px' }}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
