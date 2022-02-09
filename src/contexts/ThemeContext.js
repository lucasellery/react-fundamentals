import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState("light");

  function handleToggleTheme() {
    setTheme(prevState => prevState.theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
