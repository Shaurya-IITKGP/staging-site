import React from "react";
import Image from "next/image";
import Footer from "../Components/footer";

const Sponsors: React.FC = () => {
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
        Previous Sponsors
      </div>

      {/* Sponsors Container */}
      <div className="flex flex-col items-center p-10 relative z-10 space-y-10">
        {Object.entries(groupedSponsors).map(([type, sponsors]) => (
          <div key={type} className="w-3/5 text-center">
            <div className="text-2xl font-bold mb-4">{type}</div>
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
