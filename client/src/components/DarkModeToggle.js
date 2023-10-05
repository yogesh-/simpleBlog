import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    // add or remove dark class from <html> based on isDarkMode
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      className="px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <MdOutlineLightMode color="white" /> : <MdDarkMode />}
    </button>
  );
}

export default DarkModeToggle;
