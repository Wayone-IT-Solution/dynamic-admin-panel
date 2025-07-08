// context/ThemeContext.js
"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { themes } from "@/config/theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [themeConfig, setThemeConfig] = useState(themes.light);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const customTheme = localStorage.getItem("customTheme");

    if (savedTheme === "custom" && customTheme) {
      try {
        setThemeConfig(JSON.parse(customTheme));
      } catch (e) {
        console.error("Invalid custom theme, resetting to light");
        setThemeConfig(themes.light);
        localStorage.setItem("theme", "light");
      }
    } else if (themes[savedTheme]) {
      setThemeConfig(themes[savedTheme]);
    } else {
      setThemeConfig(themes.light);
      localStorage.setItem("theme", "light");
    }

    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const changeTheme = (newTheme) => {
    if (newTheme === "custom") {
      const customTheme = localStorage.getItem("customTheme");
      if (customTheme) {
        try {
          setThemeConfig(JSON.parse(customTheme));
        } catch (e) {
          console.error("Invalid custom theme, resetting to light");
          setThemeConfig(themes.light);
          newTheme = "light";
        }
      } else {
        setThemeConfig(themes.light);
        newTheme = "light";
      }
    } else if (themes[newTheme]) {
      setThemeConfig(themes[newTheme]);
    } else {
      setThemeConfig(themes.light);
      newTheme = "light";
    }

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeConfig,
        changeTheme,
        setThemeConfig,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
