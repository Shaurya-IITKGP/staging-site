"use client";
import React, { useState, useEffect } from "react";
import "./TeamsPage.css"


const TeamsPage2: React.FC = () => {
  // Add state to track active image
  const [activeIndex, setActiveIndex] = useState(0);

  // Handler for mouse over
  const handleMouseOver = (index: number) => {
    setActiveIndex(index);
  };

  return(
    <>
    <div className="flex justify-center items-center min-h-screen">
         <div className="w-[600px] h-[600px] border-2 border-white rounded-full flex justify-center items-center relative">
               {[1, 2, 3, 4, 5, 6].map((i) => (
                <div className="absolute -left-10 z-50" key={i} style={{transform:`rotate(calc(60deg * (${i} - 1)))`, transformOrigin:"340px"}} onMouseOver={() => handleMouseOver(i - 1)}>
                    <div className={`${activeIndex==i-1?'border-red-700 border-4':'border-white border-2'} w-24 h-24 rounded-full flex justify-center items-center transition-all duration-300`}>
                     <img
                        key={i}
                        src={`img${i}.jpg`}
                        alt={`Image ${i}`}
                        className={`w-20 h-20 rounded-full object-cover transition-all duration-150 border-gray-400 border-2 ${activeIndex==i-1?'':'grayscale'}`}
                        style={{transform:`rotate(calc(-60deg * (${i} - 1)))`}}
                        onMouseOver={() => handleMouseOver(i - 1)}
                      />
                      </div>
                  </div>
                ))}
               <div className="content flex flex-col">
                      <div className="flex justify-center items-center">
                         {[1,2,3,4,5,6].map((i)=>(
                         <div key={i} className={`w-72 h-72 object-cover transition-all absolute duration-500 flex justify-center items-center flex-col gap-1 ${activeIndex==i-1?'scale-100 z-40':'scale-0 z-0'}`}> 
                             <img src={`img${i}.jpg`} alt={`Image${i}`} className="rounded-3xl w-40 h-72 object-cover"/> 

                             <h2 className="font-bold text-2xl text-center font-sans">Someone Famous</h2>

                             <span className="text-center font-extralight text-sm">Product Designer</span>

                             <div className="flex flex-row gap-1">
                                <a href="https://www.instagram.com/shaurya.iitkgp/" className="w-8 h-8 object-cover"><img src="./instagram.png" className="invert"/></a>
                                <a href="https://www.youtube.com/@ShauryaIITKharagpur" className="w-8 h-8 object-cover"><img src="./youtube.png" className="invert"/></a>
                                <a href="https://www.facebook.com/shauryaiitkgp/" className="w-8 h-8 object-cover"><img src="./facebook.png" className="invert"/></a>
                                <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/posts/?feedView=all" className="w-8 h-8 object-cover"><img src="./linkedin.png" className="invert"/></a>
                             </div>
                         </div> ))}
                      </div>
                    
                       
               </div>
                



         </div>

    </div>
    </>
  )}

  export default TeamsPage2;
