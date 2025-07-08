// app/admin/page.js
import DashboardCard from "@/components/admin/DashboardCard";
import {
  FiUsers,
  FiShoppingBag,
  FiDollarSign,
  FiActivity,
} from "react-icons/fi";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "12,361",
      change: "+12.4%",
      icon: <FiUsers size={20} />,
    },
    {
      title: "Total Revenue",
      value: "$86,491",
      change: "+8.2%",
      icon: <FiDollarSign size={20} />,
    },
    {
      title: "Total Products",
      value: "2,491",
      change: "+4.5%",
      icon: <FiShoppingBag size={20} />,
    },
    {
      title: "Sessions",
      value: "34,872",
      change: "+3.1%",
      icon: <FiActivity size={20} />,
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p style={{ color: "var(--text-secondary)" }}>
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--border-radius)",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="p-4 flex items-start"
                style={{
                  borderBottom: i < 4 ? "1px solid var(--border)" : "none",
                }}
              >
                <div
                  className="p-2 rounded-xl mr-3"
                  style={{
                    background: "rgba(99, 102, 241, 0.1)",
                    color: "var(--primary)",
                  }}
                >
                  <FiUsers />
                </div>
                <div>
                  <p className="font-medium">New user registered</p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    John Doe joined the platform
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    2 hours ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <div className="space-y-4">
            <div
              className="flex items-center justify-between pb-4"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <p style={{ color: "var(--text-secondary)" }}>Active Users</p>
              <p className="font-medium">4,210</p>
            </div>
            <div
              className="flex items-center justify-between pb-4"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <p style={{ color: "var(--text-secondary)" }}>Pending Orders</p>
              <p className="font-medium">128</p>
            </div>
            <div
              className="flex items-center justify-between pb-4"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <p style={{ color: "var(--text-secondary)" }}>Conversion Rate</p>
              <p className="font-medium">24.8%</p>
            </div>
            <div className="flex items-center justify-between">
              <p style={{ color: "var(--text-secondary)" }}>Avg. Session</p>
              <p className="font-medium">4m 12s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
