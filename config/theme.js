// config/theme.js
export const themes = {
  light: {
    name: "light",
    primary: "#6366f1",
    secondary: "#f97316",
    background: "#f8fafc",
    card: "#ffffff",
    textPrimary: "#0f172a",
    textSecondary: "#64748b",
    border: "#e2e8f0",
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
    accent: "#8b5cf6",
  },
  dark: {
    name: "dark",
    primary: "#818cf8",
    secondary: "#fb923c",
    background: "#0f172a",
    card: "#1e293b",
    textPrimary: "#f1f5f9",
    textSecondary: "#94a3b8",
    border: "#334155",
    success: "#34d399",
    warning: "#fbbf24",
    danger: "#f87171",
    accent: "#a78bfa",
  },
  cyberpunk: {
    name: "cyberpunk",
    primary: "#ff00c8",
    secondary: "#00f7ff",
    background: "#0a0a18",
    card: "#161636",
    textPrimary: "#e0e0ff",
    textSecondary: "#a0a0d0",
    border: "#30305a",
    success: "#00ff9d",
    warning: "#ffd700",
    danger: "#ff0055",
    accent: "#bd00ff",
  },
};

// Get default custom theme
export const getCustomTheme = () => {
  try {
    const customTheme = localStorage.getItem("customTheme");
    if (customTheme) {
      return JSON.parse(customTheme);
    }
    return { ...themes.light, name: "custom" };
  } catch (e) {
    return { ...themes.light, name: "custom" };
  }
};
