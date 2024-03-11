import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export const metadata: Metadata = {
  title: "vernissage",
  description: "Platform for contemporary digital art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="hide-scrollbar">
        <Navbar />
        <Main />
        {children}
      </body>
    </html>
  );
}
