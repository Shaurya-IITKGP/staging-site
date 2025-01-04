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
                toggleActions:"restart pause reverse pause",
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
                        <section className="panel flex-shrink-0 w-[80%] h-[75vh] bg-amber-50/30 p-8 snap-center rounded-xl shadow-lg m-4 border-2 border-amber-100/50 backdrop-blur-sm">
                            <div className="flex h-full gap-8">
                                <div className=" h-full">
                                    <Image
                                       height={100}
                                       width={100}
                                        src="/shauryaRunChallenge.png" 
                                        alt="Ancient Indian Archer"
                                        className="w-full h-full object-cover rounded-lg shadow-xl"
                                    />
                                </div>
                                <div className="w-[50%] flex flex-col mx-auto justify-evenly ">
                                    <h2 className="text-4xl  text-yellow-400 font-bold tracking-wide text-center  ">
                                        Shaurya Run Challenge
                                    </h2>
                                    <p className="text-white font-bold text-lg leading-relaxed text-justify">
    🏃‍♀ Get ready to run with the #ShauryaRunChallenge! On this National Sports Day, celebrate fitness, 
    competition, and sportsmanship. Whether it’s a 2.2K sprint or a helipad marathon, lace up and hit the 
    track! Track your run with a running app, share your video with tracker stats (distance, time, etc.) on 
    Facebook or Instagram, and tag Shaurya to get featured. Challenge three friends to join the fun. 🌟 
    Let’s honor the legacy of sports in India and inspire others to get moving!
