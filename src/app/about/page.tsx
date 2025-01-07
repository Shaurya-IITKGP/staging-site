import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="">
      {/* Background image with gradient overlay */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/mainPage2.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-50"></div>
      </div>
      
      <div className="relative z-10">
        {/* Heading */}
        <h1 className="text-6xl text-center font-bold text-amber-900 mb-8 font-['Cinzel']">
          About Us
        </h1>
        
        {/* Content section */}
        <div className="flex justify-evenly items-center space-x-8">
          {/* YouTube video thumbnail with YouTube logo in the center */}
          <div className="w-1/4 relative shadow-lg shadow-black rounded-md">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* YouTube Thumbnail */}
              <Image
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                alt="YouTube Video Thumbnail"
                width={480}
                height={270}
                className="rounded-md cursor-pointer"
              />
              {/* YouTube Logo Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/youtube-logo.png"  // Add YouTube logo image in your `public` folder
                  alt="YouTube Logo"
                  width={60}  // Adjust the size of the logo
                  height={60}  // Adjust the size of the logo
                  className="cursor-pointer"
                />
              </div>
            </a>
          </div>

          {/* Text content */}
          <div className="w-2/3 text-white">
            Shaurya is not just a sports fest; 
            it's a vibrant celebration of athleticism and camaraderie,
            where the spirit of competition ignites passion and unity among colleges nationwide.
            Join us to witness the thrill of sports as we elevate the game together!
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-20 text-2xl'>
  <table className='w-full'>
    <tbody>
      <tr>
        <td className="px-4 py-2 text-center">100K+</td>
        <td className="px-4 py-2 text-center">1M+</td>
        <td className="px-4 py-2 text-center">3</td>
      </tr>
      <tr>
        <td className="px-4 py-2 text-center text-white">FootFalls</td>
        <td className="px-4 py-2 text-center text-white">EyeBalls</td>
        <td className="px-4 py-2 text-center text-white">Days</td>
      </tr>
    </tbody>
  </table>
</div>


<div className='flex justify-center mt-8 text-2xl'>
  <table className='w-full'>
    <tbody>
      <tr>
        <td className="px-4 py-2 text-center">45K+</td>
        <td className="px-4 py-2 text-center">10M+</td>
        <td className="px-4 py-2 text-center">3</td>
      </tr>
      <tr>
        <td className="px-4 py-2 text-center">FootFalls</td>
        <td className="px-4 py-2 text-center">EyeBalls</td>
        <td className="px-4 py-2 text-center">Days</td>
      </tr>
    </tbody>
  </table>
</div>


    </div>
  )
}

export default Page;
