import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {

    // define state for individual todo
    const [todo, setTodo] = useState('');
    // addTodo functionality is defined in App.jsx, addTodo is injected through TodoProvider, get back that functionality from useTodo(TodoContext.js), not useContext. no drilling
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todo)  return;
        // addTodo(todo);   // pass an object in addTodo in App.jsx
        // addTodo({id: Date.now, todo: todo, completed: false});
        addTodo({todo, completed: false});  // more optimized
        setTodo('');    // clean up
    }

  return (
    <form className="flex" onSubmit={add}>
      <input
        value={todo}  // wiring of input with state
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
