import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="container ">
      <h1>To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
