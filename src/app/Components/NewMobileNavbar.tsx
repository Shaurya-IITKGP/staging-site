// staging-site/src/app/newPag/NewMobileNavbar.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const NewMobileNavbar = () => {
    const navItems = [
        { name: 'Home', href: '#home', icon: '🏠' },
        { name: 'About', href: '#about', icon: 'ℹ️' },
        { name: 'Events', href: '#events', icon: '📅' },
        { name: 'Gallery', href: '#gallery', icon: '🖼️' },
        { name: 'Sponsors', href: '#sponsors', icon: '💼' },
        { name: 'Teams', href: '#teams', icon: '👥' },
        { name: 'Contact', href: '#contact', icon: '📞' },
    ]; // Example nav items

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu regardless of width
    };

    return (
        <div className="flex justify-between">
            <div>
                <Image alt='ShauryaLogo' src='/ShauryaLogo1.png' width={100} height={100} />
            </div>
            {/* Mobile Menu Button */}
            <div>
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
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className="relative z-10 flex items-center gap-2">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div className="flex flex-col">
                                        <span>{item.name}</span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
}

export default NewMobileNavbar;