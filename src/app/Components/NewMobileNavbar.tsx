"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NewMobileNavbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Teams", href: "/teams" },
    { name: "CA", href: "https://ca.shauryaiitkgp.in/" },
  ]; // Example nav items

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu
  };

  return (
    <div className="flex justify-between z-[1000] bg-transparent bg-opacity-45 backdrop-blur-lg fixed w-screen">
      <div className="">
        <Image
          alt="ShauryaLogo"
          src="/Shaurya_Logo.png"
          width={100}
          height={100}
        />
      </div>
      {/* Mobile Menu Button */}
      <div className="mt-4 mr-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`text-2xl cursor-pointer relative group px-4 py-2 
                        border border-lightOrange/30 rounded-lg
                        bg-gradient-to-b from-black/60 to-black/40`}
          onClick={handleMenuToggle} // Updated to use handleMenuToggle
        >
          <span className="text-lightOrange">☰</span>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-md z-10 pointer-events-none"></div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }} // Full screen height
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`md:hidden mt-6 backdrop-blur-xl bg-black/80 rounded-2xl p-4 
                            border border-lightOrange/30 fixed top-0 left-0 w-full h-full z-20`} // Fixed position
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`block py-4 px-4 text-base font-medium rounded-lg relative group
                                    border border-lightOrange/30 hover:border-lightOrange/50 mb-2
                                    bg-gradient-to-b from-black/60 to-black/40
                                    text-white hover:text-white transition-all duration-300`}
                onClick={() => setIsMenuOpen(false)} // Close menu on item click
              >
                <div className="relative z-10 flex items-center gap-2">
                  <div className="flex flex-col">
                    <span>{item.name}</span>
                  </div>
                </div>
              </motion.a>
            ))}
             <div className="flex justify-center"><div onClick={handleMenuToggle} className="flex justify-center items-center py-4 px-4 text-base font-medium
                                    border border-lightOrange/30 hover:border-lightOrange/50 mb-2
                                    bg-gradient-to-b from-black/60 to-black/40
                                    text-white hover:text-white transition-all duration-300 w-14 h-14 mt-10 rounded-full"><img src="./x.png"/></div></div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewMobileNavbar;
