import './App.css'

function App() {

  let counter = 15;

  const addValue = () => {
    // counter is not incrementing, problem occurs in UI updation
    // here comes the major power of React, when and will UI update is decided by React, not us
    counter++;
    console.log(`clicked`, counter);
  }

  return (
    <>
      <h1>Azeem aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button>remove value: {counter}</button>
      <footer>Footer: {counter}</footer>
    </>
  )
}

export default App

/*
<h2>Counter Value: {counter}</h2>
<button onClick={addValue}>Add value: {counter}</button>
<br />
<button>remove value: {counter}</button>
<footer>Footer: {counter}</footer>
// will take large amount of DOM manipulation
*/
