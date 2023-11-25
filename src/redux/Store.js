import { configureStore } from '@reduxjs/toolkit'
import todoSlice  from './TodoSlice/TodoSlice';

export const store = configureStore({
  reducer: {
    todo:todoSlice
},
});
