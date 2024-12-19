"use client"
import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Competitions = () => {
    const container = useRef(null);

    useGSAP(() => {
       let sections = gsap.utils.toArray(".panel");
        
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease:"none",
            scrollTrigger: {
                trigger: container.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                start: "20px 5%",
                end: "+=2000",
                // markers:true
            }
        });
        gsap.from(".heading-container", {
            scrollTrigger: {
                trigger: ".heading-container",
                start: "top top",
                end: "+=2000",
                scrub: 1,
                // markers: true
            },
            x: 400,
            ease: "none",
            duration: 3,
            scale:0.5
        });

    }, { scope: container });



    return (
        <div className="">
            <div className="overflow-hidden">
                <div ref={container} className="events p-8">
                    <div className="heading-container w-full">
                        <div className="heading text-center mb-8">
                            <h1 className="text-6xl font-bold text-amber-900 mb-2 font-['Cinzel']">
                                Competitions
                            </h1>
                            <p className="text-amber-800/80 text-xl font-semibold tracking-wider">
                                Where Warriors Clash & Legends Rise
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <section className="panel flex-shrink-0 w-1/3 h-[70vh] bg-blue-100 bg-opacity-20 p-8 snap-center rounded-xl shadow-lg m-4 border border-gray-200">
                            1
                        </section>
                        <section className="panel flex-shrink-0 w-1/3 h-[70vh] bg-green-100 bg-opacity-20 p-8 snap-center rounded-xl shadow-lg m-4 border border-gray-200">
                            2
                        </section>
                        <section className="panel flex-shrink-0 w-1/3 h-[70vh] bg-red-100 bg-opacity-20 p-8 snap-center rounded-xl shadow-lg m-4 border border-gray-200">
                            3
                        </section>
                        <section className="panel flex-shrink-0 w-1/3 h-[70vh] bg-yellow-100 bg-opacity-20 p-8 snap-center rounded-xl shadow-lg m-4 border border-gray-200">
                            4
                        </section>
                        <section className="panel flex-shrink-0 w-1/3 h-[70vh] bg-purple-100 bg-opacity-20 p-8 snap-center rounded-xl shadow-lg m-4 border border-gray-200">
                            5
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Competitions;