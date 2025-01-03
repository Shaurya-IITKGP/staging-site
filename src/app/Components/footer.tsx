import Image from "next/image"
import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1a1716] bg-gradient-to-t from-[#070404] to-[#42221f] text-[#E6D5C3] py-4 border-t-2 border-[#8B4513] scale-100 origin-bottom h-auto shadow-lg z-50 "> {/* Adjusted height for responsiveness */}
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between"> {/* Removed h-full for better mobile handling */}
          <div className="flex flex-col  lg:flex-row  items-center w-full lg:w-1/2 mb-4 lg:mb-0"> {/* Full width on mobile */}
          <div className="lg:w-full">
          <Image width={200} height={200} className="w-[150px] lg:w-[200px] transition-transform duration-500 hover:scale-110" src="/Shaurya_Logo.png" alt="Shaurya Logo" />

          </div>
          <div className="text-justify mt-4 lg:mt-0 lg:border-l-2 pl-4  lg:ml-4 border-t lg:border-t-0 border-[#d4ad75] pt-4 lg:pt-0">
            <p>
              <span className="text-[#D4A76A] font-semibold">
                Shaurya is not just a sports fest; it’s a vibrant celebration of
                athleticism and camaraderie, where the spirit of competition
                ignites passion and unity among colleges nationwide. Join us to
                witness the thrill of sports as we elevate the game together!
              </span>
            </p>
          </div>
           
          </div>

          <div className="text-center lg:w-1/4  mt-4 lg:mt-0 lg:border-l-2 pl-4  lg:ml-4 border-t lg:border-t-0 border-[#d4ad75] pt-4 lg:pt-0"> {/* Added left border for separation and flex column */}
            <p className="text-2xl flex justify-center font-bold mb-4 text-[#D4A76A] pt-2 xl:pt-0 font-serif">Follow Us</p>
            <div className="flex justify-center items-center gap-2 mt-4 flex-wrap"> {/* Adjusted gap and added flex-wrap for mobile */}
              <a href="https://www.facebook.com/share/HFLKcLA25psDVxjR/?mibextid=qi2Omg/">
                <Image width={50} height={50} className="w-[40px] h-[40px] hover:scale-110 transition-transform duration-300" src="/facebook.png" alt="Facebook" />
              </a>
              <div className="border-l-2 border-[#D4A76A] h-8 hidden lg:block"></div> {/* Vertical line separator hidden on mobile */}
              <a href="https://www.instagram.com/shaurya.iitkgp?igsh=MW1wcGRqNHoyNWgzcA==">
                <Image width={50} height={50} className="w-[40px] h-[40px] hover:scale-110 transition-transform duration-300" src="/instagram.png" alt="Instagram" />
              </a>
              <div className="border-l-2 border-[#D4A76A] h-8 hidden lg:block"></div> {/* Vertical line separator hidden on mobile */}
              <a href="https://youtube.com/@shauryaiitkharagpur?si=k3lk4kX4b3kLvZpG">
                <Image width={50} height={50} className="w-[40px] h-[40px] hover:scale-110 transition-transform duration-300" src="/youtube.png" alt="YouTube" />
              </a>
              <div className="border-l-2 border-[#D4A76A] h-8 hidden lg:block"></div> {/* Vertical line separator hidden on mobile */}
              <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/">
                <Image width={50} height={50} className="w-[40px] h-[40px] hover:scale-110 transition-transform duration-300" src="/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className="text-center lg:w-1/4 mt-4 lg:mt-0 lg:border-l-2 pl-4  lg:ml-4 border-t lg:border-t-0 border-[#d4ad75] pt-4 lg:pt-0"> {/* Added margin for spacing */}
            <h3 className="text-xl font-bold mb-4 text-[#D4A76A] pt-2 xl:pt-0 font-serif">Pages</h3>
            <div className="grid xl:gap-2 xl:grid-cols-2">
              <div className="space-y-2 ">
                <ul className="space-y-1">
                  <li className="hover:translate-x-2 transition-transform hover:text-[#D4A76A]">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform hover:text-[#D4A76A]">
                    <Link href="/events">Events</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform hover:text-[#D4A76A]">
                  <a
                href="https://ca.shauryaiitkgp.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4A76A]"
                >
                  CA
                </a>
                  </li>
                </ul>
              </div>

              <div className="lg:space-y-2 xl:mt-0 lg:gap-2 lg:mt-10">
                <ul className="space-y-1">
                  <li className="hover:translate-x-2 transition-transform hover:text-[#D4A76A]">
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform hover:text-[#D4A76A]">
                    <Link href="/teams">Teams</Link>
                  </li>
                  <li className="hover:translate-x-2 transition-transform hover:text-[#D4A76A]">
                    <Link href="/sponsors">Sponsors</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 lg:mt-2 pt-2 border-t border-[#8B4513]">
          <p className="text-white text-[8px] lg:text-[10px]">&copy; 2025 Shaurya, IIT Kharagpur. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
