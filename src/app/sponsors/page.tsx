import React from "react";
import Image from "next/image";
import Footer from "../Components/footer";

const Sponsors: React.FC = () => {
  const sponsnew = [
    { logo: `/Logos/Coal_Logo.png`, type: "TITLE PARTNER" },
    { logo: `/Logos/khadi.png`, type: "CO-TITLE PARTNER" },
    { logo: `/Logos/P.png`, type: "GIFTING PARTNER" },
    { logo: `/Logos/BB.png`, type: "FANTASY PARTNER" },
    { logo: `/Logos/PI.png`, type: "TECHNOLOGY PARTNER" },
    { logo: `/Logos/Amanzi.png`, type: "GIFTING PARTNER" },
    { logo: `/Logos/RS.png`, type: "HYDRATION PARTNER" },
    { logo: `/Logos/HED.png`, type: "ESPORTS ENERGY PARTNER" },
    { logo: `/Logos/JS.png`, type: "MUSIC STREAMING PARTNER" },
    { logo: `/Logos/CL.png`, type: "ED-TECH PARTNER" },
    { logo: `/Logos/KH.png`, type: "AUTOMOBILE PARTNER" },
    { logo: `/Logos/SM.png`, type: "EVENTS PARTNER" },
    { logo: `/Logos/VR.png`, type: "ESPORTS CULTURE PARTNER" },
    { logo: `/Logos/CG.png`, type: "ESPORTS LOGISTICS PARTNER" },
    { logo: `/Logos/NS.png`, type: "VR PARTNER" },
    { logo: `/Logos/CC.png`, type: "CHESS PARTNER" },
    { logo: `/Logos/COS.png`, type: "SPORTS EQUIPMENT PARTNER" },
    { logo: `/Logos/CB-LOGO-BLACK.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/AU.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/BC.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/TWM.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/KN.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/JJ.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/PK.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/TAI.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/SN.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/TEG.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/TGH.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/SME.png`, type: "MEDIA PARTNER" },
    
  ];

  const spons = [
    { logo: `/Logos/Coal_Logo.png`, type: "TITLE PARTNER" },
    { logo: `/Logos/KKR_Logo.png`, type: "CO-TITLE PARTNER" },
    { logo: `/Logos/ABC_Logo.png`, type: "PREMIERE PARTNER" },
    { logo: `/Logos/Jindal_Steel_Logo.png`, type: "CORPORATE PARTNER" },
    { logo: `/Logos/PB_Logo.png`, type: "CORPORATE PARTNER" },
    { logo: `/Logos/logo17.png`, type: "MAJOR PARTNER" },
    { logo: `/Logos/GB_Logo.png`, type: "ENERGY PARTNER" },
    { logo: `/Logos/Aava_Logo.png`, type: "HYDRATION PARTNER" },
    { logo: `/Logos/Decathlon_Logo.png`, type: "SPORTS PARTNER" },
    { logo: `/Logos/edugraph_Logo.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/ICF_Logo.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/TBS_Logo.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/KAF_Logo.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/TKB_Logo.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/RD_Logo.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/Dainik_Logo.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/Aawhan_Logo.png`, type: "MEDIA PARTNER" },
    { logo: `/Logos/ONT_Logo.png`, type: "MEDIA PARTNER" },
  ];

  // Group sponsors by type
  const groupedSponsors = spons.reduce<Record<string, typeof spons>>((acc, sponsor) => {
    if (!acc[sponsor.type]) {
      acc[sponsor.type] = [];
    }
    acc[sponsor.type].push(sponsor);
    return acc;
  }, {});

  const groupedSponsorsnew = sponsnew.reduce<Record<string, typeof sponsnew>>((acc, sponsor) => {
    if (!acc[sponsor.type]) {
      acc[sponsor.type] = [];
    }
    acc[sponsor.type].push(sponsor);
    return acc;
  }, {});

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

      <div className="flex justify-center items-center mt-32 text-white text-4xl font-bold underline underline-offset-4">
        Our Sponsors
      </div>

      <div className="flex flex-col items-center p-10 relative z-10 space-y-10">
        {Object.entries(groupedSponsorsnew).map(([type, sponsors]) => (
          <div key={type} className="w-3/5 text-center">
            <div className="text-2xl font-bold text-white mb-4">{type}</div>
            <div className="flex flex-wrap justify-center gap-12">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="max-w-[150px] w-full bg-[rgb(179,143,51)] h-[85%] bg-opacity-75 shadow-[#d4ad75] rounded-lg overflow-hidden border-2 border-[#d4ad75]">
                    <Image
                      className="rounded-lg w-full h-full object-contain"
                      src={sponsor.logo}
                      alt={`Sponsor Logo ${index + 1}`}
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-32 text-white text-4xl font-bold underline underline-offset-4">
        Previous Sponsors
      </div>

      {/* Sponsors Container */}
      <div className="flex flex-col items-center p-10 relative z-10 space-y-10">
        {Object.entries(groupedSponsors).map(([type, sponsors]) => (
          <div key={type} className="w-3/5 text-center">
            <div className="text-2xl font-bold text-white mb-4">{type}</div>
            <div className="flex flex-wrap justify-center gap-12">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="max-w-[150px] w-full bg-amber-950 h-[85%] bg-opacity-75 shadow-[#d4ad75] rounded-lg overflow-hidden border-2 border-[#d4ad75]">
                    <Image
                      className="rounded-lg w-full h-full object-contain"
                      src={sponsor.logo}
                      alt={`Sponsor Logo ${index + 1}`}
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Sponsors;
