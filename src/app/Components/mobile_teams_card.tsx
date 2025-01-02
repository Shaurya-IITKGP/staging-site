import React from "react";
import Image from "next/image";

interface Cardprops {
  name: string;
  portfolio: string;
  i: string; // Instagram link
  l: string; // LinkedIn link
  f: string; // Facebook link
  m: string; // Email
}

const CardMobile: React.FC<Cardprops> = ({ name, portfolio, i, l, f, m }) => {
  return (
    <div className="w-80 h-[485px] p-2 border-4 border-[#d4ad75] rounded-2xl overflow-hidden relative bg-amber-950 bg-opacity-75 flex flex-col">
      {/* Image */}
      <div className="w-full h-3/4 flex justify-center items-center">
        <Image
          width={200}
          height={200}
          src={`./team_pics/${name}.jpg`}
          alt={name}
          className="w-full h-full object-cover rounded-2xl" // Use object-cover to maintain aspect ratio
        />
      </div>

      {/* Content Section */}
      <div className="h-1/4 w-full flex flex-col justify-center items-center bg-[#d4ad75] backdrop-blur-md rounded-t-2xl">
        <h3 className="text-xl font-bold text-center text-gray-800">{name}</h3>
        <p className="text-lg mb-2 text-center text-gray-600">{portfolio}</p>
      </div>

      {/* Social Media Section */}
      <div className="w-full flex justify-center items-center bg-white pb-3 pt-2 mb-1 rounded-b-2xl"> {/* Increased padding (py-4) */}
        <div className="flex gap-4">
          <a href={i} className="w-8 h-8">
            <img src="./instagram.png" className="w-full h-full object-cover" alt="Instagram" />
          </a>
          <a href={l} className="w-8 h-8">
            <img src="./linkedin.png" className="w-full h-full object-cover" alt="LinkedIn" />
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${m}`}
            className="w-8 h-8"
          >
            <img src="./mail.png" className="w-full h-full object-cover" alt="Mail" />
          </a>
          <a href={`${f}`} className="w-8 h-8 object-cover" target="_blank"><img src="./facebook.png" className=""/></a>
        </div>
      </div>
    </div>
  );
};

export default CardMobile;
