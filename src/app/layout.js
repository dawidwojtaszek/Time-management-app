import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manage your time",
  description: "Time management app with firebase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-slate-800 text-white ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
