// ShauryaMainSite/src/app/Components/HomePage.tsx
"use client";
import { useEffect, useState } from "react";
import Footer from "./footer";

export default function MainPage() {
  const [scrollY, setScrollY] = useState(0);
  const [text, setText] = useState("");
  const fullText = "Coming Soon"; // Ensure this is defined correctly

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200); // Adjust typing speed here
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative bg-cover bg-center flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-80 h-full"></div>
      <div className="fixed inset-0 bg-[url('/mainPage2.jpg')] bg-cover opacity-30"></div>

      {/* Shaurya Logo with Glowing Effect and Flames */}
      <div className="z-20 flex justify-center w-full">
        <div className="relative">
          <img
            src="/shaurya_dark_brown-removebg-preview.png"
            alt="Shaurya Logo"
            className="w-[700px] h-auto object-contain logo-glow"
          />
        </div>
      </div>


      <Footer/>
    </div>
  );
}