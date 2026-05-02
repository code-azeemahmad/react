import { useEffect, useState } from "react";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import { ThemeContext, ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

function App() {

  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light');
  }
  const darkTheme = () => {
    setThemeMode('dark');
  }

  // how to actually change theme

  useEffect(() => {
    document.querySelector("html").classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <h1 className="bg-red-600 py-6 text-white text-3xl ">hello</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto"><Card /></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
