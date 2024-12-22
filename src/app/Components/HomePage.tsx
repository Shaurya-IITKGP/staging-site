"use client";
import { useEffect, useState } from "react";
import Footer from "./footer";
import Animate from "./animate";
import Image from "next/image";

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
    <>
      <div className="min-h-screen relative bg-cover bg-center flex flex-col overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity- h-full"></div>
        <div className="fixed inset-0 z-0">
          <Image
            src="/mainPage2.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>

        {/* Shaurya Logo with Glowing Effect and Flames */}
        <div className="z-20 flex flex-col md:justify-center md:items-center md:mt-0 mt-60 w-full">
          <div className="relative">
            <Image
              src="/Shaurya_Title_20255.png"
              alt="Shaurya Logo"
              width={700}
              height={200}
              className="w-[700px] h-auto object-contain items-center mt-64 filter logo-glow"
            />
          </div>
          <div className="relative mt-48 mb-32">
            <Animate />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
