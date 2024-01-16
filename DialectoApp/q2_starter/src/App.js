import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { languageContext } from "./languageContext";
import { themeContext } from "./themeContext";

// get theme and language contexts here

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    // <languageContext.Provider value={{ item, setItem }}>
      // <themeContext.Provider value={{ total, setTotal }}></themeContext.Provider>
    <div className={`App ${theme}`}>
      
      <Navbar />
      <Home />
    </div>
    {/* <languageContext.Provider/>
    <themeContext.Provider/> */}
  );
}
