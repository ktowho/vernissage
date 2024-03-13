import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import localFont from '@next/font/local'

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
        <Hero />
        <Hero />
      </body>
    </html>
  );
}
