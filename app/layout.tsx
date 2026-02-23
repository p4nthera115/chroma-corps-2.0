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
      <head>
      <script defer src="https://cloud.umami.is/script.js" data-website-id="1e936ea3-2df2-4324-aead-b00d0c5bc705"></script>
      </head>
      <body className={`${inter.className} ${orbitron.variable} `}>
        {children}
      </body>
      <Analytics />
    </html>
  );
}
