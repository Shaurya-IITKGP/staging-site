import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import AnimatedNavbar from "./Components/Navbar";

import { Poppins } from 'next/font/google';
import MainNavBar from "./Components/MainNavBar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shaurya IIT KGP",
  description: "Sports Fest Of Indian Institute of Technology Kharagpur",
  keywords: "Shaurya, Campus Ambassador, Career Growth, Leadership, Student Programs , IIT Kharagpur , IIT KGP , IIT kgp,Indian Institute of Technology Kharagpur",
  openGraph: {
    type: 'website',
    url: 'https://shauryaiitkgp.in',
    title: "Shaurya IIT KGP",
    description: "Sports Fest Of Indian Institute of Technology Kharagpur"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
      >
        <MainNavBar /> {/* Navbar */}
        {children} {/* Page content */}
      </body>
    </html>
  );
}
