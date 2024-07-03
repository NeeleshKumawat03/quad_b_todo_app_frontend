import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/tasksSlice';
import './TaskInput.css';

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  // handle Add Task Function (it calls addTask function which is available at redux taskSslice)
  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      dispatch(addTask({ id: Date.now(), name: taskName })); // make object having id and task name
      setTaskName(taskName);
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
