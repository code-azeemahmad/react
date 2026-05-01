import Code from './Code.jsx'
function App() {

  return (  // only single jsx element can be returned
    <>    
      <Code />
      <h1>Code-Azeem | Chai</h1>
      <h3>this is a smaple file</h3>
      <p>test para</p>
    </> // fragment
  )
}

export default App

/* In JSX, React decides:
  --> lowercase → HTML element
  --> Capitalized → Custom React component */

// Jsx components name should be capitalized(PascalCase)

