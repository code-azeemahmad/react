import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook, link input field and copy button
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => { // for optimization
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);  // place in cache

  const copyPassToClip = useCallback(() => {
    passRef.current?.select();  // highlight the password being copied 
    // passRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);  // server has no window object in next js (server side rendering)
  }, [password]);

  // passwordGenerator();  // can't call method in this way, React controls this
  useEffect(() => { // for rerendering
    // eslint-disable-next-line react-hooks/set-state-in-effect
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-800 text-white">
      <h1 className="text-center text-lg font-semibold mb-4">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 text-white"
          readOnly
          ref={passRef}
        />
        <button
          onClick={copyPassToClip}
          className="bg-blue-600 hover:bg-blue-700 px-4 text-white"
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col gap-3 text-sm">
        
        <div className="flex items-center justify-between">
          <label>Length: {length}</label>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer w-2/3"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

// onChange is an event handler that runs when an input value changes
// useEffect is a React Hook that lets you synchronize a component with an external system.
// useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).