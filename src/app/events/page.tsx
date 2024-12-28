"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image from Next.js
import MainNavBar from "../Components/MainNavBar";

interface Event {
  title: string;
  description: string;
  image: string;
}

const events: Event[] = [
  { title: "Cricket", description: "Experience the thrill of cricket matches.", image: "/CRICKET.png" },
  { title: "Football", description: "Show your skills in the football tournaments.", image: "/FOOTBALL.png" },
  { title: "Basketball", description: "Shoot your shot in the basketball arena.", image: "/BASKETBALL.png" },
  { title: "Volleyball", description: "Set, spike, and score in volleyball.", image: "/VOLLEYBALL.png" },
  { title: "Tennis", description: "Ace the tennis court with your skills.", image: "/TENNIS.png" },
  { title: "Badminton", description: "Show your agility in badminton.", image: "/BADMINTON.png" },
  { title: "Athletics", description: "Set, spike, and score in volleyball.", image: "/ATHLETICS.png" },
  { title: "Chess", description: "Ace the tennis court with your skills.", image: "/CHESS.png" },
  { title: "Hockey", description: "Show your agility in badminton.", image: "/HOCKEY.png" },
  { title: "PowerLifting", description: "Show your agility in badminton.", image: "/POWERLIFTING.png" },
  { title: "Squash", description: "Show your agility in badminton.", image: "/SQUASH.png" },
  { title: "TableTennis", description: "Show your agility in badminton.", image: "/TABLETENNIS.png" },

  // Add the rest of your 18 events here...
];

const EventsPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleOpenModal = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <>
    
    <div className="relative min-h-screen py-10 overflow-hidden select-none">
   
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/Esports_bg2.jpg" // Replace with your actual image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority // Ensures the image is loaded quickly
          style={{opacity:50}}
        />
      </div>

      <h1 className="text-4xl font-bold text-center mt-20 text-yellow-400">Shaurya Events</h1>
      <div className="space-y-12 px-4 mt-20">
  {/* Render cards in groups */}
  {Array.from({ length: Math.ceil(events.length / 3) }, (_, rowIndex) => (
    <div
      key={rowIndex}
      className="flex flex-wrap justify-center gap-6 md:gap-10"
    >
      {events.slice(rowIndex * 3, rowIndex * 3 + 3).map((event, index) => (
        <div
          key={event.title}
          className={`relative shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
            index === 1 ? "mt-12" : ""
          }`}
          style={{
            width: "100%", // Full width on small screens
            maxWidth: "300px", // Increased width for a more robust look
            border: "4px solid #0000", // Dark blue border
            borderRadius: "0px", // Sharp corners
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)", // Adds depth for a tough appearance
          }}
        >
          {/* Background Image Section with Gradient */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/CardBg3.jpg" // Add your background image path here
              alt="Background"
              layout="fill" // Ensures the image covers the entire div
              objectFit="cover" // Ensures the image covers the entire card
              className="rounded-none" // Ensures the image is behind other content
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" /> {/* Gradient overlay */}
          </div>
          {/* Image Section with Transition Effect */}
          <div className="relative">
            <Image
              width={300}
              height={180}
              src={event.image}
              alt={event.title}
              className="h-64 w-full object-cover object-top rounded-t-none transition-transform duration-300 ease-in-out transform hover:scale-105" // Added transition effect
            />
          </div>
          {/* Content Section */}
          <div className="p-5 relative bg-transparent text-white z-10"> {/* z-10 to ensure content is above the background image */}
            <h2 className="text-lg font-bold text-yellow-300 mb-2">{event.title}</h2> {/* Changed text color for emphasis */}
            <p className="text-sm text-gray-200 font-bold line-clamp-3">{event.description}</p>
            <button
              className="mt-4 w-full bg-amber-950 bg-opacity-75 text-white py-2 px-4 rounded-lg font-semibold hover:bg-white hover:text-black hover:bg-opacity-30 transition-all"
              onClick={() => handleOpenModal(event)}
            >
              See More
            </button>
          </div>
        </div>
      ))}
    </div>
  ))}
</div>



      {/* Modal */}
      {selectedEvent && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
  
    <div
      className="relative w-11/12 md:w-2/5 overflow-hidden shadow-lg transform bg-black text-white"
      // style={{
      //   clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)', // Creates a parallelogram
      // }}
    >
    <div className="flex flex-col md:flex-row justify-between">
  <div>
    <Image
      height={100}
      width={100}
      src={selectedEvent.image}
      alt={selectedEvent.title}
      className="h-80 w-full object-contain object-top"
    />
  </div>
  <div className="p-6 flex flex-col justify-between"> 
    <div>
      <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
      <p className="text-gray-300 mb-6">{selectedEvent.description}</p>
    </div>
    <button
      className="w-2/5 bg-white bottom-0 bg-opacity-70 text-black py-2 px-4 rounded transition-colors mt-auto" // Added mt-auto
      onClick={handleCloseModal}
    >
      Close
    </button>
  </div>
</div>
    </div>
  </div>
)}

    </div>
    </>
  );
};

export default EventsPage;
