import TeamsPage2 from "../Components/new";
import CardsmobileComponent from "../Components/mobile_teams_component";



export default function Home() {
  return (
    
    <div className="flex flex-col justify-center min-h-screen">
      {/* Header Section - 30-40% */}
      {/* <div className="bg-[#C4A484] py-12 text-center">
        <h1 className="font-serif text-4xl font-bold">
          Web Team & Executives
        </h1>
      </div> */}

      {/* Teams Section - 60-70% */}
      {/* <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
            rel="stylesheet"
          />
      </Head> */}
      <div className="flex-col gap-32 k1:gap-0 hidden k2:flex">

      <div className="flex k1:flex-row flex-col gap-10 k1:gap-0 justify-between items-center">
                <div className="flex k1:flex-col flex-row gap-6 k1:gap-0 text-7xl font-mono ml-0 k1:ml-24">
                  <div className="">Web</div>  
                  <div className="">And</div> 
                  <div className="">Design</div> 
                </div>

                <div className="k1:mr-24 mr-0"><TeamsPage2/></div>
      </div>

        <div className="flex k1:flex-row flex-col gap-10 k1:gap-0 justify-between items-center">
          <div className="flex k1:flex-col flex-row gap-6 k1:gap-0 text-7xl font-mono ml-0 k1:ml-24">
              <div className="">Sponsorship</div>  
              <div className="">And</div> 
              <div className="">Finance</div> 
          </div>
          <div className="k1:mr-24 mr-0"><TeamsPage2/></div>
        </div>

        <div className="flex k1:flex-row flex-col gap-10 k1:gap-0 justify-between items-center">
                <div className="flex k1:flex-col flex-row gap-6 k1:gap-0 text-7xl font-mono ml-0 k1:ml-24">
                  <div className="">Publicity</div>  
                  <div className="">And</div> 
                  <div className="">Marketing</div> 
                </div>

                <div className="k1:mr-24 mr-0"><TeamsPage2/></div>
        </div>

        <div className="flex k1:flex-row flex-col gap-10 k1:gap-0 justify-between items-center">
                <div className="flex k1:flex-col flex-row gap-6 k1:gap-0 text-7xl font-mono ml-0 k1:ml-24">
                <div className="">Events</div>  
                <div className="">And</div> 
                <div className="">Logistics</div> 
                </div>

                <div className="k1:mr-24 mr-0"><TeamsPage2/></div> 
        </div>

       
      </div>
      <div className="flex justify-center items-center w-screen ml-0 k2:hidden"><CardsmobileComponent/></div>
    </div>
  );
}
