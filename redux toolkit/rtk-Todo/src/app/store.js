// you can place store on anywhere, its totally opinionated

import { configureStore } from "@reduxjs/toolkit";  // it comes from core redux
import todoReducer from '../features/todo/todoSlice.js';

// // takes object, not ready yet, ready
export const store = configureStore({
    reducer: todoReducer,
});    