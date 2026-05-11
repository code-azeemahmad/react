// todoSlice is a naming convention
// slices almost bigger version of reducers in rtk
 
// nanoid generates unique id
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "hello world",
        },
        {},
    ]
};

export const todoSlice = createSlice({
    name: "todo",   // property name defined in rtk
    initialState,
    reducers: {   // takes properties and functions
        // addTodo: (state, action) => {},
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,   // payload is an object
            }
            state.todos.push(todo); // update state
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },   // here comes the difference btw context api and rtk. functions were declared, not defined but in rtk functions definition are being written
    },
});

// export individual functionality (reducers)
export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;   // store needs awareness about all reducers


// addTodo: (state, action) => {}, always have access to state and action
// state gives access to current values in initial state which is gonna change 
// action handles values such as id which comes to remove todos