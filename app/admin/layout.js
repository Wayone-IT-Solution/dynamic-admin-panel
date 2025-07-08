// app/admin/layout.js
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function AdminLayout({ children }) {
  return (
    <div
      className="flex min-h-screen"
      style={{ backgroundColor: "var(--background)" }}
    >
      <Sidebar />

      <div className="flex-1 flex flex-col ml-[var(--sidebar-width)]">
        <Header />

        <main className="flex-1 p-6">
          <div className="max-w-screen-2xl mx-auto">{children}</div>
        </main>
      </div>

      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full opacity-20 animate-spin-slow"
          style={{
            background:
              "linear-gradient(to right, var(--primary), var(--accent))",
            filter: "blur(30px)",
          }}
        />
        <div
          className="absolute -bottom-[400px] -right-[400px] w-[800px] h-[800px] rounded-full opacity-20 animate-spin-slow"
          style={{
            background:
              "linear-gradient(to right, var(--secondary), var(--accent))",
            filter: "blur(30px)",
            animationDirection: "reverse",
          }}
        />
      </div>
    </div>
  );
}
