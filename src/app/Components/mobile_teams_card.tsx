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
    <div className="w-80 h-[485px] border-4 border-[#d4ad75] rounded-2xl overflow-hidden relative bg-amber-950 bg-opacity-75">
      {/* Main container */}
      <div className="w-full h-full flex flex-col">
        {/* Image section */}
        <div className="w-full h-[75%] relative">
          <Image
            width={200}
            height={200}
            src={`./team_pics/${name}.jpg`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="h-[15%] w-full flex flex-col justify-center items-center bg-[#d4ad75] bg-opacity-90 backdrop-blur-md">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
          <p className="text-sm text-gray-700">{portfolio}</p>
        </div>

        {/* Social Media Section */}
        <div className="h-[10%] w-full flex justify-center items-center bg-white bg-opacity-90">
          <div className="flex gap-6">
            <a href={i} className="w-7 h-7 hover:scale-110 transition-transform">
              <img src="./instagram.png" className="w-full h-full object-contain" alt="Instagram" />
            </a>
            <a href={l} className="w-7 h-7 hover:scale-110 transition-transform">
              <img src="./linkedin.png" className="w-full h-full object-contain" alt="LinkedIn" />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${m}`}
              className="w-7 h-7 hover:scale-110 transition-transform"
            >
              <img src="./mail.png" className="w-full h-full object-contain" alt="Mail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMobile;
