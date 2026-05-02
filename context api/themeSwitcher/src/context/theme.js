import { createContext, useContext } from "react";

export const ThemeContext = createContext({   // can be given a default value
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// custom hook
export default function useTheme() {
    return useContext(ThemeContext);
}