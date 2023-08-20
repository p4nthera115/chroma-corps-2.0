"use client";

import "./globals.css";
import { Inter, Orbitron } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
  variable: "--orbitron",
});

export const metadata = {
  title: "Chroma Corps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable} `}>
        {children}
      </body>
    </html>
  );
}
