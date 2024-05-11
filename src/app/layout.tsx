/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CaseCobra",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="icon" href="/thumbnail.png" />
      </Head>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />

          <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
            <div className="flex-1 flex flex-col h-full">{children}</div>
            <Footer />
          </main>

          <Toaster />
        </body>
      </html>
    </>
  );
}
