import Code from './Code.jsx'
function App() {
  // how to inject varaibles becuase at the end, it is js
  const username = 'chai aur code';

  return (
    <>    
      <Code />
      <h1>Code-Azeem | {username}</h1>
      <h3>this is a smaple file</h3>
      <p>test para</p>
    </>
  )
}

export default App

/*
{username} is called evaluated expression, final outcome of js which has been evaluated,
you can't simply write js in evaluated expression like {if(true) continue}
write js inside or outside function but not in return expression.
Components at the end are converted into objects and objects don't allow writing business logic in them. Have you ever seen?
obj = {
  if(true)  continue;
}
*/

