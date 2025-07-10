// components/admin/Sidebar.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiUsers,
  FiShoppingBag,
  FiPackage,
  FiSettings,
  FiBarChart2,
} from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const Sidebar = () => {
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: <FiHome size={20} /> },
    { name: "Users", href: "/admin/users", icon: <FiUsers size={20} /> },
    {
      name: "Products",
      href: "/admin/products",
      icon: <FiShoppingBag size={20} />,
    },
    { name: "Orders", href: "/admin/orders", icon: <FiPackage size={20} /> },
    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: <FiBarChart2 size={20} />,
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: <FiSettings size={20} />,
    },
  ];

  return (
    <aside
      className="fixed h-screen p-6 flex flex-col z-20 w-[var(--sidebar-width)] glass"
      style={{ borderRight: "1px solid var(--border)" }}
    >
      <div className="px-2 mb-10">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span
            style={{
              background:
                "linear-gradient(to right, var(--primary), var(--secondary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NeoAdmin
          </span>
          <span className="text-xs text-white px-2 py-1 rounded-full bg-primary">
            PRO
          </span>
        </h1>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
                style={{
                  color:
                    pathname === item.href ? "#fff" : "var(--text-secondary)",
                  backgroundColor:
                    pathname === item.href ? "var(--primary)" : "transparent",
                }}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <div className="p-4 rounded-xl mb-4 glass">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl glass">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
            style={{
              background:
                "linear-gradient(to bottom right, var(--primary), var(--secondary))",
            }}
          >
            A
          </div>
          <div>
            <p className="font-medium">Admin User</p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              admin@example.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
