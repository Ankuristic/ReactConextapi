import { useContext } from "react";
import { languageContext } from "./languageContext";
import { themeContext } from "./themeContext";


export const Navbar = () => {
  // get theme and lanauge contexts here

  const {theme, setTheme} =useContext(themeContext)
  const {langauage,setlanguage}=useContext(languageContext)

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    // Set language based on theme
    setlanguage(theme === 'light' ? 'kannada' : 'hindi');
  };


  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={toggleTheme}>dark theme</button>
        
        <span> {language} </span>
      </div>
    </div>
  );
};
