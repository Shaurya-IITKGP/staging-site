"use client";
import Animate from "./animate";
import Footer from "./footer";
import Image from 'next/image';

export default function ComingSoon() {
  return (
    <div className="min-h-screen md:h-screen w-screen md:fixed flex flex-col relative overflow-auto md:overflow-hidden">

      
      {/* Background layers */}
      
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-80">
      </div>
      <div className="fixed inset-0">
        <Image
          src="/image.png"
          alt="Background"
          fill
          className="opacity-30 object-cover"
        />
      </div>
      

      {/* Main content */}
      <div className=" z-10 flex flex-col h-full overflow-auto md:overflow-hidden">
         {/* Animation layer */}
         <div className="flex flex-col items-center overflow-auto md:overflow-hidden">
           
         </div>

         <div className="w-full">
             <Animate />
           </div>
       </div>

   
      <div>
     <Footer/>
        
      </div>
    </div>
  );
}
