"use client"
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {Flip} from "gsap/Flip"
import './esportsAnimation.css';

gsap.registerPlugin(Flip);

const Esports = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    let layouts = [ "final","plain","columns"] ;
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
            duration:0.7,
            ease: "power2.inOut",
            spin: curLayout === 0,
            simple:true,
            onLeave: elements => gsap.to(elements, {opacity: 0}),
            onEnter: (elements) => gsap.fromTo(elements, {opacity: 0}, {opacity: 1, delay:1}),
        });
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center overflow-hidden m-0 p-0">
            <div ref={containerRef} className="container columns w-screen h-full m-0 p-0  opacity-80">
            <div className="letter E">E</div>
                <div className="letter S border-none rounded-3xl">S</div>
                <div className="letter P">P</div>
                <div className="letter O">O</div>
                <div className="letter R">R</div>
                <div className="letter T">T</div>
                <div className="letter S">S</div>
                <div className="for">by</div>
                <div className="gsap">Shaurya</div>
                </div>
          
            
           
        </div>
    )
}

export default Esports;