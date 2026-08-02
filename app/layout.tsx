import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Sandip Das | Full Stack Developer',
  description: 'React, Next.js, FastAPI, and AI-powered application developer.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior='smooth'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full bg-background text-foreground'>
        <div className='fixed inset-0 -z-10 overflow-hidden'>
          <div className='absolute left-[-10%] top-[-10%] h-105 w-105 rounded-full bg-blue-500/10 blur-3xl' />
          <div className='absolute right-[-10%] top-[20%] h-90 w-90 rounded-full bg-violet-500/10 blur-3xl' />
        </div>

        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
