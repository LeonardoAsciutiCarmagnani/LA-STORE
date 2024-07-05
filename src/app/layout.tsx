import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "L.A Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="bg-zinc-950 antialiased h-screen">{children}</body>
    </html>
  );
}
