import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NewNavbar = () => {
    const [isTab,setIsTab] = useState(false);
        // Check the window width and update state
    useEffect(() => {
      const handleResize = () => {
        setIsTab(window.innerWidth < 1138);
      };
  
      // Initial check
      handleResize();
  
      // Listen for window resize
      window.addEventListener("resize", handleResize);
  
      // Cleanup the event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <div
      className={`text-white fixed top-6 inset-x-0 flex justify-center z-[1000] transition-transform duration-300 `}
    >
      <div className="w-3/5 hidden md:flex justify-center items-center border border-yellow-500 rounded-full h-12 bg-gray-900 bg-opacity-25 text-white shadow-md relative mainNavBar">
        <div className="containernavbar mx-auto flex items-center justify-between px-6 h-12">
          {/* Left Items */}
          <div className={`flex  rounded-full font-bold text-yellow-400 ${isTab?"space-x-4 text-xs":"space-x-12"}`}>
            <motion.div
              whileHover={{ rotateX: 10, rotateZ: 5, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <Link href="/esports" className="hover:text-gray-400">
                ESPORTS
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ rotateX: 10, rotateZ: 5, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/events" className="hover:text-gray-400">
                EVENTS
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ rotateX: 10, rotateZ: 5, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/gallery" className="hover:text-gray-400">
                GALLERY
              </Link>
            </motion.div>
          </div>

          {/* Logo */}
          <Link href="/mainPage" className="flex items-center justify-center">
            <Image
              src="/Shaurya_Logo.png"
              alt="Shaurya Logo"
              width={isTab?200:200}
              height={isTab?200:200}
              className="object-contain z-[1000]"
            />
          </Link>

          {/* Right Items */}
          <div className={`flex  rounded-full font-bold text-yellow-400 ${isTab?"space-x-4 text-xs":"space-x-12"}`}>
            <motion.div
              whileHover={{ rotateX: 10, rotateZ: 5, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/sponsors" className="hover:text-gray-400">
                SPONSORS
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ rotateX: 10, rotateZ: 5, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/teams" className="hover:text-gray-400">
                TEAMS
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ rotateX: 10, rotateZ: 5, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="hover:text-gray-400">
                CA
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNavbar;