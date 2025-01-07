"use client";
import React, { useState, useEffect } from "react";
import "./TeamsPage.css"
import Image from "next/image";

interface TeamsPage2Props {
  arr: string[][];
}

const TeamsPage2: React.FC<TeamsPage2Props>= ({arr}) => {
  // Add state to track active image

  const [isHovered,setIsHovered] = useState(false);

  useEffect(() => {
    if(isHovered) return;
    let n:number = arr.length;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % n);
    }, 2000); // Change activeIndex every 3 seconds
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, [arr,isHovered]);


  
  const [activeIndex, setActiveIndex] = useState(0);
  const n=arr.length;
  let myArray: number[] = Array.from({ length: n }, (_, index) => index + 1);
  // Handler for mouse over
  const handleMouseOver = (index: number) => {
    setIsHovered(true);
    setActiveIndex(index);
  };
  const handleMouseLeave = () => {
    setIsHovered(false); // Resume rotation
  };

  return(
    <>
    <div className="flex justify-center items-center min-h-screen mr-20 mt-6">
         <div className="w-[600px] h-[600px] border-2 border-white rounded-full flex justify-center items-center relative">
               {myArray.map((i) => (
                <div className="absolute -left-10 z-50" key={i} style={{transform:`rotate(calc((360deg * (${i} - 1))/${n}))`, transformOrigin:"340px"}} onMouseOver={() => handleMouseOver(i - 1)}
                onMouseLeave={handleMouseLeave}>

                    <div className={`${activeIndex==i-1?'border-red-700 border-4':'border-white border-2'} w-24 h-24 rounded-full flex justify-center items-center transition-all duration-300`}>
                     <Image
                     width={100}
                     height={100}

               
                        key={i}
                        src={`./team_pics/${arr[i-1][0]}.jpg`}
                        alt={`arr[i][0]`}
                        className={`w-20 h-20 rounded-full object-cover transition-all duration-150 border-gray-400 border-2 ${activeIndex==i-1?'':'grayscale'}`}
                        style={{transform:`rotate(calc((-360deg * (${i} - 1))/${n}))`}}
                        onMouseOver={() => handleMouseOver(i - 1)}
                      />
                      </div>
                  </div>
                ))}
               <div className="content flex flex-col">
                      <div className="flex justify-center items-center">
                         {myArray.map((i)=>(
                         <div key={i} className={`w-72 h-72 object-cover transition-all absolute duration-500 flex justify-center items-center flex-col gap-1 ${activeIndex==i-1?'scale-100 z-40':'scale-0 z-0'}`}> 
                             <Image width={100} height={100} src={`./team_pics/${arr[i-1][0]}.jpg`} alt={`Image${i}`} className="rounded-3xl w-40 h-56 object-cover"/> 

                             <h2 className="font-semibold text-2xl text-center text-white">{arr[i-1][0]}</h2>

                             <span className="text-center font-extralight text-white text-sm">{arr[i-1][1]}</span>

                             <div className="flex flex-row gap-1">
                                <a href={`${arr[i-1][2]}`} className="w-8 h-8 object-cover" target="_blank"><Image width={100} height={100} src="./instagram.png" alt="instagram" className=""/></a>
                                <a href={`${arr[i-1][4]}`} className="w-8 h-8 object-cover" target="_blank"><Image width={100} height={100} src="./linkedin.png" alt="linkedin" className=""/></a>
                                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${arr[i-1][5]}`} target="_blank" className="w-8 h-8 object-cover"><Image width={100} height={100} src="./mail.png" alt="main" className=""/></a>
                                {/* <a href={`${arr[i-1][3]}`} className="w-8 h-8 object-cover" target="_blank"><Image src="./facebook.png" className=""/></a> */}
                             </div>
                         </div> ))}
                      </div>
                    
                       
               </div>
                



         </div>

    </div>
    </>
  )}

  export default TeamsPage2;
