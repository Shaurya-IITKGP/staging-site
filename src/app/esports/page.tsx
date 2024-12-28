"use client";
import Esports from "../Components/esportsAnimation";
import Image from "next/image";

const page = () => {
  return (
    <div className="h-screen w-full relative"> {/* Add z-0 here */}
      <Image
        src="/Esports_bg.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-30"
      />

      <div className="relative h-full w-full grid grid-cols-12 grid-rows-12 gap-0">
        <div
          className="col-start-1 row-start-1 col-span-5 row-span-5 w-full h-full object-contain"
          style={{ transform: "scale(0.5)", transformOrigin: "top left" }}
        >
          {/* <Esports /> */}
        </div>

        <div className="col-start-10 col-span-2 row-start-10 row-span-1 w-full h-full">
          <button className="before:ease relative h-12 w-40 overflow-hidden border border-yellow-800 bg-yellow-700 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-yellow-800 hover:before:-translate-x-40">
            <span className="relative font-mono">Register Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
