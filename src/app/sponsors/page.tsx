import React from "react";
import Image from "next/image";
import Footer from "../Components/footer";

const Sponsors: React.FC = () => {
  const spons = [
    { logo: `/Logos/Coal_Logo.png`,type:"TITLE" },
    { logo: `/Logos/KKR_Logo.png`,type:"PREMIER" },
    { logo: `/Logos/ABC_Logo.png`,type:"PREMIER" },
    { logo: `/Logos/Jindal_Steel_Logo.png`,type:"CORPORATE" },
    { logo: `/Logos/PB_Logo.png`,type:"CORPORATE" },
    { logo: `/Logos/logo17.png`,type:"MAJOR" },
    { logo: `/Logos/GB_Logo.png`,type:"ENERGY" },
    { logo: `/Logos/Aava_Logo.png`,type:"HYDRATION" },
    { logo: `/Logos/Decathlon_Logo.png`,type:"SPORTS" },
    { logo: `/Logos/edugraph_Logo.png`,type:"MEDIA" },
    { logo: `/Logos/ICF_Logo.png`,type:"MEDIA" },
    { logo: `/Logos/TBS_Logo.png`,type:"MEDIA" },
    { logo: `/Logos/KAF_Logo.png`,type:"MEDIA" },
    { logo: `/Logos/TKB_Logo.png`,type:"MEDIA" },
    { logo: `/Logos/RD_Logo.png`,type:"MEDIA" },
    { logo: `/Logos/Dainik_Logo.png`,type:"MEDIA" },
    { logo: `/Logos/Aawhan_Logo.png`,type:"MEDIA" },
    { logo: `/Logos/ONT_Logo.png`,type:"MEDIA" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/Esports_bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30 object-top"
        />
      </div>
      <div className="flex justify-center items-center mt-32 text-4xl font-bold">
  Previous Sponsors
</div>

      {/* Sponsors Container */}
      <div className=" flex justify-center">
      <div className="grid justify-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 p-10 relative z-10">
  {spons.map((val, index) => (
  <div>
    <div
      key={index}
      className="max-w-[150px] w-full bg-amber-950 h-[85%] bg-opacity-75  shadow-[#d4ad75] rounded-lg overflow-hidden border-2 border-[#d4ad75]"
    >
      <Image
        className="rounded-lg w-full h-full object-contain"
        src={val.logo}
        alt={`Sponsor Logo ${index + 1}`}
        width={150}
        height={150}
      />
      
    </div>
     <div className="flex justify-center font-semibold text-md pt-2">{val.type}</div>  
     </div>
    
    
    

  ))}
  </div>
</div>
      <Footer/>
    </div>
  );
};

export default Sponsors;
