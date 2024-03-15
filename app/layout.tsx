import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import localFont from '@next/font/local'
import Projects from "./components/Projects";

export const metadata: Metadata = {
  title: "vernissage",
  description: "Platform for contemporary digital art",
};

const neueMachinaRegularFont = localFont({
  src: '../public/fonts/NeueMachina-Regular.woff2',
  display: 'swap',
  variable: '--font-neueMachina-Regular'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="hide-scrollbar">
        <Navbar />
        <Hero font={neueMachinaRegularFont}/>
        <Projects font={neueMachinaRegularFont}/>
      </body>
    </html>
  );
}
