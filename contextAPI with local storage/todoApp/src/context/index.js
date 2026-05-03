// all imports and exports from this line, acts as a store room

export {TodoContext, TodoProvider, useTodo} from './TodoContext.js';

// useTodo has its own context, extract todos, addTodo, deleteTodo, updateTodo and toggleComplete by filtering