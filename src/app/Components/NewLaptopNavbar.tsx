import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewNavbar = () => {

  return (
    <div
      className={`text-white fixed top-6 inset-x-0 flex justify-center z-50 transition-transform duration-300 `}
    >
      <div className="w-3/5 hidden md:flex justify-center items-center border border-yellow-500 rounded-full h-12 bg-gray-900 bg-opacity-25 text-white shadow-md relative mainNavBar">
        <div className="container mx-auto flex items-center justify-between px-6 ">
          {/* Left Items */}
          <div className="flex space-x-12 font-bold text-yellow-200 ">
            <div className='cursor-pointer'>
            <Link href="/esports" className="hover:text-gray-400 cursor-pointer ">
              ESPORTS
            </Link>
            </div>
           
            
            <Link href="/events" className="hover:text-gray-400 cursor-pointer">
              EVENTS
            </Link>
            <Link href="/gallery" className="hover:text-gray-400 cursor-pointer">
              GALLERY
            </Link>
          </div>

          {/* Logo */}
          <Link href='/mainPage' className="flex items-center justify-center">
            <Image
              src="/Shaurya_Logo.png"
              alt="Shaurya Logo"
              width={200}
              height={200}
              className="object-contain logo"
            />
          </Link>

          {/* Right Items */}
          <div className="flex space-x-12 rounded-full font-bold text-yellow-200">
            <Link href="/sponsors" className="hover:text-gray-400">
              SPONSORS
            </Link>
            <Link href="/teams" className="hover:text-gray-400">
              TEAMS
            </Link>
            <Link href="/" className="hover:text-gray-400">
              CA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNavbar;
