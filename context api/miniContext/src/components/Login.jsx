import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password)
    }
  return (
    // control the values
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />    
        <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

/*
"We are taking input from user… so why useState?"
React does NOT automatically track input values.
    HTML → tracks input itself
    React → does NOT (unless you tell it)
With useState (React-controlled input)
User types → onChange fires → setUsername updates state → React re-renders → value updated
This is called controlled component.
*/

// Why use value and onChange?
// To create controlled components where React fully manages input state and UI synchronization.