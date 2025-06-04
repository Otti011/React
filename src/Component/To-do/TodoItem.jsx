import React from 'react';

function TodoItem({ task, index, deleteTask }) {
  return (
    <li style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', background: '#eef', padding: '8px', borderRadius: '5px' }}>
      {task}
      <button onClick={() => deleteTask(index)} style={{ background: 'red', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '4px' }}>
        ❌
      </button>
    </li>
  );
}

export default TodoItem;


