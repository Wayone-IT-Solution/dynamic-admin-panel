// components/ui/ColorPicker.js
"use client";
import { useState, useRef, useEffect } from "react";

const ColorPicker = ({ color, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);

  const presetColors = [
    "#6366f1",
    "#f97316",
    "#10b981",
    "#ef4444",
    "#8b5cf6",
    "#818cf8",
    "#fb923c",
    "#34d399",
    "#f87171",
    "#a78bfa",
    "#ff00c8",
    "#00f7ff",
    "#00ff9d",
    "#ff0055",
    "#bd00ff",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={pickerRef}>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setShowPicker(!showPicker)}
      >
        <div
          className="w-8 h-8 rounded-lg border"
          style={{
            backgroundColor: color,
            borderColor: "var(--border)",
          }}
        />
        <span className="text-sm font-mono">{color}</span>
      </div>

      {showPicker && (
        <div
          className="absolute z-10 mt-2 p-4 rounded-xl shadow-lg w-64"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="grid grid-cols-5 gap-2 mb-4">
            {presetColors.map((preset) => (
              <div
                key={preset}
                className="w-6 h-6 rounded cursor-pointer border"
                style={{
                  backgroundColor: preset,
                  borderColor: "var(--border)",
                }}
                onClick={() => {
                  onChange(preset);
                  setShowPicker(false);
                }}
              />
            ))}
          </div>

          <input
            type="color"
            value={color}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-10 cursor-pointer"
          />
          <input
            type="text"
            value={color}
            onChange={(e) => onChange(e.target.value)}
            className="w-full mt-2 p-2 rounded-lg text-sm"
            style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
