import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {

  return (
    // provider should be applied as in context api, implemented frequently in main.jsx
    <>
      <h1 className=''>Learn about redux toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  );
} 

export default App
