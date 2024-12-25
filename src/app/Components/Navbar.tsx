"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cinzel, Rajdhani } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from "next/router";

// Initialize fonts
const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});
const rajdhani = Rajdhani({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'] 
});

// Navigation items
const navItems = [
  { 
    name: "About", 
    href: "/about", 
    color: "from-lightOrange to-darkOrange",
    glow: "lightOrange",
    icon: "⚔️"
  },
  { 
    name: "Events", 
    href: "/events", 
    color: "from-red-600 to-orange-500",
    glow: "red-600",
    icon: "🏹"
  },
  { 
    name: "Gallery", 
    href: "/gallery", 
    color: "from-purple-600 to-red-500",
    glow: "purple-600",
    icon: "🛡️"
  },
  { 
    name: "Sponsors", 
    href: "/sponsors", 
    color: "from-orange-500 to-yellow-500",
    glow: "orange-500",
    icon: "👑"
  },
  { 
    name: "Teams", 
    href: "/teams", 
    color: "from-yellow-500 to-amber-500",
    glow: "yellow-500",
    icon: "✨"
  },

  { 
    name: "CA", 
    href: "https://ca.shauryaiitkgp.in/", 
    color: "from-yellow-500 to-amber-500",
    glow: "yellow-500",
    icon: "✨"
  },
];

// Eagle animation variants
const eagleVariants = {
  initial: {
    x: -100,
    y: 50,
    rotate: 0,
    opacity: 0
  },
  animate: {
    x: '100vw',
    y: [50, 30, 50, 70, 50], // Creates a wave-like flying pattern
    rotate: [0, -10, 0, 10, 0],
    opacity: [0, 1, 1, 1, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
      times: [0, 0.25, 0.5, 0.75, 1],
    }
  }
};

// Eagle Trail Component
const EagleTrail = ({ x, y }: { x: number; y: number }) => {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-lightOrange/30"
      style={{ x, y }}
      initial={{ opacity: 0.6, scale: 1 }}
      animate={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    />
  );
};

const AnimatedNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const addTrail = (x: number, y: number) => {
    const newTrail = { x, y, id: Date.now() };
    setTrails(prev => [...prev, newTrail]);
    setTimeout(() => {
      setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    },
  };

  // ... continuing from previous part

  return (
    <nav className={`fixed w-full transition-transform duration-300 z-50 ${
        visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <motion.header
        initial="visible"
        animate="visible"
        variants={containerVariants}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
           bg-black
           ${visible ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        {/* Flying Eagles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* First Eagle */}
          <motion.div className="absolute w-16 h-16">
            <Image
              src="/eagle.svg"
              alt="Flying Eagle"
              width={64}
              height={64}
              className="filter drop-shadow-[0_0_10px_rgba(243,179,51,0.5)]"
            />
          </motion.div>
          
          {/* Second Eagle */}
          <motion.img
            src="/eagle.svg"
            alt="Flying Eagle"
            className="absolute w-12 h-12 filter drop-shadow-[0_0_8px_rgba(243,179,51,0.3)]"
            variants={eagleVariants}
            initial="initial"
            animate="animate"
            style={{ top: '40%' }}
            transition={{
              delay: 2,
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Third Eagle */}
          <motion.img
            src="/eagle.svg"
            alt="Flying Eagle"
            className="absolute w-8 h-8 filter drop-shadow-[0_0_6px_rgba(243,179,51,0.3)]"
            variants={{
              ...eagleVariants,
              animate: {
                ...eagleVariants.animate,
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }
              }

            }
          }}
          initial="initial"
          animate="animate"
          style={{ top: '60%' }}
        />

        {/* Render Eagle Trails */}
        {trails.map(trail => (
          <EagleTrail key={trail.id} x={trail.x} y={trail.y} />
        ))}
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0">
      <Image
    src="/mainPage.png"
    alt="Background"
    layout="fill"
    objectFit="cover"
    objectPosition="top"
    className="opacity-40 bg-cover"
    unoptimized
  />
  </div>
      <div className="absolute inset-0 bg-gradient-to-r from-darkOrange/10 via-transparent to-darkOrange/10" />

      <div className="container mx-auto px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${cinzel.className} relative group flex items-center gap-3`}
          >
            {/* Logo Container */}
            <div className="relative w-32 h-32 transform transition-transform duration-300">
              <Image
                src="/Shaurya_Logo.png"
                alt="Shaurya Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain transform scale-110 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-2 border-lightOrange/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-r from-darkOrange/20 to-lightOrange/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
            
            {/* Title Section */}
            {/* <div className="flex flex-col items-start">
              <span className="text-4xl font-bold bg-gradient-to-r from-lightOrange to-darkOrange bg-clip-text text-transparent">
                SHAURYA
              </span>
              <span className="text-xl font-semibold text-lightOrange">2024-25</span>
              <span className="text-lg text-lightOrange/90 font-cinzel tracking-wider">
                Veerashwa Kshetra
              </span>
            </div> */}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${rajdhani.className} relative group px-6 py-3
                  text-lg font-semibold tracking-wide transition-all duration-300
                  border border-lightOrange/30 rounded-lg 
                  bg-gradient-to-b from-black/60 to-black/40
                  hover:border-lightOrange/50
                  overflow-hidden`}
                  onClick={() => {
                    setIsMenuOpen(false); // Close the menu
                    const router = useRouter();
                    router.push(item.href); // Use `router.push` to navigate
                  }}
              >
                {/* Content wrapper */}
                <div className="relative z-10 flex flex-col items-center gap-1.5">
                  <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-white/90 group-hover:text-white font-bold tracking-wider">
                    {item.name}
                  </span>
                  {/* <span className="text-sm text-lightOrange/80 group-hover:text-lightOrange">
                    {item.sanskrit}
                  </span> */}
                </div>

                {/* Continuous sword slash effect */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-lightOrange/30 to-transparent
                      group-hover:animate-sword-slash" />
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-lightOrange/50 
                  transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-lightOrange" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-lightOrange/50 
                  transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-lightOrange" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-lightOrange/50 
                  transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-lightOrange" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-lightOrange/50 
                  transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-lightOrange" />
              </motion.a>
            ))}
          </div>


          {/* Render Eagle Trails */}
          {trails.map(trail => (
            <EagleTrail key={trail.id} x={trail.x} y={trail.y} />
          ))}
        </div>

        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <Image
            src="/mainPage.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-darkOrange/10 via-transparent to-darkOrange/10" />

        <div className="container mx-auto px-8 py-3">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`${cinzel.className} relative group flex items-center gap-3`}
            >
              {/* Logo Container */}
              <div className="relative w-32 h-32 overflow-hidden transform transition-transform duration-300">
                <Image
                  src="/Shaurya_Logo.png"
                  alt="Shaurya Logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain transform scale-110 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-2 border-lightOrange/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-2 bg-gradient-to-r from-darkOrange/20 to-lightOrange/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              
              {/* Title Section */}
              {/* <div className="flex flex-col items-start">
                <span className="text-4xl font-bold bg-gradient-to-r from-lightOrange to-darkOrange bg-clip-text text-transparent">
                  SHAURYA
                </span>
                <span className="text-xl font-semibold text-lightOrange">2024-25</span>
                <span className="text-lg text-lightOrange/90 font-cinzel tracking-wider">
                  Veerashwa Kshetra
                </span>
              </div> */}
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${rajdhani.className} relative group px-6 py-3
                    text-lg font-semibold tracking-wide transition-all duration-300
                    border border-lightOrange/30 rounded-lg 
                    bg-gradient-to-b from-black/60 to-black/40
                    hover:border-lightOrange/50
                    overflow-hidden`}
                    onClick={() => {
                      setIsMenuOpen(false); // Close the menu
                      const router = useRouter();
                      router.push(item.href); // Use `router.push` to navigate
                    }}
                >
                  {/* Content wrapper */}
                  <div className="relative z-10 flex flex-col items-center gap-1.5">
                    <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="text-white/90 group-hover:text-white font-bold tracking-wider">
                      {item.name}
                    </span>
                    {/* <span className="text-sm text-lightOrange/80 group-hover:text-lightOrange">
                      {item.sanskrit}
                    </span> */}
                  </div>

                  {/* Continuous sword slash effect */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-lightOrange/30 to-transparent
                        group-hover:animate-sword-slash" />
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-lightOrange/50 
                    transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-lightOrange" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-lightOrange/50 
                    transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-lightOrange" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-lightOrange/50 
                    transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-lightOrange" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-lightOrange/50 
                    transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-lightOrange" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`md:hidden text-2xl cursor-pointer relative group px-4 py-2 
                border border-lightOrange/30 rounded-lg
                bg-gradient-to-b from-black/60 to-black/40`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`md:hidden mt-6 backdrop-blur-xl bg-black/40 rounded-2xl p-4 
                  border border-lightOrange/30`}
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className={`${rajdhani.className} block py-4 px-4 text-base font-medium rounded-lg relative group
                      border border-lightOrange/30 hover:border-lightOrange/50 mb-2
                      bg-gradient-to-b from-black/60 to-black/40
                      text-white hover:text-white transition-all duration-300`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="relative z-10 flex items-center gap-2">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex flex-col">
                        <span>{item.name}</span>
                        {/* <span className="text-xs text-lightOrange/80">{item.sanskrit}</span> */}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </nav>
  );
};

export default AnimatedNavbar;