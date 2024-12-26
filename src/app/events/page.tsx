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
    
    <div className="relative min-h-screen py-10 overflow-hidden">
    <MainNavBar/>
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/mainPage3.jpg" // Replace with your actual image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority // Ensures the image is loaded quickly
        />
      </div>

      <h1 className="text-4xl font-bold text-center mb-8 text-white">Shaurya Events</h1>
      <div className="space-y-12 px-4">
        {/* Render cards in groups of three */}
        {Array.from({ length: Math.ceil(events.length / 3) }, (_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-8">
            {events.slice(rowIndex * 3, rowIndex * 3 + 3).map((event, index) => (
              <div
                key={event.title}
                className={`relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                  index === 1 ? "mt-8" : ""
                }`}
                style={{ width: "280px" }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-72 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                  <p className="text-gray-600">{event.description}</p>
                  <button
                    className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                    onClick={() => handleOpenModal(event)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
              <p className="text-gray-700 mb-6">{selectedEvent.description}</p>
              <button
                className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default EventsPage;
