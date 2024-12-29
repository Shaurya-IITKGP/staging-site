"use client";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import EsportsPage from "./esports";


const Footer = dynamic(() => import('./footer'));
const Animate = dynamic(() => import('./animate'));
const Competitions = dynamic(() => import('./competition'));
const About = dynamic(()=>import("./about"));
const AnimatedNavbar = dynamic(() => import('./Navbar'));
const Esports = dynamic(() => import('./esportsAnimation'), {
  loading: () => <div className="animate-pulse bg-gray-700 h-96"></div>
});

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


       <div className="z-20 ">
        <Competitions/>

        {/* <Esports/> */}
       <EsportsPage/>
        </div>
      
      </div>
      <div className="mb-5">
        {/*About Us */}
        <About/>
      </div>
      <div>
        <Footer />
      </div>
      
    </>
  );
}
