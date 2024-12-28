"use client"
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {Flip} from "gsap/Flip"
import './esportsAnimation.css';
import shauryaLogo from "./../../../public/Shaurya_Logo.png"

gsap.registerPlugin(Flip);

const Esports = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    let layouts = [ "final","plain"] ;
    let curLayout = 0 ;

    React.useEffect(() => {
        const interval = setInterval(nextState, 2000);
        
        return () => clearInterval(interval);
    }, []);

    function nextState() {
        const container = containerRef.current;
        if (!container) return;

        const state = Flip.getState(container.querySelectorAll(".letter, .for, .gsap"), {
            props: "color", 
            // simple: true
        }); 
        container.classList.remove(layouts[curLayout]);
        curLayout = (curLayout + 1) % layouts.length;
        container.classList.add(layouts[curLayout]); 
    
        Flip.from(state,{
          
            stagger:0.07,
            duration:0.8,
            ease: "power2.inOut",
            spin: curLayout === 0,
            simple:true,
            onLeave: elements => gsap.to(elements, {opacity: 0}),
            onEnter: (elements) => gsap.fromTo(elements, {opacity: 0}, {opacity: 1, delay:1}),
        });
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center overflow-hidden m-0 p-0 relative">
            <div ref={containerRef} className="container final w-screen h-full m-0 p-0 absolute top-0 left-0 z-10">
                <div className="letter E border-none rounded-3xl">E</div>
                <div className="letter S border-none rounded-3xl">S</div>
                <div className="letter P border-none rounded-3xl">P</div>
                <div className="letter O border-none rounded-3xl">O</div>
                <div className="letter R border-none rounded-3xl">R</div>
                <div className="letter T border-none rounded-3xl">T</div>
                <div className="letter S border-none rounded-3xl">S</div>
                <div className="for">by</div>
                <div className="gsap">
                    <Image 
                    src="Shaurya_Logo.png"
                    alt="shauryaLogo"
                    width={500}
                    height={500}/>
                </div>
            </div>
        </div>
    );
}

export default Esports;