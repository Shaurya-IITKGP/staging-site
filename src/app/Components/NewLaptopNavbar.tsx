import React from 'react'
import Image from 'next/image'

const NewNavbar = () => {
  return (
     <div className="text-white mt-20 flex justify-center ">  
                <div className="inset-x-0 w-3/5 hidden md:flex justify-center items-center border border-yellow-500 rounded-full h-12 bg-gray-900 bg-opacity-85 text-white shadow-md relative mainNavBar">
                    <div className='animate-sword-slash absolute top-0 left-0 w-full h-full'></div>
                    <div className="container mx-auto flex items-center justify-between px-6 navbar">
                        {/* Left Items */}
                        <div className="flex space-x-12 font-bold text-yellow-200">
                            <a href="#home" className="hover:text-gray-400">ABOUT</a>
                            <a href="#about" className="hover:text-gray-400">EVENTS</a>
                            <a href="#services" className="hover:text-gray-400">GALLERY</a>
                        </div>
    
                        {/* Logo */}
                        <div className="flex items-center justify-center">
                            <Image
                                src="/ShauryaLogo1.png"
                                alt="Shaurya Logo"
                                width={200} // Default width
                                height={200} // Set a fixed height
                                className="object-contain logo" // Added class for logo
                            />
                        </div>
    
                        {/* Right Items */}
                        <div className="flex space-x-12 rounded-full font-bold text-yellow-200">
                            <a href="#contact" className="hover:text-gray-400">SPONSORS</a>
                            <a href="#blog" className="hover:text-gray-400">TEAMS</a>
                            <a href="#help" className="hover:text-gray-400">CA</a>
                        </div>
                    </div>
                    <div className="sprinkles"></div> {/* Sprinkling div on the right */}
                </div>
    
                <style jsx>{`
                    .navbar {
                        font-family: 'Arial', sans-serif, italic; // Good font for navbar
                    }
    
                `}</style>
            </div>
  )
}

export default NewNavbar