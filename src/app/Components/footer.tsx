"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
     
      <footer className="bg-gradient-to-t from-[#3B2A1A] to-transparent text-[#E6D5C3] py-4 border-t-2 border-[#8B4513]  scale-100 origin-bottom">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
            {/* Contact Information */}
            <div className=''>
              <div className="flex justify-center">
            <Image width={200} height={200} className="w-[150px] lg:w-[200px]  " src="/Shaurya_Logo.png" alt="Shaurya Logo" /></div>
              <p className="flex justify-center text-[15px] mt-4 lg:mt-0 text-white font-bold font-nunito text-center lg:text-left w-[90%]">
                <span className="text-center text-[#D4A76A]  font-serif">Shaurya is not just a sports fest; 
                its a vibrant celebration of athleticism and camaraderie,
                where the spirit of competition ignites passion and unity among colleges nationwide.
                  Join us to witness the thrill of sports as we elevate the game together!</span>
              </p>
            </div>
            
            <div className='mt-28  xl:border-none border-t  border-[#d4ad75]'>
            <p className="text-3xl flex justify-center font-bold mb-4 text-[#D4A76A] pt-6 xl:pt-0 font-serif">Follow Us</p>
            <div className="flex justify-center gap-7 mt-4">
              <a href="https://www.facebook.com/share/HFLKcLA25psDVxjR/?mibextid=qi2Omg/">
                <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="/facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA==">
                <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="/instagram.png" alt="Instagram" />
              </a>
              <a href="https://youtube.com/@shauryaiitkharagpur?si=k3lk4kX4b3kLvZpG">
                <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="/youtube.png" alt="YouTube" />
              </a>
              <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/">
                <Image width={30} height={30} className="w-[30px] h-[30px] hover:scale-110 transition" src="/linkedin.png" alt="LinkedIn" />
              </a>
            </div>

            
          </div>
          <div>
      

       
          <div className="text-center mt-20 xl:border-none border-t  border-[#d4ad75]">
            <h3 className="text-xl font-bold mb-4 text-[#D4A76A] pt-6 xl:pt-0 font-serif">Contact Us</h3>
            <div className="grid xl:gap-2 xl:grid-cols-2">

              <div className="space-y-2">
                <h4 className="text-[#D4A76A] font-semibold">Tuhsin Rahman</h4>
                <ul className="space-y-1">
                  <li className="hover:translate-x-2 transition-transform hover:text-[#D4A76A]">
                    <a href="tel:+916002515029">+91 6002515029</a>
                  </li>
                  <li className="hover:translate-x-2 transition-transform hover:text-[#D4A76A] text-sm">
                    <a href="mailto:tuhsinsrahman.shaurya.iitkgp@gmail.com">
                      tuhsinsrahman.shaurya@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

          
              <div className="space-y-2 xl:mt-0 mt-10">
                <h4 className="text-[#D4A76A] font-semibold">Hemant Kamble</h4>
                <ul className="space-y-1">
                  <li className="hover:translate-x-2 transition-transform hover:text-[#D4A76A]">
                    <a href="tel:+917667103747">+91 9372838349</a>
                  </li>
                  <li className="hover:translate-x-2 transition-transform hover:text-[#D4A76A] text-sm">
                    <a href="mailto:aryanraj.shaurya.iitkgp@gmail.com">
                    hemant.kamble@shauryaiitkgp.in
                    </a>
                  </li>
                </ul>
              </div>

            </div>
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

