import type { Metadata } from "next";
import { Recursive  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const recursive  = Recursive ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/snake-1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">  
      <body  className={recursive.className}>
        <Navbar />
        <main  style={{backgroundImage: "url(./bgCobra.png)"}} className="  min-h-[100vh] ">
        {children}
        </main>
        </body>
    </html>
  );
}
