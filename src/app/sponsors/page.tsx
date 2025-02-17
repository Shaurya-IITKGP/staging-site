import React from "react";
import Image from "next/image";
import Footer from "../Components/footer";

const Sponsors: React.FC = () => {
  const sponsnew = [
    { logo: `/Logos/Coal_Logo.png`, type: "TITLE", link:"https://www.coalindia.in/"},
    { logo: `/Logos/khadi.png`, type: "CO-TITLE", link:"https://www.ekhadiindia.com/" },
    { logo: `/Logos/P.png`, type: "GIFTING", link:"https://www.portronics.com/" },
    { logo: `/Logos/BB.png`, type: "FANTASY", link:"https://www.batball11.com/" },
    { logo: `/Logos/PI.png`, type: "TECHNOLOGY",link:"https://pinnacleinfotech.com/" },
    { logo: `/Logos/Amanzi.png`, type: "GIFTING", link:"https://amanziworld.com/" },
    { logo: `/Logos/RS.png`, type: "HYDRATION", link:"https://www.riverstonehydration.in/" },
    { logo: `/Logos/HED.png`, type: "ESPORTS ENERGY", link:"https://www.hellenergy.com/in/" },
    { logo: `/Logos/JS.png`, type: "MUSIC STREAMING", link:"https://www.jiosaavn.com/" },
    { logo: `/Logos/CL.png`, type: "ED-TECH", link:"https://www.careerlauncher.com/" },
    { logo: `/Logos/KH.png`, type: "AUTOMOBILE", link:"https://keshav.hyundaimotor.in/" },
    { logo: `/Logos/SM.png`, type: "EVENTS", link:"https://www.smsportslifestyle.com/" },
    { logo: `/Logos/VR.png`, type: "ESPORTS CULTURE", link:"https://vrkaa.com/" },
    { logo: `/Logos/CG.png`, type: "ESPORTS LOGISTICS", link:"" /*not found*/ },
    { logo: `/Logos/NS.png`, type: "VR PARTNER", link:"https://noscopegaming.in/" },
    { logo: `/Logos/CC.png`, type: "CHESS", link:"https://www.chess.com/" },
    { logo: `/Logos/COS.png`, type: "SPORTS EQUIPMENT", link:"https://www.cosco.in/" },
    { logo: `/Logos/CB-LOGO-BLACK.png`, type: "MEDIA", link:"https://thecareerbeacon.in/" },
    { logo: `/Logos/AU.png`, type: "MEDIA", link:"https://www.amarujala.com/" },
    { logo: `/Logos/BC.png`, type: "MEDIA", link:"https://www.thebusinessscan.com/" },
    { logo: `/Logos/TWM.png`, type: "MEDIA", link:"https://theweeklymail.com/" },
    { logo: `/Logos/KN.png`, type: "MEDIA", link:"https://knewsindia.in/live-tv/" },
    { logo: `/Logos/JJ.png`, type: "MEDIA", link:"https://www.jagranjosh.com/" },
    { logo: `/Logos/PK.png`, type: "MEDIA", link:"https://www.prabhatkhabar.com/" },
    { logo: `/Logos/TAI.png`, type: "MEDIA", link:"https://theacademicinsights.com/" },
    { logo: `/Logos/SN.png`, type: "MEDIA", link:"https://www.storifynews.com/"  },
    { logo: `/Logos/TEG.png`, type: "MEDIA", link:"https://www.telegraphindia.com/edugraph" },
    { logo: `/Logos/TGH.png`, type: "MEDIA", link:"https://theglobalhues.com/" },
    { logo: `/Logos/SME.png`, type: "MEDIA", link:"https://smestreet.in/" },
  ];

  const spons = [
    { logo: `/Logos/Coal_Logo.png`, type: "TITLE" },
    { logo: `/Logos/KKR_Logo.png`, type: "CO-TITLE" },
    { logo: `/Logos/ABC_Logo.png`, type: "PREMIERE" },
    { logo: `/Logos/Jindal_Steel_Logo.png`, type: "CORPORATE" },
    { logo: `/Logos/PB_Logo.png`, type: "CORPORATE" },
    { logo: `/Logos/logo17.png`, type: "MAJOR" },
    { logo: `/Logos/GB_Logo.png`, type: "ENERGY" },
    { logo: `/Logos/Aava_Logo.png`, type: "HYDRATION" },
    { logo: `/Logos/Decathlon_Logo.png`, type: "SPORTS" },
    { logo: `/Logos/edugraph_Logo.png`, type: "MEDIA" },
    { logo: `/Logos/ICF_Logo.png`, type: "MEDIA" },
    { logo: `/Logos/TBS_Logo.png`, type: "MEDIA" },
    { logo: `/Logos/KAF_Logo.png`, type: "MEDIA" },
    { logo: `/Logos/TKB_Logo.png`, type: "MEDIA" },
    { logo: `/Logos/RD_Logo.png`, type: "MEDIA" },
    { logo: `/Logos/Dainik_Logo.png`, type: "MEDIA" },
    { logo: `/Logos/Aawhan_Logo.png`, type: "MEDIA" },
    { logo: `/Logos/ONT_Logo.png`, type: "MEDIA" },
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
            <div className="text-3xl font-bold text-white mb-8">{type}</div>
            <div className="flex flex-wrap justify-center gap-16">
              {sponsors.map((sponsor, index) => (
                <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center scale-125">
                  <div className="max-w-[150px] w-full bg-[rgb(179,143,51)] h-[85%] bg-opacity-75 shadow-[#d4ad75] rounded-lg overflow-hidden border-2 border-[#d4ad75]">
                    <Image
                      className="rounded-lg w-full h-full object-contain"
                      src={sponsor.logo}
                      alt={`Sponsor Logo ${index + 1}`}
                      width={150}
                      height={150}
                    />
                  </div>
                </a>
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
            <div className="text-3xl font-bold text-white mb-8">{type}</div>
            <div className="flex flex-wrap justify-center gap-16">
              {sponsors.map((sponsor, index) => (
                <a key={index}  className="flex flex-col items-center scale-125">
                  <div className="max-w-[150px] w-full bg-amber-950 h-[85%] bg-opacity-75 shadow-[#d4ad75] rounded-lg overflow-hidden border-2 border-[#d4ad75]">
                    <Image
                      className="rounded-lg w-full h-full object-contain"
                      src={sponsor.logo}
                      alt={`Sponsor Logo ${index + 1}`}
                      width={150}
                      height={150}
                    />
                  </div>
                </a>
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
