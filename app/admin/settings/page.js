// app/admin/settings/page.js
"use client";
import { useState, useEffect } from "react";
import { FiSave, FiRefreshCw, FiDroplet } from "react-icons/fi";
import ColorPicker from "@/components/ui/ColorPicker";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/config/theme";

// Error boundary component
const withErrorBoundary = (WrappedComponent) => {
  return function ErrorBoundary(props) {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      const errorHandler = (error) => {
        console.error("Error caught by boundary:", error);
        setHasError(true);
      };

      window.addEventListener("error", errorHandler);
      return () => window.removeEventListener("error", errorHandler);
    }, []);

    if (hasError) {
      return (
        <div className="p-6 text-center text-danger">
          <h2 className="text-xl font-bold mb-2">Component Error</h2>
          <p>
            Failed to render this component. Please check the console for
            details.
          </p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

const SettingsPageContent = () => {
  const { theme, themeConfig, changeTheme, setThemeConfig } = useTheme();
  const [customTheme, setCustomTheme] = useState({ ...themeConfig });

  useEffect(() => {
    setCustomTheme({ ...themeConfig });
  }, [themeConfig]);

  const handleColorChange = (key, value) => {
    setCustomTheme((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    const newTheme = { ...customTheme, name: "custom" };
    localStorage.setItem("customTheme", JSON.stringify(newTheme));
    setThemeConfig(newTheme);
    changeTheme("custom");
    alert("Theme saved successfully!");
  };

  const resetToDefault = () => {
    setCustomTheme({ ...(themes[theme] || themes.light) });
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Theme Settings</h1>
        <p style={{ color: "var(--text-secondary)" }}>
          Customize the look and feel of your dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="card lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="p-3 rounded-xl"
              style={{
                background: "rgba(139, 92, 246, 0.1)",
                color: "var(--accent)",
              }}
            >
              <FiDroplet size={24} />
            </div>
            <h2 className="text-xl font-semibold">Custom Theme</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.keys(customTheme)
              .filter((key) => key !== "name")
              .map((key) => (
                <div key={key} className="flex flex-col">
                  <label
                    className="mb-2 capitalize"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {key}
                  </label>
                  <ColorPicker
                    color={customTheme[key]}
                    onChange={(color) => handleColorChange(key, color)}
                  />
                </div>
              ))}
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-xl text-white font-medium flex items-center gap-2"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <FiSave size={18} />
              Save Theme
            </button>
            <button
              onClick={resetToDefault}
              className="px-4 py-2 rounded-xl border flex items-center gap-2"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <FiRefreshCw size={18} />
              Reset
            </button>
          </div>
        </div>

        <div className="card flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-xs rounded-xl overflow-hidden shadow-lg">
            <div
              className="h-8 flex items-center px-3"
              style={{ background: customTheme.primary }}
            >
              <div className="w-2 h-2 rounded-full bg-white/50 mr-1"></div>
              <div className="w-2 h-2 rounded-full bg-white/50 mr-1"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
            <div className="p-4" style={{ background: customTheme.background }}>
              <div
                className="h-6 rounded mb-3"
                style={{ background: customTheme.card }}
              ></div>
              <div
                className="h-4 rounded w-3/4 mb-2"
                style={{ background: customTheme.textPrimary }}
              ></div>
              <div
                className="h-4 rounded w-full mb-2"
                style={{ background: customTheme.textSecondary }}
              ></div>
              <div
                className="h-4 rounded w-5/6"
                style={{ background: customTheme.textSecondary }}
              ></div>
              <div className="mt-4 flex gap-2">
                <div
                  className="h-8 rounded-lg flex-1"
                  style={{ background: customTheme.primary }}
                ></div>
                <div
                  className="h-8 rounded-lg flex-1"
                  style={{ background: customTheme.secondary }}
                ></div>
              </div>
            </div>
          </div>
          <p
            className="mt-6 text-center"
            style={{ color: "var(--text-secondary)" }}
          >
            Preview of your custom theme
          </p>
        </div>
      </div>
    </div>
  );
};

// Wrap the component with error boundary
const SettingsPage = withErrorBoundary(SettingsPageContent);
export default SettingsPage;
