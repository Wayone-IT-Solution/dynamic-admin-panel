"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { themes, getCustomTheme } from "@/config/theme";

const ThemeContext = createContext();

const isClient = typeof window !== "undefined";

const syncThemeVariables = (config) => {
  if (!isClient) return;
  const root = document.documentElement;
  Object.entries(config).forEach(([key, value]) => {
    if (key !== "name") root.style.setProperty(`--${key}`, value);
  });
};

export const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({
    name: "light",
    config: themes.light,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme") || "light";
    const config =
      savedTheme === "custom"
        ? JSON.parse(localStorage.getItem("customTheme")) || themes.light
        : themes[savedTheme] || themes.light;

    syncThemeVariables(config);
    document.documentElement.className = savedTheme;
    setThemeState({ name: savedTheme, config });
  }, []);

  const updateTheme = (newTheme, isCustom = false) => {
    if (!isClient) return;

    const themeConfig = isCustom ? newTheme : themes[newTheme];
    setThemeState({
      name: isCustom ? "custom" : newTheme,
      config: themeConfig,
    });
    localStorage.setItem("theme", isCustom ? "custom" : newTheme);
    if (isCustom) localStorage.setItem("customTheme", JSON.stringify(newTheme));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themeState.name,
        themeConfig: themeState.config,
        changeTheme: (theme) => updateTheme(theme),
        updateCustomTheme: (config) => updateTheme(config, true),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
