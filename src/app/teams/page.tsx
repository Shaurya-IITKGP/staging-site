import TeamsPage2 from "../Components/new";
import CardsmobileComponent from "../Components/mobile_teams_component";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
       <div className="fixed inset-0 z-0">
                <Image
                  src="/mainPage5.png"
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-30"
                />
              </div>
      <div className="flex-col gap-32 k1:gap-0 hidden k2:flex">
        {/* Teams Section */}
        <div className="flex k1:flex-row flex-col gap-10 k1:gap-0 justify-between items-center">
          <div className="flex k1:flex-col flex-row gap-6 k1:gap-0 text-7xl font-mono ml-0 k1:ml-24">
            <div className="">Web</div>
            <div className="">And</div>
            <div className="">Design</div>
          </div>
          <div className="k1:mr-24 mr-0"><TeamsPage2 /></div>
        </div>
        {/* Other sections... */}
      </div>
      <div className="flex justify-center items-center w-screen ml-0 k2:hidden"><CardsmobileComponent /></div>
    </div>
  );
}