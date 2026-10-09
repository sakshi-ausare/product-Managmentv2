import { createContext, useState } from "react";
import App from "../../App";

 const ThemeContext = createContext();

export function ThemeProvider() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };


  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? "dark" : "light"}
        style={{ backgroundColor: darkMode ? "black" : "white", color: darkMode ? "white" : "black", minHeight: "100vh",
      width: "100%"}} >
        <App />
      </div>
    </ThemeContext.Provider>
  );
}
export default ThemeContext;

 


 
  