import "./globals.css";
import { Inter, Orbitron } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "400",
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
      <Analytics />
    </html>
  );
}
