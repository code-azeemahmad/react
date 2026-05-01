import "./App.css";
import Card from "./components/Card";

function App() {
  // props makes a component reuseable. Once a card has been made, the card should be wrapped in a component and can be used again and again. Place its html, css, js in one component
  // React says don't segregate things technically, segregate things functionally

  // let myObj = {
  //   username: 'azeem',
  //   email: 'azeem@gmail.com',
  //   password: 'azeem123',
  // }
  // let myArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className="bg-red-600 text-white p-4 rounded-xl">Tailwind CSS</h1>
      <div className="flex gap-10">
        <Card username='Azeem' btnText='click me' />
        {/* <Card someObj={myObj}/>
        <Card someArr={myArr}/> */}
        <Card username='Omar' btnText='visit me' />
        <Card username='Shariq' btnText='hover me' />
      </div>
    </>
  );
}

export default App;

// <Card someObj=myObj myArr=[1, 2, 3] myObj/>  // not allowed, must be passed in a variable
