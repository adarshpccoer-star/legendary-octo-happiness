import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "@/component/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/component/Footer";
import SmoothScrollProvider from "@/component/SmoothScrollProvider";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WoodCraft | Premium Furniture",
  description: "Modern furniture for your home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "font-sans", inter.variable)}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#E9EAE4]`}>
        <Navbar />
        <SmoothScrollProvider>
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}