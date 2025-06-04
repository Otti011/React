import React, { useState } from 'react';
import TodoInput from './Component/To-do/Input';
import TodoList from './Component/To-do/TodoList';
import TapSwap from './Component/To-do/Tapswap';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>📝 Mini To-Do List</h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
      <p>Total Tasks: {tasks.length}</p>
      <TapSwap />
    </div>
  );
}

export default App;
