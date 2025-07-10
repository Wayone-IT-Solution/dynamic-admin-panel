// app/layout.js
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
