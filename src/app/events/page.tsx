"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image from Next.js
import Footer from "../Components/footer";
// import MainNavBar from "../Components/MainNavBar";

interface Event {
  title: string;
  description: string;
  image: string;
  rules: string[];
}

const events: Event[] = [
  {
    title: "Athletics",
    description: "Set, spike, and score in volleyball.",
    rules: [
      "Number of Players:Maximum of 2 players per event from each collage Each player can participate in not more than 3 events(except relay)",

      "Men's Events:",
      "100m, 200m, 400m, 800m, 1500m, 4X100m, 4x400m, 110 m Hurdles, 400 m Hurdles, Long Jump, High Jump, Triple Jump, Shot Put, Hammer throw, Javelin throw, Discuss throw.",

      "Women's Events:",
      "100m, 200m, 400m, 800m, 1500m, 4X100m, 4X400m, Long Jump, High Jump, Shot Put, Javelin, Discuss throw.",

      "Prize Pool:",
      "Rs 39000",
      "CONTACT:",
      "Indrajeet Kumar (+91 7275282141)",
    ],
    image: "/ATHLETICS.png",
  },
  {
    title: "Badminton",
    description: "Show your agility in badminton.",
    rules: [
      "Matches will be played in the best of three sets(each set of 21 points) format",
      "Order of Matches:",
      "Men: First Single/Second Single/First Double/Third Single/Second Double",
      "",
      "Women: First Single/Double/Second Single",
      "Number of Players:",
      "Men: Each college can have a max of 5 members in their team",
      "",
      "Women: Each college can have a maximum of 3 members in their team",
      "Prize Pool:",
      "Rs 28000",
      "CONTACT:",
      "Sudhanshu (+91 9931682446)",
    ],
    image: "/BADMINTON.png",
  },
  {
    title: "Basketball",
    description: "Shoot your shot in the basketball arena.",
    rules: [
      "Each Match will have 4 Quarters, 10 Min each(for both Men and Women). The format will be League cum Knockout",

      "Number of Players:",
      "Each team should have a maximum of 12 players.",

      "Prize Pool:",
      "Rs.59000",
      "CONTACT:",
      "Bonthu Matthews (+91 8688324518)",
    ],
    image: "/BASKETBALL.png",
  },
  {
    title: "Chess",
    description: "Ace the tennis court with your skills.",
    rules: [
      "Unrated Chess Mixed Tournament",

      "Event Format:",
      "Round Robin(15|10)",

      "Number of Players:",
      "Each Team can have Max of 6 players and Min of 4 players",
      "Prize Pool:",
      "Rs.17500",
      "CONTACT:",
      "Bonthu Matthews (+91 8688324518)",
    ],
    image: "/CHESS.png",
  },
  {
    title: "Cricket",
    description: "Experience the thrill of cricket matches.",
    rules: [
      "The format of the tournament will be League cum Knockout.",
      "Number of Overs:",
      "20",
      "Number of Players:",
      "Each team will consist of 11+5 players.",
      "Minimum no. of teams:",
      "8",
      "Maximum no. of teams:",
      "10",
      "Average time for a single match:",
      "3.5 - 4 hrs.",
      "CONTACT:",
      "Aishwarya (+91 7819960702)",
    ],
    image: "/CRICKET.png",
  },

  {
    title: "Football",
    description: "Show your skills in the football tournaments.",
    rules: [
      "The format of the tournament will be League cum knockout(for both Men and Women)",
      "Men:",
      "No of players - Each team will consist of 11+5 players.",
      "Women:",
      "No of players - Each team will consist of 7+3 players.",
      "Prize Pool:",
      "Rs 58600",
      "CONTACT:",
      "Sudhanshu (+91 9931682446)",
    ],
    image: "/FOOTBALL.png",
  },
  {
    title: "Hockey",
    description: "Show your agility in badminton.",
    rules: [
      "Each match will have 4 quarters of 15min each",
      "",
      "The format of the tournament will be League cum knockout",
      "Number of Players:",
      "Each  team(men only) will have 11+5 players",
      "Prize Pool:",
      "Rs 17000",

      "CONTACT:",
      "Indrajeet Kumar  (+91 7275282141)",
    ],
    image: "/HOCKEY.png",
  },
  {
    title: "PowerLifting",
    description: "Show your agility in badminton.",
    rules: [
      "Event format: Individual",
      "",

      "There will be 3 events: Squat, Bench Press and Deadlift in thecategories as listed below.",
      "Men’s categories:",
      "Up to 56 kg, up to 62 kg, up to 69 kg, up to 77 kg, Above 77kg",
      "Prize Pool:",
      "Rs 3200",
      "CONTACT:",
      "Sudhanshu (+91 9931682446)",
    ],
    image: "/POWERLIFTING.png",
  },
  {
    title: "Squash",
    description: "Show your agility in badminton.",
    rules: [
      "Matches will be played individually in a Knockout format",
      "Number of Players:",
      "Men's: Maximum number of Players 4",
      "",
      "Women's:Maximum number of Players 4",
      "Prize Pool: ",
      "Rs 12000",
      "CONTACT:",
      "Aishwarya (+91 7819960702)",
    ],
    image: "/SQUASH.png",
  },
  {
    title: "Table Tennis",
    description: "Show your agility in badminton.",
    rules: [
      "Men's: The matches will be held on the basis of five singles.Each singles shall be played on a best of five game’s format with each game of 11points.The games will be played in ABC-XYZ format.",
      "",
      "Women's:  The matches will be held on the basis of two singles and one doubles.Each match will be played on a best of five game’s format with each game of 11 points.The games will be played in AB-XY format.",

      "Men's:",
      "Maximum of 4 players and minimum 3 players in a team",
      "Women's:",
      "Maximum of 3 players and minimum 2 players in a team",

      "Prize Pool:",
      "Rs 21500",

      "CONTACT:",
      "Aishwarya (+917819960702)",
    ],
    image: "/TABLETENNIS.png",
  },
  {
    title: "Tennis",
    description: "Ace the tennis court with your skills.",
    rules: [
      "Matches will be played in the best of three sets format.The format will be League cum Knockout",
      "Order of Matches:",
      "Men: First Single/Double/Second Single",
      "",
      "Women: First Single/Double/Second Single.",
      "Number of Players:",
      "Men: Each team will have a maximum of 4 players.",
      "",
      "Women: Each team will have a maximum of 3 players.",
      "CONTACT:",
      "Aishwarya (+91 7819960702)",
    ],
    image: "/TENNIS.png",
  },

  {
    title: "Volleyball",
    description: "Set, spike, and score in volleyball.",
    rules: [
      "The tournament shall be played on aLeague cum Knockout FormatMatches will be played in the best of 5 sets format",

      "Number of Players:",
      "Men's: Maximum of 12 players and minimum 6 players in a team",
      "",
      "Women's: Maximum of 12 players and minimum 6 players in a team",

      "Prize Pool:",
      "Rs 56000",

      "CONTACT:",
      "Bonthu Matthews  (+91 8688324518)",
    ],
    image: "/VOLLEYBALL.png",
  },

  {
    title: "WeightLifting",
    description: "Show your agility in badminton.",
    rules: [
      "Each team is allowed to enter at most 2 participants in each category",

      "Men’s Weight Categories:",
      "Up to 56 kg, up to 62 kg, up to 69 kg, up to 77 kg, Above 77kg",
      "Prize Pool:",
      " Rs 3200",

      "CONTACT:",
      "Sudhanshu (+91 9931682446)",
    ],
    image: "/WEIGHTLIFTING.png",
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
            style={{ opacity: 0.2 }}
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
                      <div className="p-5 absolute top-80 bg-transparent z-10">
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
            )
          )}
        </div>

        {/* Modal */}
        {selectedEvent && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center overflow-scroll z-[1001]" style={{scrollbarWidth:"none"}}>
    <div className="relative w-full md:w-[60vw] shadow-lg transform backdrop-blur-lg bg-transparent text-white rounded-md h-full">
      <div className="flex flex-col md:flex-row justify-between items-stretch h-full align-middle bg-black bg-opacity-70">
        <div className="w-full md:w-1/2 md:h-full h-[40vh]">
          <Image
            height={100}
            width={100}
            src={selectedEvent.image}
            alt={selectedEvent.title}
            className="w-full h-full object-contain object-center my-auto"
          />
        </div>

        <div className="w-full md:w-1/2 h-auto p-6 flex flex-col justify-between overflow-auto">
          <h2 className="text-lg uppercase font-bold mt-2">
            {selectedEvent.title}
          </h2>
          <div className="my-auto">
            <h2 className="text-md font-bold mb-2">Rules</h2>
            <ul className="w-full">
              {selectedEvent.rules.map((rule, index) => (
                <li
                  key={index}
                  className={`${
                    index % 2 === 1
                      ? "text-md font-bold mt-2 pr-5"
                      : "list-disc ml-5"
                  }`}
                >
                  {rule}
                </li>
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
      <Footer />
    </>
  );
};

export default EventsPage;
