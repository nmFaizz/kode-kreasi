import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const tangoSans = localFont({
  src: "./fonts/TangoSans.ttf",
  variable: "--font-tango-sans",
  weight: "800",
});
const utendo = localFont({
  src: "./fonts/Utendo-Regular.ttf",
  variable: "--font-utendo",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Kode Kreasi | Platform Belajar IT",
    template: "%s | Kode Kreasi",
  },
  description: "Kode Kreatif adalah platform belajar IT yang menyediakan materi dan latihan pemrograman.",
  icons: [
    {
      rel: "icon",
      url: "/logo-kk-notext.png",
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tangoSans.variable} ${utendo.variable} antialiased bg-white-soft`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
