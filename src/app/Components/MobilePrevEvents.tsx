"use client";
import React from "react";
import Image from "next/image";

const MobileCompetitions = () => {
    const competitions = [
        {
            title: "Shaurya Run Challenge",
            description: "🏃‍♀ Get ready to run with the #ShauryaRunChallenge! On this National Sports Day, celebrate fitness, competition, and sportsmanship. Whether it’s a 2.2K sprint or a helipad marathon, lace up and hit the track! Track your run with a running app, share your video with tracker stats (distance, time, etc.) on Facebook or Instagram, and tag Shaurya to get featured. Challenge three friends to join the fun.🌟 Let’s honor the legacy of sports in India and inspire others to get moving! ",
            image: "/shauryaRunChallenge.png" 
        },
        {
            title: "E-Sports Talent Arena",
            description: "Shaurya and IIT KGP Sports invite you to the ultimate E-Sports experience 🎮! Join us for two electrifying days at IIT Kharagpur, where gaming meets fun. Experience BGMI, Valorant, FIFA, and more, along with a professional F1 race car simulator and PlayStation zone. Enjoy free TVS Apache test rides, Nissin Cup Noodles, and win official College Rivals merchandise.",
            image: "/EsportsEvent.png" 
        },
        {
            title: "College Rivals 2",
            description: "Get ready, Shaurya IIT Kharagpur! Unleash your gaming spirit and experience challenges like never before! 🎮🔥 Join us for an epic lineup of BGMI, Valorant, and EAFc24, followed by a thrilling DJ party. It’s all happening at Shaurya IIT Kharagpur. Let’s celebrate gaming, music, and camaraderie as we bring gamers together for an unforgettable day of fun and excitement!",
            image: "/collegeRivals2.jpg" 
        },
        {
            title: "Italian Grand Prix",
            description: "Feel the adrenaline as F1 titans clash at the Italian Grand Prix live stream hosted by @shaurya.iitkgp and @team.kart. 🏎️ Experience the high-speed action with an F1 car simulator and witness TeamKART's combustion car K6 model. 🍔 Grab delicious bites at food stalls and enjoy an electrifying atmosphere.",
            image: "/f1.png" 
        },
        {
            title: "Conquer The CAT",
            description: "Ready to ace the CAT? 📚 Join us for an exclusive seminar with Mr. Nikunj Bhagat, IIM Bangalore alumnus  and CAT mentor with 25 years of experience. Learn insider tips and strategies to boost your preparation to the next level. Open to all students, this session is your gateway to success.",
            image: "/conquerTheCAT.png" 
        },
        {
            title: "Shaurya Introductory Seminar",
            description: "'Champions keep playing until they get it right. '~Billie Jean King. 🌟 Join Shaurya’s introductory seminar  and discover IIT Kharagpur’s largest sports fest. Learn how you can be part of this adrenaline-filled event and embark on your journey to glory.",
            image: "/shauryaIntroSeminar.png"
        },
    ];

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-yellow-400 text-center mb-8">Competitions</h1>
            <div className="flex flex-col space-y-4">
                {competitions.map((competition, index) => (
                    <div key={index} className="bg-amber-50/30 rounded-xl z-20 shadow-lg p-4 border-2 border-amber-100/50">
                        <Image
                            src={competition.image}
                            alt={competition.title}
                            width={400}
                            height={200}
                            className="w-full  object-cover rounded-t-xl"
                        />
                        <h2 className="text-2xl text-yellow-400 font-bold text-center mt-4">{competition.title}</h2>
                        <p className="text-white font-normal text-base tracking-tight leading-relaxed  mt-2 text-justify">
                            {competition.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MobileCompetitions;