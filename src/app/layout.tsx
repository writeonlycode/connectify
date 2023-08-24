import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Connectify",
  description:
    "Connectify is a cutting-edge social media platform designed to bring people together and foster meaningful connections in today's digital world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
