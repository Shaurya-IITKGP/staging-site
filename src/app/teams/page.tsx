"use client";
import TeamsPage2 from "../Components/new";
import CardsmobileComponent from "../Components/mobile_teams_component";
import Image from "next/image";
import { useState } from "react";
import Footer from "../Components/footer";

export default function Home() {
  const [isExecOpen, setIsExecOpen] = useState(true);
  const [isFinOpen, setIsFinOpen] = useState(false);
  const [isLogiOpen, setIsEventsOpen] = useState(false);
  const [isEventsOpen, setIsLogiOpen] = useState(false);
  const [isSponsOpen, setIsSponsOpen] = useState(false);
  const [isWebOpen, setIsWebOpen] = useState(false);
  const [isPubOpen, setIsPubOpen] = useState(false);
  const [isDesignOpen, setIsDesignOpen] = useState(false);

  const handleSectionClick = (section:any) => {
    setIsExecOpen(section === "executives");
    setIsFinOpen(section === "finance");
    setIsEventsOpen(section === "events");
    setIsSponsOpen(section === "sponsor");
    setIsWebOpen(section === "web");
    setIsPubOpen(section === "publicity");
    setIsDesignOpen(section === "design");
    setIsLogiOpen(section === "logistics");

  };

  const team = [
    ['Tejashwi Kumar Jha', 'Executive', 'https://www.instagram.com/jha_tejashwi?igsh=cW9kb25sdm9xMjIx', 'https://www.facebook.com/tejaswi.jha.3', 'https://www.linkedin.com/in/tejashwi-kumar-jha-b988ba245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 'tejashwijha.shaurya.iitkgp@gmail.com'],
    ['Jival Chorawala', 'Executive', 'https://www.instagram.com/jival_c/profilecard/?igsh=dW5yZXI4bDNtZnl3', '', 'http://linkedin.com/in/jivalchorawala','jivalchorawala.shaurya.iitkgp@gmail.com'],
    ['Chavi Agarwal', 'Executive', 'https://www.instagram.com/chaviagarwal23/profilecard/?igsh=MXExcXN4aWdlaDI0eg==', 'https://m.facebook.com/chavi.agarwal.3386/', 'https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav', 'chaviagarwal.shaurya.iitkgp@gmail.com'],
    ['Brij Patel', 'Finance', 'https://www.instagram.com/_.brij_patel._/profilecard/?igsh=MWs5ZmhlOWIwajI2ZA==', 'https://www.facebook.com/brij.patel.1848816?mibextid=ZbWKwL', 'https://www.linkedin.com/in/brij-patel-a33709250', 'brij.patel@shauryaiitkgp.in'],
    ['Pranjal Paliwal', 'Finance', 'https://www.instagram.com/pranjalpaliwal4852/profilecard/?igsh=MTExMm0xbW55YTN1', '', 'https://www.linkedin.com/in/pranjal-paliwal925', 'pranjalpaliwal.shaurya.iitkgp@gmail.com'],
    ['Sudhanshu Kumar', 'Events', 'https://www.instagram.com/kr_.sud?igsh=aXRubnlidGlxb3A1', '', 'http://linkedin.com/in/sudhanshu-kumar-094b10273', 'sudhanshukr.shaurya.iitkgp@gmail.com'],
    ['Matthews Bonthu', 'Events', 'https://www.instagram.com/matthews_bonthu/', '', 'https://www.linkedin.com/in/matthews-bonthu-99b32719b/', 'matthews.bonthu@shauryaiitkgp.in'],
    ['Indrajeet Kumar', 'Events', 'https://www.instagram.com/_indrajeetkumar_/profilecard/?igsh=MXI3cWdodm54NHo1cQ==', 'https://www.facebook.com/profile.php?id=100086280951357&mibextid=ZbWKwL', 'https://www.linkedin.com/in/indrajeet-kumar-050919259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 'knp.indrajeetkumar@gmail.com'],
    ['Sahil Sinha', 'Tech', 'https://www.instagram.com/sahilsinha_11/', 'https://www.facebook.com/profile.php?id=100088538255044', 'https://www.linkedin.com/in/sahil-sinha-a53b4925a/', 'sahilsinha.shaurya.iitkgp@gmail.com'],
    ['Pranjul Shukla', 'Tech', 'https://www.instagram.com/captaincoro11/?hl=en', '','https://www.linkedin.com/in/pranjul-shukla-219772258/', 'captaincoro444@gmail.com' ,'https://drive.google.com/file/d/1FkmZOGQrdKocy8Zopry4l1fzVJl4eH3a/view?usp=drive_link'],
    ['Rakesh Tella', 'Publicity And Marketing', 'https://www.instagram.com/rakesh_tella/', 'https://www.facebook.com/share/4b2k7qVANWJ5C5Z9/', 'https://in.linkedin.com/in/rakesh-tella8', 'rakesh.tella@shauryaiitkgp.in'],
    ['Hemant Kamble', 'Publicity And Marketing', 'https://www.instagram.com/h_v_kamble/profilecard/?igsh=cWU4Z3Qzb25oNDZt', 'https://www.facebook.com/hemant.kamble.9803150?mibextid=kFxxJD', 'https://www.linkedin.com/in/hemant-kamble-7b5378229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 'hemantkamble.shaurya.iitkgp@gmail.com'],
    ['Tuhsin Suhana Rahman', 'Publicity And Marketing', 'https://www.instagram.com/tuhsin13/', 'https://www.facebook.com/profile.php?id=100086747262244', 'https://www.linkedin.com/in/tuhsin-suhana-rahman-5573a8251/', 'tuhsinsrahman.shaurya.iitkgp@gmail.com'],
    ['Kushal Kushwaha', 'Logistics', 'https://www.instagram.com/kushalkushwaha37/profilecard/?igsh=emZnb2Q2OWMwem1r', '', 'https://www.linkedin.com/in/kushal-kushwaha-223055278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 'kushal.shaurya.iitkgp@gmail.com'],
    ['Ayush Garg', 'Logistics', 'https://www.instagram.com/gargayush.2412/', 'https://www.facebook.com/profile.php?id=100087253047803', 'https://www.linkedin.com/in/ayush-garg-527710316', 'ayushgarg.shaurya.iitkgp@gmail.com'],
    ['Pranjal Kanodia', 'Logistics', 'https://www.instagram.com/pranjalkanodia012/', '', 'https://www.linkedin.com/in/pranjal-kanodia-53a738264', 'pranjalkanodia11@gmail.com'],
    ['Deepak Mina', 'Design', 'https://www.instagram.com/archive_deepak?igsh=cHQ4ZzFrM3ZpZDZz', 'https://m.facebook.com/profile.php?mibextid=wwXIfr&mibextid=wwXIfr', 'https://www.linkedin.com/in/deepak-mina-1bb783253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', 'deepak2020ibs@gmail.com'],
    ['Sai Chetan Kumar Sirivisetti', 'Design', 'https://www.instagram.com/s.chetan_27/profilecard/?igsh=MTYydWFneG11M2Rqeg==', 'https://www.facebook.com/share/14UfpMCKyr/', 'https://www.linkedin.com/in/sai-chetan-kumar-sirivisetti-612a85259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 'chetankumar10021@gmail.com','https://drive.google.com/file/d/1SZIhILlRg7S91pS02c9PBZ9IqEm_Y6to/view?usp=drive_link'],
    ['Bhuvan Raj Naik', 'Design', 'https://www.instagram.com/bhuvanraj.05/', '', 'https://www.linkedin.com/in/bhuvanrajguguloth05/', 'bhuvanraj.shaurya.iitkgp@gmail.com'],
    ['Shaurya Pratap Singh', 'Sponsorship', 'https://www.instagram.com/_shaurya.ps?igsh=aGwxMGgzdDZ4djJ4', '', '', 'shauryaps291204@gmail.com'],
    ['Samrat Koushik Shaw', 'Sponsorship', 'https://www.instagram.com/samrat.koushik_/', 'https://www.facebook.com/samrat.koushik.shaw/', 'https://www.linkedin.com/in/samratkoushik/', 'samrat.koushik@shauryaiitkgp.in'],
    ['Preet Panchal', 'Sponsorship', 'https://www.instagram.com/panchalpreet9/profilecard/?igsh=cTB6a25mYjBmN2dr', '', 'https://www.linkedin.com/in/preet-panchal-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','panchalpreet090304@gmail.com']
  ];

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="flex-col gap-32 k1:gap-0 hidden k2:flex">
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/CardBg.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>

        {/* Sidebar and Content */}
        <div className="flex z-20 k1:flex-row flex-col gap-10 k1:gap-0 justify-between items-center ">
          {/* Sidebar */}
          <div className="bg-[#1a1716] bg-gradient-to-t from-[#070404] to-[#42221f] text-[#E6D5C3] bg-opacity-95 font-semibold p-6  border-l-0 border-2 border-[#d4ad75] rounded-r-lg shadow-lg mt-4">
            <ul className="cursor-pointer z-40 text-[#d4ad75] space-y-6 text-lg">
              <li
                className="hover:text-white hover:bg-black hover:bg-opacity-30 hover:border-2 hover:border-[#d4ad75] hover:scale-105 p-3 rounded-md transition-all duration-300 ease-in-out text-xl"
                onClick={() => handleSectionClick("executives")}
              >
                Executive Heads
              </li>
              
              <li
                className="hover:text-white hover:bg-black hover:bg-opacity-30 hover:border-2 hover:border-[#d4ad75] hover:scale-105 p-3 rounded-md transition-all duration-300 ease-in-out text-xl"
                onClick={() => handleSectionClick("finance")}
              >
                Finance Heads
              </li>
              <li
                className="hover:text-white hover:bg-black hover:bg-opacity-30 hover:border-2 hover:border-[#d4ad75] hover:scale-105 p-3 rounded-md transition-all duration-300 ease-in-out text-xl"
                onClick={() => handleSectionClick("events")}
              >
                Event Heads
              </li>
              <li
                className="hover:text-white hover:bg-black hover:bg-opacity-30 hover:border-2 hover:border-[#d4ad75] hover:scale-105 p-3 rounded-md transition-all duration-300 ease-in-out text-xl"
                onClick={() => handleSectionClick("web")}
              >
                Tech Heads
              </li>
              <li
                className="hover:text-white hover:bg-black hover:bg-opacity-30 hover:border-2 hover:border-[#d4ad75] hover:scale-105 p-3 rounded-md transition-all duration-300 ease-in-out text-xl"
                onClick={() => handleSectionClick("publicity")}
              >
                Publicity And Marketing Heads
              </li>
              <li
                className="hover:text-white hover:bg-black hover:bg-opacity-30 hover:border-2 hover:border-[#d4ad75] hover:scale-105 p-3 rounded-md transition-all duration-300 ease-in-out text-xl"
                onClick={() => handleSectionClick("sponsor")}
              >
                Sponsorship Heads
              </li>
              <li
                className="hover:text-white hover:bg-black hover:bg-opacity-30 hover:border-2 hover:border-[#d4ad75] hover:scale-105 p-3 rounded-md transition-all duration-300 ease-in-out text-xl"
                onClick={() => handleSectionClick("logistics")}
              >
                Logistic Heads
              </li>
              <li
                className="hover:text-white hover:bg-black hover:bg-opacity-30 hover:border-2 hover:border-[#d4ad75] hover:scale-105 p-3 rounded-md transition-all duration-300 ease-in-out text-xl"
                onClick={() => handleSectionClick("design")}
              >
                Design Heads
              </li>
            </ul>
          </div>

          {/* Conditional Sections */}
          {isExecOpen && <TeamsPage2 arr={team.slice(0, 3)} />}
          {isFinOpen && <TeamsPage2 arr={team.slice(3,5)} />}
          {isLogiOpen && <TeamsPage2 arr={team.slice(5,8)} />}
          {isWebOpen && <TeamsPage2 arr={team.slice(8, 10)} />}
          {isPubOpen && <TeamsPage2 arr={team.slice(10, 13)} />}
          {isEventsOpen && <TeamsPage2 arr={team.slice(13, 16)} />}
          {isDesignOpen && <TeamsPage2 arr={team.slice(16, 19)} />}
          {isSponsOpen && <TeamsPage2 arr={team.slice(19)} />}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="flex z-20 mt-32 justify-center items-center w-screen ml-0 k2:hidden">
       <CardsmobileComponent team={team}/>
      </div>
      <Footer/>
    </div>
  );
}

/*
 <div className="flex mt-8 justify-center items-center w-screen ml-0 k2:hidden">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-['Cinzel'] text-[#d4ad75] text-center mb-4">Executives</h2>
            <CardsmobileComponent team={team.slice(0,3)} />
          </div>
          <div>
            <h2 className="text-2xl font-['Cinzel'] text-[#d4ad75] text-center mb-4">Finance</h2>
            <CardsmobileComponent team={team.slice(3,5)} />
          </div>
          <div>
            <h2 className="text-2xl font-['Cinzel'] text-[#d4ad75] text-center mb-4">Events</h2>
            <CardsmobileComponent team={team.slice(5,8)} />
          </div>
          <div>
            <h2 className="text-2xl font-['Cinzel'] text-[#d4ad75] text-center mb-4">Web</h2>
            <CardsmobileComponent team={team.slice(8,10)} />
          </div>
          <div>
            <h2 className="text-2xl font-['Cinzel'] text-[#d4ad75] text-center mb-4">Publicity And Marketing</h2>
            <CardsmobileComponent team={team.slice(10,13)} />
          </div>
          <div>
            <h2 className="text-2xl font-['Cinzel'] text-[#d4ad75] text-center mb-4">Logistics</h2>
            <CardsmobileComponent team={team.slice(13,16)} />
          </div>
          <div>
            <h2 className="text-2xl font-['Cinzel'] text-[#d4ad75] text-center mb-4">Design</h2>
            <CardsmobileComponent team={team.slice(16,19)} />
          </div>
          <div>
            <h2 className="text-2xl font-['Cinzel'] text-[#d4ad75] text-center mb-4">Sponsorship</h2>
            <CardsmobileComponent team={team.slice(19)} />
          </div>
        </div>
      </div>*/ 

