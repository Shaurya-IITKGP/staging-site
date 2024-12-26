import React from 'react'
import { useState } from 'react';
interface Cardprops{
  name : string;
  des : string;
  prize: string;
  overlay: boolean;
  setOverlay: Function;
  inn: number;
  setinn : Function;
} 
const Card : React.FC<Cardprops>= ({name,des,prize,overlay,setOverlay,inn,setinn}) => {
  const [hoverlorem,sethoverlorem]=useState(false)
  const [hoverlearn,sethoverlearn]=useState(false)
  const setOverlayandinn=()=>{
    setOverlay(true);
    setinn(inn);
  }

  return (
    <div className="relative w-80 h-[450px] overflow-hidden bg-[#F0F8E1] flex flex-col justify-center items-center shadow-xl shadow-black rounded-2xl scale-95" onMouseEnter={()=>sethoverlorem(true)} onMouseLeave={()=>sethoverlorem(false)}>
      {/* Image */}
      <img
        src={`./assets/${name}.png`}
        alt=""
        className={`absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-300 ${hoverlorem?'scale-100':'scale-110'}`}
      />


      {/* Extra Content - Initially hidden, appears on hover */}
      

      <div className={`h-80 absolute left-0 w-full bg-[#435c20] text-[#DEE8C2] p-6 transition-translate duration-300 flex justify-center items-center pt-16 ${hoverlearn?'translate-y-24' : 'translate-y-128'}`}>
        <h4 className="text-xl font-semibold text-center">
          {prize}
        </h4>
      </div>




      {/* Content Section */}
      


      <div className={`h-72 absolute left-0 w-full p-6  transition-all duration-300 flex items-center flex-col ${hoverlorem ? '-translate-y-32 clip-ellipse1 bg-[#8bad2d] pt-20' : 'translate-y-40 clip-ellipse2 pt-9 g-[#b4bf66]'} `}>
        <h3 className="text-xl font-bold mb-2 text-center pb-2">
          {name}
        </h3>
        <p className="text-sm mb-4 text-center opacity-100 transition-opacity duration-300">
          {des}
        </p>
        <a
          target='_blank'
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center text-[#2d7f0b] opacity-100 transition-opacity duration-300 delay-300"
        >
          <span className={`mr-2 transition-all duration-500 cursor-pointer ${hoverlorem?'':'opacity-0'} pb-4 text-md`}  onMouseEnter={()=>sethoverlearn(true)} onMouseLeave={()=>sethoverlearn(false)} onClick={()=>setOverlayandinn()}>Register Now!</span>
        </a>
      </div>



    </div>
  );
};

export default Card;
