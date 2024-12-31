"use client";
import React from "react";
import Image from "next/image";

const MobileCompetitions = () => {
    const competitions = [
        {
            title: "Shaurya Run Challenge",
            description: "🏃‍♀ Get ready to run with the #ShauryaRunChallenge! On this National Sports Day, celebrate fitness, competition, and sportsmanship.",
            image: "/shauryaRunChallenge.png" 
        },
        {
            title: "E-Sports Talent Arena",
            description: "Shaurya and IIT KGP Sports invite you to the ultimate E-Sports experience 🎮! Join us for two electrifying days.",
            image: "/EsportsEvent.png" 
        },
        {
            title: "College Rivals 2",
            description: "Get ready, Shaurya IIT Kharagpur! Unleash your gaming spirit and experience challenges like never before! 🎮🔥",
            image: "/collegeRivals2.jpg" 
        },
        {
            title: "Italian Grand Prix",
            description: "Feel the adrenaline as F1 titans clash at the Italian Grand Prix live stream hosted by @shaurya.iitkgp.",
            image: "/f1.png" 
        },
        {
            title: "Conquer The CAT",
            description: "Ready to ace the CAT? 📚 Join us for an exclusive seminar with Mr. Nikunj Bhagat.",
            image: "/conquerTheCAT.png" 
        },
        {
            title: "Shaurya Introductory Seminar",
            description: "Champions keep playing until they get it right. 🌟 Join Shaurya’s introductory seminar and discover IIT Kharagpur’s largest sports fest.",
            image: "/shauryaIntroSeminar.png"
        },
    ];

    return (
        <div className="p-4">
            {/* <h1 className="text-3xl font-bold text-yellow-400 text-center mb-8">Competitions</h1> */}
            <div className="flex flex-col space-y-4">
                {competitions.map((competition, index) => (
                    <div key={index} className="bg-amber-50/30 rounded-xl z-20 shadow-lg p-4 border-2 border-amber-100/50">
                        <Image
                            src={competition.image}
                            alt={competition.title}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover rounded-t-xl"
                        />
                        <h2 className="text-2xl text-yellow-400 font-bold text-center mt-4">{competition.title}</h2>
                        <p className="text-white font-bold text-base leading-relaxed text-center mt-2">
                            {competition.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MobileCompetitions;