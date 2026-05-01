import './App.css'
import { useState } from 'react';

function App() {
  // useState hook responsible for changing state, it does not mean updating values, the change is propagated to your ui(DOM)

  // const [variable, method] = useState(defaultValue)
  let [counter, setCounter] = useState(10);

  /* when you update the counter, setCounter method updates the counter variable displayed everywhere in the page, no dom manipulation overhead */

  // let counter = 15;  // does not reflect in UI

  const addValue = () => {
    if (counter === 20)  return;
    // counter is not incrementing, problem occurs in UI updation
    // here comes the major power of React, when and will UI update is decided by React, not us

    // counter++;

    setCounter(counter+1);
    console.log(`clicked`, counter);

    // as soon as value comes in setCounter, React being a reactive library, Reacts and automtically analyze the DOM completely to know where it has to update the value, because state has been changed, and we have to keep sync between state and UI
  }

  const removeValue = () => {
    if (counter === 0)  return;
    setCounter(counter-1);
    console.log(`clicked`, counter);
  }

  return (
    <>
      <h1>Azeem aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={removeValue}>remove value: {counter}</button>
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
