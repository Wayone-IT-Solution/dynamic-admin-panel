// Example for DashboardCard.js
"use client";
import { FiArrowUpRight } from "react-icons/fi";

const DashboardCard = ({ title, value, change, icon }) => {
  return (
    <div className="card">
      <div className="flex justify-between items-start">
        <div>
          <p className="mb-1" style={{ color: "var(--text-secondary)" }}>
            {title}
          </p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div
          className="p-3 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.1)",
            color: "var(--primary)",
          }}
        >
          {icon}
        </div>
      </div>

      {change && (
        <p
          className="mt-4 flex items-center text-sm"
          style={{ color: "var(--success)" }}
        >
          <FiArrowUpRight className="mr-1" />
          <span>{change}</span>
        </p>
      )}
    </div>
  );
};

export default DashboardCard;
