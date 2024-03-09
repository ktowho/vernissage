import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
