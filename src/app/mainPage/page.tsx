"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "../Components/footer";
import Animate from "../Components/animate";
import Competitions from "../Components/PrevEvents";
import MobileCompetitions from "../Components/MobilePrevEvents";
import About from "../Components/about";

const page = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isMobile, setIsMobile] = useState(false);
  // Check the window width and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1050);
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <div className="h-screen relative">
        <div className="bg-black z-40 bg-opacity-65 ">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black h-full"></div>
          <div className="fixed inset-0 z-0">
            <Image
              src="/BgMainSite.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="opacity-30"
            />
          </div>
          <div className="z-20 flex flex-col md:justify-center  items-center md:mt-0 mt-60 w-full">
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/Shaurya_Title_20255.png"
                  alt="Shaurya Logo"
                  width={600}
                  height={150}
                  className="w-[700px] h-auto object-contain items-center mt-64 filter logo-glow"
                />
                <Animate />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <About />
      </div>
      <div>
        <h1 className="text-6xl z-40 md:text-6xl mt-16 text-center font-bold  text-yellow-400 mb-8 underline underline-offset-6">
          Previous Events
        </h1>
        {isMobile ? <MobileCompetitions /> : <Competitions />}
      </div>

      <Footer />
    </div>
  );
};

export default page;
