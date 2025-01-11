import  { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "darktheme" : "light";
    setTheme(newTheme);
  };

  return (
   
    <div className=" flex justify-center items-center ">
    <button className="text-xl" onClick={toggleTheme}>
      {theme === "light" ? <FaMoon /> : <FaSun />} 
     
    </button>
  </div>
    
  );
};

export default ThemeToggle;
