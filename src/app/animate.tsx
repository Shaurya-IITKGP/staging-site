"use client"
import React, { useRef }  from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Animate = () =>{

    const circle = [1,2,3,4,5,6];
    const container = useRef(null);

    useGSAP(()=>{
        gsap.from(".circle",{
            scale : 0,
            duration:1,
            repeat:-1,
            ease:"power2.inOut",
            yoyo:true,
            stagger:{
                each:0.4,
            }
        });
    },{scope:container});

    return(
        <div className="">
         

       <div ref= {container} className="flex">
       {circle.map((_, index) => (
          <div key={index} className="circle  gradient-blue">
            {index + 1}
            </div>
       ))}
       </div>
          
        </div>
    )
}

export default Animate;