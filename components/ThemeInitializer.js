// components/ThemeInitializer.js
"use client";
import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeInitializer() {
  const { changeTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme = savedTheme || (systemDark ? "dark" : "light");
    changeTheme(initialTheme);
  }, [changeTheme]);

  return null;
}
