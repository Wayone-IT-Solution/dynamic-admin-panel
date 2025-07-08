// components/admin/Header.js
"use client";
import { FiSearch, FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-10 p-4 glass"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <FiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
              style={{ color: "var(--text-secondary)" }}
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-xl focus:outline-none"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-full relative"
            style={{ color: "var(--text-primary)" }}
          >
            <FiBell size={20} />
            <span
              className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--danger)" }}
            ></span>
          </button>

          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
            style={{
              background:
                "linear-gradient(to bottom right, var(--primary), var(--secondary))",
            }}
          >
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
