import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

import { cn } from "@/lib/utils";
import Navbar from "./components/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pawan Paliwal - Portfolio",
  description: "fullstack developer",
  icons:{
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"]
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-customFont antialiased ",
          fontSans.variable
        )}
      >
        <div className="w-full min-h-screen bg-[#e9c46a]">
          <Navbar />
          <div className="">{children}</div>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
