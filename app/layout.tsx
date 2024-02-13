import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lewis Campbell",
  description: "Lewis Campbell software developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full bg-slate-900 text-gray-400" lang="en">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  );
}
