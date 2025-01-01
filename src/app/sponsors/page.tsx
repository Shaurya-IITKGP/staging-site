import React from "react";
import Image from "next/image";
import Footer from "../Components/footer";

const Sponsors: React.FC = () => {
  const spons = [
    { logo: `/Logos/Aava_Logo.png` },
    { logo: `/Logos/Aawhan_Logo.png` },
    { logo: `/Logos/ABC_Logo.png` },
    { logo: `/Logos/Coal_Logo.png` },
    { logo: `/Logos/Dainik_Logo.png` },
    { logo: `/Logos/Decathlon_Logo.png` },
    { logo: `/Logos/edugraph_Logo.png` },
    { logo: `/Logos/GB_Logo.png` },
    { logo: `/Logos/ICF_Logo.png` },
    { logo: `/Logos/Jindal_Steel_Logo.png` },
    { logo: `/Logos/KAF_Logo.png` },
    { logo: `/Logos/KKR_Logo.png` },
    { logo: `/Logos/logo17.png` },
    { logo: `/Logos/ONT_Logo.png` },
    { logo: `/Logos/PB_Logo.png` },
    { logo: `/Logos/RD_Logo.png` },
    { logo: `/Logos/TBS_Logo.png` },
    { logo: `/Logos/TKB_Logo.png` },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/mainPage.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30 object-top"
        />
      </div>
      <div className=" flex justify-center items-center mt-32 text-4xl font-bold">
        Previous Sponsors

      </div>

      {/* Sponsors Container */}
      <div className="flex mt-12 flex-wrap justify-center gap-4 p-10 relative z-10">
        {spons.map((val, index) => (
          <div
            key={index}
            className="max-w-[150px] w-full bg-amber-950 bg-opacity-55 shadow-lg shadow-[#d4ad75] rounded-lg  overflow-hidden border border-[#d4ad75]"
          >
            <Image
              className="rounded-lg w-full h-full"
              src={val.logo}
              alt={`Sponsor Logo ${index + 1}`}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Sponsors;