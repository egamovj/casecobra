/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

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
      <link rel="icon" href="/thumbnail.png"/>
    </Head>
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
    </>
  );
}
