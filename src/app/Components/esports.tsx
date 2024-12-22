import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {Flip} from "gsap/Flip"
import './esports.css';

gsap.registerPlugin(Flip);

const Esports = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    let layouts = [ "final","plain","columns"] ;
    let curLayout = 0 ;

    // React.useEffect(() => {
    //     const interval = setInterval(nextState, 2000);
        
    //     return () => clearInterval(interval);
    // }, []);

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
            <div ref={containerRef} className="container columns w-screen h-full m-0 p-0">
                <div className="letter F">F</div>
                <div className="letter l">L</div>
                <div className="letter i">I</div>
                <div className="letter p">P</div>
                <div className="for">for</div>
                <div className="gsap">GSAP</div>
            </div>
          
            
           
        </div>
    )
}

export default Esports;