</p>

                                </div>
                            </div>
                        </section>

                        <section className="panel flex-shrink-0 w-[80%] h-[75vh] bg-amber-50/30 p-8 snap-center rounded-xl shadow-lg m-4 border-2 border-amber-100/50 backdrop-blur-sm">
                            <div className="flex h-full gap-8">
                                <div className=" h-full">
                                    <Image
                                       height={100}
                                       width={100}
                                        src="/EsportsEvent.png" 
                                        alt=""
                                        className="w-full h-full object-cover rounded-lg shadow-xl"
                                    />
                                </div>
                                <div className="w-[50%] flex flex-col mt-4 mx-auto justify-center">
                                    <h2 className="text-4xl  text-yellow-400 mb-4 font-bold tracking-wide text-center ">
                                        E-Sports Talent Arena
                                    </h2>
                                    <p className="text-white font-bold text-lg leading-relaxed tracking-wide text-center">
                                        Shaurya and IIT KGP Sports invite you to the ultimate E-Sports experience 🎮! Join us for two electrifying
                                         days at IIT Kharagpur, where gaming meets fun. Experience BGMI, Valorant, FIFA, and more, along with a
                                         professional F1 race car simulator and PlayStation zone. Enjoy free TVS Apache test rides, Nissin Cup 
                                         Noodles, and win official College Rivals merchandise. 📅 Date: 21st-22nd October, ⏰ Time: 2 PM–8 PM,
                                          📍 Venue: Gymkhana Foyer. Don’t miss out on this FREE event for students!

                                    </p>
                                </div>
                            </div>
                        </section>
                        
                        <section className="panel flex-shrink-0 w-[80%] h-[75vh] bg-amber-50/30 bg-opacity-20 p-8 snap-center rounded-xl shadow-lg m-4 border border-amber-100/50">
                            <div className="flex h-full gap-8">
                                <div className=" h-full">
                                    <Image
                                       height={100}
                                       width={100}
                                        src="/collegeRivals2.jpg" 
                                        alt=""
                                        className="w-full h-full object-cover rounded-lg shadow-xl"
                                    />
                                </div>
                                <div className="w-[50%] flex flex-col mt-4 mx-auto justify-center">
                                    <h2 className="text-4xl  text-yellow-400 mb-4 font-bold tracking-wide text-center ">
                                        College Rivals 2
                                    </h2>
                                    <p className="text-white font-bold text-lg leading-relaxed tracking-wide text-center">
                                        Get ready, Shaurya IIT Kharagpur! Unleash your gaming spirit and experience challenges like never before!
                                        🎮🔥 Join us for an epic lineup of BGMI, Valorant, and EAFc24, followed by a thrilling DJ party.
                                        It’s all happening on 🗓 21st October, 📍 at Shaurya IIT Kharagpur. Let’s celebrate gaming, music,
                                        and camaraderie as we bring gamers together for an unforgettable day of fun and excitement!

                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="panel flex-shrink-0 w-[80%] h-[75vh] bg-amber-50/30 p-8 snap-center rounded-xl shadow-lg m-4 border-2 border-amber-100/50 backdrop-blur-sm">
                            <div className="flex h-full gap-8">
                                <div className=" h-full">
                                    <Image
                                       height={100}
                                       width={100}
                                        src="/f1.png" 
                                        alt=""
                                        className="w-full h-full object-cover rounded-lg shadow-xl"
                                    />
                                </div>
                                <div className="w-[50%] flex flex-col mt-4 mx-auto justify-center">
                                    <h2 className="text-4xl  text-yellow-400 mb-4 font-bold tracking-wide text-center ">
                                        Italian Grand Prix
                                    </h2>
                                    <p className="text-white font-bold text-lg leading-relaxed tracking-wide text-center">
                                        Feel the adrenaline as F1 titans clash at the Italian Grand Prix live stream hosted by @shaurya.iitkgp 
                                        and @team.kart. 🏎️ Experience the high-speed action with an F1 car simulator and witness TeamKART's 
                                        combustion car K6 model. 🍔 Grab delicious bites at food stalls and enjoy an electrifying atmosphere. 
                                        🗓 Date: 1st September, ⏰ Time: 6 PM, 📍 Venue: Gymkhana Foyer. Don’t miss this unmissable motorsport event!

                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="panel flex-shrink-0 w-[80%] h-[75vh] bg-amber-50/30 bg-opacity-20 p-8 snap-center rounded-xl shadow-lg m-4 border border-amber-100/50">
                            <div className="flex h-full gap-8">
                                <div className=" h-full">
                                    <Image
                                       height={100}
                                       width={100}
                                        src="/conquerTheCAT.png" 
                                        alt=""
                                        className="w-full h-full object-cover rounded-lg shadow-xl"
                                    />
                                </div>
                                <div className="w-[50%] flex flex-col mt-4 mx-auto justify-center">
                                    <h2 className="text-4xl  text-yellow-400 mb-4 font-bold tracking-wide text-center ">
                                        Conquer The CAT
                                    </h2>
                                    <p className="text-white font-bold text-lg leading-relaxed tracking-wide text-center">
                                        Ready to ace the CAT? 📚 Join us for an exclusive seminar with Mr. Nikunj Bhagat, IIM Bangalore
                                         alumnus and CAT mentor with 25 years of experience. Learn insider tips and strategies to boost your
                                          preparation to the next level. Open to all students, this session is your gateway to success. 
                                          🗓 Date: 9th November, ⏰ Time: 6:30 PM, 📍 Venue: Bhatnagar Auditorium. Don’t miss this 
                                          opportunity to get ahead!

                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="panel flex-shrink-0 w-[80%] h-[75vh] bg-amber-50/30 bg-opacity-20 p-8 snap-center rounded-xl shadow-lg m-4 border border-gray-200">
                            <div className="flex h-full gap-8">
                                <div className=" h-full">
                                    <Image
                                       height={100}
                                       width={100}
                                        src="/shauryaIntroSeminar.png" 
                                        alt=""
                                        className="w-full h-full object-cover rounded-lg shadow-xl"
                                    />
                                </div>
                                <div className="w-[50%] flex flex-col mt-4 mx-auto justify-center">
                                    <h2 className="text-4xl  text-yellow-400 mb-4 font-bold tracking-wide text-center ">
                                        Shaurya Introductory Seminar
                                    </h2>
                                    <p className="text-white font-bold text-lg leading-relaxed tracking-wide text-center">
                                        "Champions keep playing until they get it right." ~Billie Jean King. 🌟 Join Shaurya’s introductory 
                                        seminar and discover IIT Kharagpur’s largest sports fest. Learn how you can be part of this 
                                        adrenaline-filled event and embark on your journey to glory. 🗓 Date: 24th August 2024,
                                        ⏰ Time: 6 PM onwards, 📍 Venue: Kalidas Auditorium. We’re excited to see you there—don’t 
                                        miss your chance to shine!
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Competitions;