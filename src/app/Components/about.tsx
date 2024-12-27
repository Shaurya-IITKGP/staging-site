import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="">    
      <div className="relative z-10">
        {/* Heading */}
        <h1 className="text-6xl text-center font-bold  text-yellow-400 mb-8 underline underline-offset-6">
          About Us
        </h1>
        
        {/* Content section */}
        <div className="flex justify-evenly items-center space-x-8">
          {/* YouTube video thumbnail with YouTube logo in the center */}
          <div className="w-1/4 relative shadow-lg shadow-yellow-500 rounded-md">
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
          <div className="w-1/2 text-white">
            <span className='text-yellow-500 font-bold'>Shaurya </span>is not just a sports fest; 
            it's a vibrant celebration of athleticism and camaraderie,
            where the spirit of competition ignites passion and unity among colleges nationwide.
            Join us to witness the thrill of sports as we elevate the game together!
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-20 text-2xl'>
  <table className='w-full '>
    <tbody>
      <tr className='font-bold text-yellow-400'>
        <td className="px-4 py-2 text-center">100K+</td>
        <td className="px-4 py-2 text-center">10M+</td>
        <td className="px-4 py-2 text-center">3</td>
      </tr>
      
      <tr>
        <td className="px-4 py-2 text-center">FootFalls</td>
        <td className="px-4 py-2 text-center">EyeBalls</td>
        <td className="px-4 py-2 text-center">Days</td>
      </tr>
      <tr>
        <td className="px-4 py-2 text-center"></td>
        <td className="px-4 py-2 text-center"></td>
        <td className="px-4 py-2 text-center"></td>
      </tr>
      <tr className=' font-bold text-yellow-400'>
        <td className="px-4 py-2 text-center">450+</td>
        <td className="px-4 py-2 text-center">4500+</td>
        <td className="px-4 py-2 text-center">75+</td>
      </tr>
      <tr>
        <td className="px-4 py-2 text-center">Colleges</td>
        <td className="px-4 py-2 text-center">Participants</td>
        <td className="px-4 py-2 text-center">Events</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  )
}

export default About;
