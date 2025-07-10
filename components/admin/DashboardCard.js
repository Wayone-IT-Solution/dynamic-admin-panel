// Example for DashboardCard.js
"use client";
import { FiArrowUpRight } from "react-icons/fi";

const DashboardCard = ({ title, value, change, icon }) => {
  return (
    <div
      className="p-6 rounded-xl shadow-sm transition-all"
      style={{
        backgroundColor: "var(--card)",
        border: "1px solid var(--border)",
      }}
    >
      <div className="flex justify-between items-start">
        <div>
          <p
            className="text-sm mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            {title}
          </p>
          <h3
            className="text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            {value}
          </h3>
        </div>
        <div
          className="p-3 rounded-lg"
          style={{
            backgroundColor: "var(--background)",
            color: "var(--primary)",
          }}
        >
          {icon}
        </div>
      </div>
      {change && (
        <div
          className="mt-4 flex items-center"
          style={{ color: "var(--success)" }}
        >
          <FiArrowUpRight className="mr-2" />
          <span className="text-sm">{change}</span>
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
