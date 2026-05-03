/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // takes values from here in every component
    todos: [
        {
            id: 1, 
            todo: 'todo message',
            completed: false, 
        },
    ],
    // write functionalities of methods in App.jsx
    addTodo: (todo) => {

    },
    updateTodo: (id, todo) => {

    },
    deleteTodo: (id) => {

    },
    toggleComplete: (id) => {

    },
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;

// always provide context to useContext
// context api is for mid level projects, for bigger projects use RTK