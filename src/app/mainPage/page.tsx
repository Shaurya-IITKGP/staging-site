"use client"
import React, { useState, useEffect } from 'react';
import NewNavbar from '../Components/NewLaptopNavbar';
import MainNavBar from '../Components/MainNavBar';
import Image from 'next/image';
import Footer from '../Components/footer';
import Animate from '../Components/animate';

const page = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolling down or up
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      // Update the last scroll position
      setLastScrollY(window.scrollY);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <div className="h-screen relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black h-full"></div>

        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/mainPage2.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>

        {/* Main Navigation Bar */}
        <div className={`transition-all duration-300 ${showNavbar ? 'opacity-100' : 'opacity-0'}`}>
          <MainNavBar />
        </div>

        {/* Logo and Animation */}
        <div className="z-20 flex flex-col md:justify-center md:items-start items-center md:mt-0 mt-60 w-full">
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default page;
