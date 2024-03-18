import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Projects from "./components/Projects";
import Artists from "./components/Artists";
import Highlights from "./components/Highlights";
import JoinUs from "./components/JoinUs";

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
        <Projects />
        <Highlights />
        <Artists />
        <JoinUs />
    </body>
    </html >
  );
}
