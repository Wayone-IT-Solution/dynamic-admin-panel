// components/admin/ThemeToggle.js
"use client";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="flex items-center justify-between">
      <span style={{ color: "var(--text-secondary)" }}>Theme</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => changeTheme("light")}
          className="p-2 rounded-lg transition-colors"
          style={{
            backgroundColor:
              theme === "light" ? "rgba(255,255,255,0.2)" : "transparent",
          }}
        >
          <FiSun size={18} />
        </button>
        <button
          onClick={() => changeTheme("dark")}
          className="p-2 rounded-lg transition-colors"
          style={{
            backgroundColor:
              theme === "dark" ? "rgba(255,255,255,0.2)" : "transparent",
          }}
        >
          <FiMoon size={18} />
        </button>
        <button
          onClick={() => changeTheme("cyberpunk")}
          className="p-2 rounded-lg transition-colors"
          style={{
            backgroundColor:
              theme === "cyberpunk" ? "rgba(255,255,255,0.2)" : "transparent",
          }}
        >
          <span className="text-sm font-bold">CP</span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
