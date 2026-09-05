import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Providers } from "./providers";

const pingBold = localFont({
  src: "../public/fonts/Ping-Bold.otf",
  variable: "--font-ping-bold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aura Clinical",
  description: "High-Performance Operating System for Modern Practices",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${pingBold.variable} ${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
