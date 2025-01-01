"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image from Next.js
// import MainNavBar from "../Components/MainNavBar";

interface Event {
  title: string;
  description: string;
  image: string;
  rules: string[];
}

const events: Event[] = [
  {
    title: "Cricket",
    description: "Experience the thrill of cricket matches.",
    rules: [
      "The format of the tournament will be League cum Knockout.",
      "Number of Overs: 20.",
      "Number of Players: Each team will consist of 11+5 players.",
      "Minimum no. of teams: 8.",
      "Maximum no. of teams: 10.",
      "Average time for a single match: 3.5 - 4 hrs.",
    ],
    image: "/CRICKET.png",
  },
  {
    title: "Football",
    description: "Show your skills in the football tournaments.",
    rules: [
      "The format of the tournament will be league cum knockout.",
      "Men:",
      "No of players - Each team will consist of 11+5 players.",
      "Timing - 25-10-25.",
      "Women:",
      "No of players - Each team will consist of 7+3 players.",
      "Timing - 15-10-15.",
    ],
    image: "/FOOTBALL.png",
  },
  {
    title: "Basketball",
    description: "Shoot your shot in the basketball arena.",
    rules: [
      "Each match will have 4 quarters of 10 minutes (Male and Female).",
      "Format: Round-Robin (participants will be eliminated or selected after certain results).",
      "Number of Players: Each team should have a maximum of 12 players.",
      "Minimum no. of teams: 6+6.",
      "Maximum no. of teams: 8+8.",
      "Total time for a single match: 1 hour.",
    ],
    image: "/BASKETBALL.png",
  },
  {
    title: "Volleyball",
    description: "Set, spike, and score in volleyball.",
    rules: [
      "The format of the tournament will be League cum Knockout.",
      "Number of Players: Each team will consist of 6+6 players.",
      "Minimum no. of teams: 8.",
      "Maximum no. of teams: 12.",
      "Average time for a single match: 45 mins - 1 hour.",
    ],
    image: "/VOLLEYBALL.png",
  },
  {
    title: "Tennis",
    description: "Ace the tennis court with your skills.",
    rules: [
      "Matches will be played in the best-of-eight-games format.",
      "The format will be League cum knockout.",
      "Order of Matches:",
      "Men: First Single/Double/Second Single.",
      "Women: First Single/Double/Second Single.",
      "Number of Players:",
      "Men: Each team will have a maximum of 4 players.",
      "Women: Each team will have a maximum of 3 players.",
    ],
    image: "/TENNIS.png",
  },
  {
    title: "Badminton",
    description: "Show your agility in badminton.",
    rules: [
      "Matches will be played in the best of three sets (each set of 21 points) format.",
      "Order of Matches:",
      "Men: First Single/Second Single/First Double/Third Single/Second Double.",
      "Women: First Single/Double/Second Single.",
      "Number of Players:",
      "Men: Each college can have a maximum of 5 members in their team.",
      "Women: Each college can have a maximum of 3 members in their team.",
    ],
    image: "/BADMINTON.png",
  },
  {
    title: "Athletics",
    description: "Set, spike, and score in volleyball.",
    rules: [
      "Number of players: Max of 2 participants per event from each college.",
      "Each player can participate in not more than 3 events (except Relay).",
      "Men's Events:",
      "100m, 200m, 400m, 800m, 1500m, 4X100m, 4X400m, 110 m Hurdles, 400 m Hurdles, Long Jump, High Jump, Triple Jump, Shot Put, Hammer throw, Javelin throw, Discuss throw.",
      "Women's Events:",
      "100m, 200m, 400m, 800m, 1500m, 4X100m, 4X400m, Long Jump, High Jump, Shot Put, Javelin, Discuss throw.",
    ],
    image: "/ATHLETICS.png",
  },
  {
    title: "Chess",
    description: "Ace the tennis court with your skills.",
    rules: [
      "Format of the tournament will be Swiss League.",
      "Number of Players: Each team will consist of 4 players.",
      "Each match will consist of 4 boards.",
      "The team with the most points across boards wins the match.",
      "Minimum no. of teams: 6.",
      "Maximum no. of teams: 8.",
    ],
    image: "/CHESS.png",
  },
  {
    title: "Hockey",
    description: "Show your agility in badminton.",
    rules: [
      "Format: League cum Knockout.",
      "Timing: 20-5-20 (2 halves of 20 minutes each with a 5-minute break).",
      "Number of Players: Each team will consist of 11+5 players.",
      "Minimum no. of teams: 6.",
      "Maximum no. of teams: 8.",
    ],
    image: "/HOCKEY.png",
  },
  {
    title: "PowerLifting",
    description: "Show your agility in badminton.",
    rules: [
      "Event format: Individual",
      "There will be 3 events: Squat, Bench press, and Deadlift in the categories.",
      "Men’s categories: Under 56kg, 57-62, 63-69, 70-77, Above 77(open)",
    ],
    image: "/POWERLIFTING.png",
  },
  {
    title: "Squash",
    description: "Show your agility in badminton.",
    rules: [
      "Matches will be played in the best of three sets (each set of 21 points) format.",
      "Order of Matches:",
      "Men: First Single/Second Single/First Double/Third Single/Second Double.",
      "Women: First Single/Double/Second Single.",
      "Number of Players:",
      "Men: Each college can have a maximum of 5 members in their team.",
      "Women: Each college can have a maximum of 3 members in their team.",
    ],
    image: "/SQUASH.png",
  },
  {
    title: "TableTennis",
    description: "Show your agility in badminton.",
    rules: [
      "Matches will be played in the best of five games format (11 points each game).",
      "Format of the tournament: League cum Knockout.",
      "Number of  Players:",
      "&nbsp- Men: Each team will consist of a maximum of 4 players.",
      "- Women: Each team will consist of a maximum of 3 players.",
      "- Minimum no. of teams: 6.",
      "- Maximum no. of teams: 8.",
    ],
    image: "/TABLETENNIS.png",
  },

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
      <div className="relative min-h-screen py-10 overflow-hidden select-none mb-10">
        {/* Background Image */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/Esports_bg2.jpg" // Replace with your actual image path
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority // Ensures the image is loaded quickly
            style={{ opacity: 50 }}
          />
        </div>

        <h1 className="text-4xl font-bold text-center mt-20 text-yellow-400">
          Shaurya Events
        </h1>
        <div className="space-y-12 px-4 mt-20">
          {/* Render cards in groups */}
          {Array.from(
            { length: Math.ceil(events.length / 3) },
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap justify-center gap-6 md:gap-10"
              >
                {events
                  .slice(rowIndex * 3, rowIndex * 3 + 3)
                  .map((event, index) => (
                    <div
                      key={event.title}
                      className={`relative shadow-2xl group overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                        ${index === 1 ? "mt-12" : ""}`}
                      style={{
                        width: "100%", // Full width on small screens
                        maxWidth: "300px", // Increased width for a more robust look
                        border: "4px solid #0000", // Dark blue border
                        borderRadius: "0px", // Sharp corners
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)", // Adds depth for a tough appearance
                        clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
                      }}
                    >
                      {/* Background Image Section with Gradient */}
                      <div className="absolute inset-0 -z-10">
                        {/* <Image
                          src="/CardBg3.jpg" // Add your background image path here
                          alt="Background"
                          layout="fill" // Ensures the image covers the entire div
                          objectFit="cover" // Ensures the image covers the entire card
                          className="rounded-none" // Ensures the image is behind other content
                        /> */}
                        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />{" "} */}
                        {/* Gradient overlay */}
                      </div>
                      {/* Image Section with Transition Effect */}
                      <div className="relative">
                        <Image
                          width={100}
                          height={100}
                          src={event.image}
                          alt={event.title}
                          className="h-full w-full object-cover object-top rounded-t-none transition-transform duration-300 ease-in-out transform  bg-opacity-50" // Added transition effect
                        />
                        <div className="bg-yellow-500 filter blur-md w-4 h-full animate-sword-slash absolute opacity-0 top-0"></div>
                      </div>
                      {/* Content Section */}
                      <div className="p-5 absolute top-64 bg-transparent z-10">
                        {" "}
                        <button
                          className="bottom-0 items-end w-48 ml-3 bg-amber-950 bg-opacity-75 text-white py-2 px-4 rounded-lg font-semibold hover:bg-white hover:text-black hover:bg-opacity-30 transition-all"
                          onClick={() => handleOpenModal(event)}
                        >
                          See More
                        </button>
                      </div>
                      <h2 className="text-lg font-bold text-yellow-300 text-center mr-6">
                          {event.title}
                        </h2>{" "}
                    </div>
                  ))}
              </div>
            ),
          )}
        </div>

        {/* Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center overflow-hidden z-50">
            <div className="relative w-full md:w-[60vw] shadow-lg transform backdrop-blur-lg bg-transparent text-white rounded-md lg:overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-stretch h-full align-middle">
                <div className="w-full md:w-1/2 md:h-full h-[40vh]">
                  <Image
                    height={100}
                    width={100}
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-contain object-center my-auto"
                  />
                </div>

                <div className="w-full md:w-1/2 h-auto p-6 flex flex-col justify-between">
                  <h2 className="text-lg uppercase font-bold mb-2">
                    {selectedEvent.title}
                  </h2>
                  <div className="my-auto">
                    <h2 className="text-md font-bold mb-2">Rules</h2>
                    <ul className="list-disc pl-5">
                      {selectedEvent.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                  <br />
                  <button
                    className="w-2/5 mt-2 bg-white bg-opacity-70 text-black py-2 px-4 rounded transition-colors m-auto"
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
