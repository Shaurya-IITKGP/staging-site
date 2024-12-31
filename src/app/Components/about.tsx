import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="relative z-20 bg-black bg-opacity-60 p-2 ">    
      <div className="relative z-10 mt-12 ">
        {/* Heading */}
        <h1 className="text-6xl text-center font-bold  text-yellow-400 mb-8 underline underline-offset-6">
          About Us
        </h1>
        
        {/* Content section */}
        <div className="flex flex-col md:flex-row justify-evenly items-center space-x-8 md:border-t md:border-[#d4ad75] md:ml-12 md:mr-12">
          {/* YouTube video thumbnail with YouTube logo in the center */}
          <div className=" w-11/12 md:w-1/3 relative shadow-lg shadow-yellow-500 rounded-md mt-12">
            <a
              href="https://youtu.be/ulk1aol4IL0?si=XG1smyb7HTY5efYK"
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
          <div className="w-full mt-12 md:mt-0 md:w-1/2 text-white ">
            <span className='text-yellow-500 font-bold'>Shaurya </span>is not just a sports fest; 
            it's a vibrant celebration of athleticism and camaraderie,
            where the spirit of competition ignites passion and unity among colleges nationwide.
            Join us to witness the thrill of sports as we elevate the game together!
          </div>
        </div>
      </div>

    

      <div className='flex justify-center mt-20 text-lg md:text-2xl '>
      <table className="w-full">
  <tbody>
    <tr className="font-bold text-yellow-400">
      <td className="px-4 py-2 text-center">
        <div className="w-full">100K+</div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="w-full">10M+</div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="w-full">3</div>
      </td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-center">
        <div className="w-full">FootFalls</div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="w-full">EyeBalls</div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="w-full">Days</div>
      </td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-center">
        <div className="border-t-4 border-[#d4ad75] w-3/4 mx-auto"></div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="border-t-4 border-[#d4ad75] w-3/4 mx-auto"></div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="border-t-4 border-[#d4ad75] w-3/4 mx-auto"></div>
      </td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-center">
        <div className="w-full"></div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="w-full"></div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="w-full"></div>
      </td>
    </tr>
    <tr className="font-bold text-yellow-400">
      <td className="px-4 py-2 text-center">
        <div className="w-full">450+</div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="w-full">4500+</div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="w-full">75+</div>
      </td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-center">
        <div className="w-full">Colleges</div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="w-full">Participants</div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="w-full">Events</div>
      </td>
    </tr>
  </tbody>
</table>

</div>
<div className='md:border-t mt-12 md:border-[#d4ad75] md:ml-12 md:mr-12'/>

    </div>
  )
}

export default About;
