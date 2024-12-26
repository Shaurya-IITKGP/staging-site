import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NewNavbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY) {
      // Scrolling Down
      setIsScrollingDown(true)
    } else {
      // Scrolling Up
      setIsScrollingDown(false)
    }
    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <div className={`text-white fixed top-20 inset-x-0 flex justify-center z-50 transition-transform duration-300 ${isScrollingDown ? 'transform -translate-y-full' : ''}`}>
      <div className="w-3/5 hidden md:flex justify-center items-center border border-yellow-500 rounded-full h-12 bg-gray-900 bg-opacity-25 text-white shadow-md relative mainNavBar">
        <div className="animate-sword-slash absolute top-0 left-0 w-full h-full"></div>
        <div className="container mx-auto flex items-center justify-between px-6 navbar">
          {/* Left Items */}
          <div className="flex space-x-12 font-bold text-yellow-200">
            <a href="/esports" className="hover:text-gray-400">ESPORTS</a>
            <a href="/events" className="hover:text-gray-400">EVENTS</a>
            <a href="/gallery" className="hover:text-gray-400">GALLERY</a>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/ShauryaLogo1.png"
              alt="Shaurya Logo"
              width={200}
              height={200}
              className="object-contain logo"
            />
          </div>

          {/* Right Items */}
          <div className="flex space-x-12 rounded-full font-bold text-yellow-200">
            <a href="#contact" className="hover:text-gray-400">SPONSORS</a>
            <a href="#blog" className="hover:text-gray-400">TEAMS</a>
            <a href="#help" className="hover:text-gray-400">CA</a>
          </div>
        </div>
        <div className="sprinkles"></div>
      </div>

      <style jsx>{`
        .navbar {
          font-family: 'Arial', sans-serif, italic;
        }
      `}</style>
    </div>
  )
}

export default NewNavbar
