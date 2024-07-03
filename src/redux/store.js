import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';

// if data is available at localstorage it can retrive otherwise default value is {}
const preloadedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
  preloadedState
});

// it is changle listener so whenever redux state is getting changed it set them into the local storage
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
