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
  },
};

export const getCustomTheme = () => {
  if (typeof window === "undefined") return null;
  try {
    const customTheme = localStorage.getItem("customTheme");
    return customTheme ? JSON.parse(customTheme) : null;
  } catch (e) {
    return null;
  }
};
