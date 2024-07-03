import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTaskCompletion } from '../redux/slices/tasksSlice';
import './TaskList.css';

const TaskList = () => {
  // fetch tasks from taskSlices using useSelector
  const tasks = useSelector(state => state.tasks.tasks);
  // console.log(tasks)
  const dispatch = useDispatch(); // useDispatch is used to call reducers present in tasksSlices
  const [editMode, setEditMode] = useState({ id: null, newName: '' });

  // task Delete function -> deletes a task
  const handleDeleteTask = taskId => {
    dispatch(deleteTask(taskId));
  };

  // edit task function -> call editTask reduces and can edit taskName
  const handleEditTask = () => {
    dispatch(editTask({ id: editMode.id, newName: editMode.newName }));
    setEditMode({ id: null, newName: '' });
  };

  // taskCompletion Function -> change task completion status
  const handleToggleCompletion = taskId => {
    dispatch(toggleTaskCompletion({ id: taskId }));
  };

  return (
    <div className="task-list">
      <ul>
        {tasks.map(task => (
          <li key={task.id}>

          {/* pop up aries for a particular task when edit mode is enabled */}

            {editMode.id === task.id ? (
              <input
                type="text"
                value={editMode.newName}
                onChange={e => setEditMode({ ...editMode, newName: e.target.value })}
              />
            ) : (
                <>
                {/* lists a tasks of a list */}
                
                    <span className={task.completed ? "completed" : ""}>{task.name}</span>
                    <button
                        className={task.completed ? "complete" : "incomplete"}
                     onClick={() => handleToggleCompletion(task.id)}>
                    {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                    </button>
                </>
            )}
            {editMode.id === task.id ? (
              <button className="edit-btn" onClick={handleEditTask}>Save</button>
            ) : (
              <>
                <button className="edit-btn" onClick={() => setEditMode({ id: task.id, newName: task.name })}>Edit</button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
