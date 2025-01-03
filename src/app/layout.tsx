import type { Metadata } from "next";
import "./globals.css";

import {Inter as FontSans} from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import {cn} from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: "Clashing App",
  description: "Get your audience voting on the best of two options."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen  font-sans antialiased bg-slate-50",
          fontSans.variable
        )}
      >
        {children}
        <Toaster richColors position="top-right"/>
      </body>
    </html>
  );
}
