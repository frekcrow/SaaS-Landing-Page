import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const pingFont = localFont({
  src: "../public/fonts/Ping-Bold.otf",
  variable: "--font-ping",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aura Clinical - Practice OS",
  description: "The High-Performance Operating System for Modern Practices",
};

import { Providers } from "./providers";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${pingFont.variable} ${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
