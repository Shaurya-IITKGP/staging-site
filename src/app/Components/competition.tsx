"use client"
import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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
                end: "+=1000",
                scrub: 1,
                // markers: true
            },
            x: 200,
            ease: "none",
            duration: 3,
            scale:0.8
        });

    }, { scope: container });



    return (
        <div className="">
            <div className="overflow-hidden">
                <div ref={container} className="events p-8">
                    <div className="heading-container w-full">
                       
                    </div>
                    <div className="flex">
                        <section className="panel flex-shrink-0 w-[80%] h-[75vh] bg-gradient-to-br from-yellow-300/20 to-orange-200/30 p-8 snap-center rounded-xl shadow-lg m-4 border-2 border-yellow-200/60 backdrop-blur-sm">
                            <div className="flex h-full gap-8">
                                <div className="w-1/2 h-full">
                                    <Image
                                       height={100}
                                       width={100}
                                        src="/run.png" 
                                        alt="Ancient Indian Archer"
                                        className="w-full h-full object-cover rounded-lg shadow-xl"
                                    />
                                </div>
                                <div className="w-1/2 flex flex-col mt-4">
                                    <h2 className="text-4xl  text-yellow-400 mb-8 font-bold tracking-wide text-center -mt-8">
                                        Dhanurvidya
                                    </h2>
                                    <p className="text-white font-bold text-lg leading-relaxed tracking-wide">
                                        Master the ancient art of archery, as practiced by the legendary warriors of Hastinapur. 
                                        Test your precision and focus in this traditional competition that echoes the teachings 
                                        of Dronacharya himself.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="panel flex-shrink-0 w-[80%] h-[75vh] bg-amber-50/30 p-8 snap-center rounded-xl shadow-lg m-4 border-2 border-amber-100/50 backdrop-blur-sm">
                            <div className="flex h-full gap-8">
                                <div className="w-1/2 h-full">
                                    <Image 
                                    height={100}
                                    width={100}
                                        src="/EsportsEvent.png" 
                                        alt="Sword Fighting Warriors"
                                        className="w-full h-full object-cover rounded-lg shadow-xl"
                                    />
                                </div>
                                <div className="w-1/2 flex flex-col ">
                                    <h2 className="text-4xl text-yellow-500 font-bold mb-4">Khaḍgavidya</h2>
                                    <p className="text-white font-bold text-lg leading-relaxed">
                                        Embrace the way of the sword in this intense display of skill and strategy. 
                                        Channel the spirit of the Rajput warriors as you demonstrate your mastery 
                                        of this noble martial art.
                                    </p>
                                </div>
                            </div>
                        </section>
                        
                        <section className="panel flex-shrink-0 w-[80%] h-[75vh] bg-red-100 bg-opacity-20 p-8 snap-center rounded-xl shadow-lg m-4 border border-gray-200">
                            3
                        </section>
                        <section className="panel flex-shrink-0 w-[80%] h-[75vh] bg-yellow-100 bg-opacity-20 p-8 snap-center rounded-xl shadow-lg m-4 border-2 border-yellow-200/60 backdrop-blur-sm">
                            4
                        </section>
                        <section className="panel flex-shrink-0 w-[80%] h-[75vh] bg-purple-100 bg-opacity-20 p-8 snap-center rounded-xl shadow-lg m-4 border border-gray-200">
                            5
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Competitions;