/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
useState;

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // setTodos(todo); // overwrite all existing todos
    // we have to make todo, beacuse todo is an object
    // setTodos((prev) => [todo, ...prev]);  // access of old array, spread old values and insert new one
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
  };

  const updateTodo = (id, todo) => {
    // map provides individual todos, each todo is an object, each object has an id
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
    // if given id matches with prevTodo(individual todo), update todo. Otherwise, remain prevTodo
  };

  const deleteTodo = (id) => {
    // return new array without todo having given id
    setTodos((prev) => prev.filter((todo) => (todo.id !== id)));
  };

  const toggleComplete = (id) => {
    // Object syntax must be key: value. Not !prevTodo.completed, this is just a key
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)));
  };

  // when app loads for the first time, which method queries local storage to extract values and insert in todos
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos')); // return value in string, but we need in json
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // add todos in local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); // state
  }, [todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <h1 className="text-bold text-center text-3xl bg-red-700 text-white py-3">
        Todo App with complexity introduced
      </h1>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

// TodoProvider must provide values, value={{}} // detructuring
