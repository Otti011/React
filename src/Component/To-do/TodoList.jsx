import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} index={index} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}

export default TodoList;