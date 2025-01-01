import React from "react";
// import "../assets/Logos/KKR_Logo.png"
const Card: React.FC = () => {
  const spons = [{logo: `./Logos/Aava_Logo.png`},{logo: `./Logos/Aawhan_Logo.png`},{logo: `./Logos/ABC_Logo.png`},{logo: `./Logos/Coal_Logo.png`},{logo: `./Logos/Dainik_Logo.png`},{logo: `./Logos/Decathlon_Logo.png`},{logo: `./Logos/edugraph_Logo.png`},{logo: `./Logos/GB_Logo.png`},{logo: `./Logos/ICF_Logo.png`},{logo: `./Logos/Jindal_Steel_Logo.png`},{logo: `./Logos/KAF_Logo.png`},{logo: `./Logos/KKR_Logo.png`},{logo: `./Logos/logo17.png`},{logo: `./Logos/ONT_Logo.png`},{logo: `./Logos/PB_Logo.png`},{logo: `./Logos/RD_Logo.png`},{logo: `./Logos/RD_Logo.png`},{logo: `./Logos/TBS_Logo.png`},{logo: `./Logos/TKB_Logo.png`} ]
  return (
    <>
    <img src="" alt="" />
    <div className="flex gap-4 flex-wrap p-10 mt-10">
      {spons.map((val) => (<div className="relative max-w-[150px] mx-auto bg-transparent rounded-lg backdrop-blur-[7px] overflow-hidden transition-transform duration-75 hover:scale-105 hover:brightness-125 group p-[2px]">
        {/* Outer Container for Rotating Border */}
        <div className="absolute inset-[-2px] rounded-lg pointer-events-none animate-border">
          {/* This div holds the rotating border */}
        </div>

        {/* Inner Card */}
        <div className="relative z-10 max-w-[150px] bg-orange-500 mx-auto rounded-lg">{/*we have to put some background image to hide conic gradient */}
          {/* Image container */}
          <div className="w-[150px] h-[150px]">
            <img
              className="rounded-lg w-full h-full"
              src={val.logo}
              alt="NFT"
            />
          </div>

          {/* Shine effect */}
          <div
            className="absolute hidden group-hover:block top-full left-[-50%] w-[12%] h-[220%] bg-gradient-to-r from-transparent via-white/30 
              to-transparent opacity-0 rotate-[-45deg] pointer-events-none group-hover:opacity-100 group-hover:animate-shine"
          ></div>
        </div>

        {/* Keyframes for animations */}
        <style>
          {`
              @keyframes shine {
                0% {
                  top: 100%;
                  left: -50%;
                  opacity: 0;
                }
                10% {
                  opacity: 1;
                }
                50% {
                  top: -50%;
                  left: 50%;
                  opacity: 1;
                }
                100% {
                  top: -100%;
                  left: 150%;
                  opacity: 0;
                }
              }
    
              .group-hover\\:animate-shine {
                animation: shine 0.8s linear forwards;
              }
    
              @keyframes borderRotate {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
    
              /* Outer container with conic gradient animation */
              .animate-border {
                position: absolute;
                inset: -2px; /* 2px inset to create a 2px border around the card */
                border-radius: 10px; /* Match the card's border radius */
                background: transparent;
                background-image: conic-gradient(from 90deg, rgba(168, 239, 255, 0.1), rgba(168, 239, 255, 1) 0.1turn, rgba(168, 239, 255, 1) 0.15turn, rgba(168, 239, 255, 0.1) 0.25turn);
                animation: borderRotate 2.0s linear infinite; /* Infinite rotation */
                z-index: -1;
              }
            `}
        </style>
      </div>))}
      </div>
    </>
  );
};

export default Card;