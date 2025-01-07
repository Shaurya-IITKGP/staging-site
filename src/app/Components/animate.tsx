"use client"
import React, { useRef }  from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import '../globals.css'


const Animate = () =>{
    const text = [
        { text: 'U' },
        { text: 'N' },
        { text: 'L' },
        { text: 'E' },
        { text: 'A' },
        { text: 'S' }, // adding space between words
        { text: 'H' },
        { text: ' ' },
        { text: 'T' },
        { text: 'H' },
        { text: 'E' },
        { text: ' ' },
        { text: 'S' },
        { text: 'H' },
        { text: 'A' },
        { text: 'U' },
        { text: 'R' },
        { text: 'Y' },
        { text: 'A' },
    ];
    const container = useRef(null);

    useGSAP(()=>{
        gsap.from(".ancient-letter",{
            opacity: 0,
            y: 20,
            duration: 1.5,
            repeat: -1,
            ease: "power1.inOut",
            yoyo: true,
            stagger: {
                each: 0.15,
            }
        });
    },{scope:container});

    return(
        <div ref={container} className="flex sm:justify-center md:mt-0 mt-12 min-h-[200px] gap-2 flex-col scale-125 xs:flex-row xs:scale-100 xs:gap-8 ">
            <div className="flex flex-wrap justify-center gap-2">
                {text.slice().map((item, index) => (
                    <span 
                        key={index} 
                        className="ancient-letter text-xs md:text-xl
                        text-[#c19661] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]
                        font-bold tracking-wider"
                        style={{
                            textShadow: '0 0 5px rgba(193, 154, 107, 0.5)',
                            
                        }}
                    >
                        {item.text}
                    </span>
                ))}
            </div>
           
        </div>
    )
}

export default Animate;