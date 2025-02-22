import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oluwarotimi's portfolio",
  description: "A portfolio of Omoyeni Taiwo Samuel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#001433]  `}
      >

        <main className="overflow-hidden">
          {/* Navbar stays fixed at the top */}
          <div className="sticky  top-0 z-10">
            <Navbar />
          </div>

          <div className="flex-row h-[90vh]  screen hide overflow-hidden justify-between flex">
            <LeftSideBar />

            {/* Scrollable content with fixed height */}
            <div className="w-full h-full flex  items-center flex-col   overflow-y-auto ">
              {children}
            </div>

            <div>

              <RightSideBar />
            </div>

          </div>
        </main>

      </body>
    </html>
  );
}
