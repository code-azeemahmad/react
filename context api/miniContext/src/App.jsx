import './App.css'
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';
function App() {

  return (
    <UserContextProvider>
      <h1>How to send and access data using useContext hook</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App

// context can be injected before and after a project
// almost all react projects need state manageenm
