import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { MagneticCursor } from "@/components/MagneticCursor";
import { LenisProvider } from "@/components/LenisProvider";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Haval Motors | Experience Luxury",
  description: "Official Haval dealership in Pakistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ScrollProgressBar />
        <MagneticCursor />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
