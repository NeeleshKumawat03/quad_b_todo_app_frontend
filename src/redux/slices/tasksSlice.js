import { createSlice } from "@reduxjs/toolkit";


// create slice it contain name, initialstate and reducers

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
      tasks: []
    },
    reducers: {
      // Add Task reducers -> adds a task
      addTask: (state, action) => {
        state.tasks.push(action.payload);
      },

      // Delete task reducer -> deleted a task
      deleteTask: (state, action) => {
        
        // filters a task which has to deleted
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      },

      // edit task reducer edits a task
      editTask: (state, action) => {
        const { id, newName } = action.payload;

        // find a task via Id and edit it
        const existingTask = state.tasks.find(task => task.id === id);
        if (existingTask) {
          existingTask.name = newName;
        }
      },

      //  handle task completion status
      toggleTaskCompletion: (state, action) => {
        const { id } = action.payload;

        // find a task and then handles completed status
        const existingTask = state.tasks.find(task => task.id === id);
        if (existingTask) {
          existingTask.completed = !existingTask.completed;
        }
      }
    }
  });
  
  // exports 
  export const { addTask, deleteTask, editTask, toggleTaskCompletion } = tasksSlice.actions;
  
  export default tasksSlice.reducer;