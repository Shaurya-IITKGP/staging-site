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
        <div className="flex flex-col lg:flex-row justify-evenly items-center  md:border-t md:border-[#d4ad75] md:ml-12 md:mr-12">
          {/* YouTube video thumbnail with YouTube logo in the center */}
          <div className=" w-12/12  relative shadow-lg shadow-yellow-500 rounded-md mt-12">
            <a
              href="https://youtu.be/bsR_DuxXbns?si=woxGdslzNNxKFK6V"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* YouTube Thumbnail */}
              <Image
                src="https://i.ytimg.com/an_webp/bsR_DuxXbns/mqdefault_6s.webp?du=3000&sqp=COee8LsG&rs=AOn4CLAyRYg-EkqYehBUfiNPw4aUuiw68Q"
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
          <div className="w-full mx-auto mt-12 lg:mt-0 lg:w-1/2 text-white px-4 pr-4 md:px-8 text-justify">
            <span className="font-bold text-yellow-400">IIT Kharagpur</span> proudly presents 
            <span className="font-bold text-yellow-400"> Shaurya</span>, one of India’s most renowned college sports festivals. This iconic event hosts exhilarating sports competitions, drawing participants from over 400 colleges nationwide. Beyond the games, 
            <span className="font-bold text-yellow-400"> Shaurya</span> offers an array of exciting activities, including adventure sports, cultural showcases, interactive workshops, and fun-filled carnival games, ensuring there’s something for everyone to enjoy.
          </div>

        </div>
      </div>

    

      <div className='flex justify-center mt-20 text-lg md:text-2xl '>
      <table className="w-full">
  <tbody>
    <tr className="font-bold text-yellow-400">
      <td className="px-4 py-2 text-center">
        <div className="w-full">50K+</div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="w-full">1M+</div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="w-full">3</div>
      </td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-center text-white">
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
        <div className="w-full">45+</div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="w-full">1000+</div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="w-full">75+</div>
      </td>
    </tr>
    <tr>
      <td className="px-4 py-2 text-center text-white">
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
