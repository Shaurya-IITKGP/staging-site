"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
     
      <footer className="bg-gradient-to-t from-[#3B2A1A] to-transparent text-[#E6D5C3] py-4 border-t-2 border-[#8B4513]  scale-100 origin-bottom">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Contact Information */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4 text-[#D4A76A] font-serif">Sacred Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-center hover:text-[#D4A76A] transition-colors">
                  <i className="fas fa-drum mr-2"></i>
                  <a href="tel:+916002515029">+91 6002515029</a>
                </li>
                <li className="flex items-center justify-center hover:text-[#D4A76A] transition-colors">
                  <i className="fas fa-feather mr-2"></i>
                  <a href="mailto:tuhsinsrahman.shaurya.iitkgp@gmail.com">tuhsinsrahman.shaurya.iitkgp@gmail.com</a>
                </li>
                <li className="flex items-center justify-center hover:text-[#D4A76A] transition-colors">
                  <i className="fas fa-campground mr-2"></i>
                  <div>
                    <p>IIT Kharagpur</p>
                    <p>West Bengal, India</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4 text-[#D4A76A] font-serif">Join Our Tribe</h3>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.facebook.com/share/HFLKcLA25psDVxjR/?mibextid=qi2Omg/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#D4A76A] transition-colors"
                >
                  <i className="fas fa-crow text-2xl"></i>
                </a>
                <a 
                  href="https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#D4A76A] transition-colors"
                >
                  <i className="fas fa-shield-alt text-2xl"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/company/shaurya-iit-kharagpur/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#D4A76A] transition-colors"
                >
                  <i className="fas fa-peace text-2xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 md:mt-8 pt-4 md:pt-8 border-t border-[#8B4513]">
            <p className="text-white text-[8px] md:text-[10px]">&copy; 2024 Shaurya, IIT Kharagpur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

