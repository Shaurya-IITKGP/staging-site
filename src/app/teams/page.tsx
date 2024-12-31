import TeamsPage2 from "../Components/new";
import CardsmobileComponent from "../Components/mobile_teams_component";
import Image from "next/image";



export default function Home() {
    const team=[['Tejashwi Kumar Jha','Executive','https://www.instagram.com/jha_tejashwi?igsh=cW9kb25sdm9xMjIx','https://www.facebook.com/tejaswi.jha.3','https://www.linkedin.com/in/tejashwi-kumar-jha-b988ba245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','tejashwijha.shaurya.iitkgp@gmail.com'],
                ['Jival Chorawala','Executive','','',''],
                ['Chavi Agarwal','Executive','https://www.instagram.com/chaviagarwal23/profilecard/?igsh=MXExcXN4aWdlaDI0eg==','https://m.facebook.com/chavi.agarwal.3386/','https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav','chaviagarwal.shaurya.iitkgp@gmail.com'],
                ['Brij Patel','Finance','https://www.instagram.com/_.brij_patel._/profilecard/?igsh=MWs5ZmhlOWIwajI2ZA==','https://www.facebook.com/brij.patel.1848816?mibextid=ZbWKwL','https://www.linkedin.com/in/brij-patel-a33709250','brij.patel@shauryaiitkgp.in'],
                ['Pranjal Paliwal','Finance','https://www.instagram.com/pranjalpaliwal4852/profilecard/?igsh=MTExMm0xbW55YTN1','','https://www.linkedin.com/in/pranjal-paliwal925','pranjalpaliwal.shaurya.iitkgp@gmail.com'],
                ['Sudhanshu Kumar','Events','https://www.instagram.com/kr_.sud?igsh=aXRubnlidGlxb3A1','','http://linkedin.com/in/sudhanshu-kumar-094b10273','sudhanshukr.shaurya.iitkgp@gmail.com'],
                ['Matthews Bonthu','Events','https://www.instagram.com/matthews_bonthu/','','https://www.linkedin.com/in/matthews-bonthu-99b32719b/','matthews.bonthu@shauryaiitkgp.in'],
                ['Indrajeet Kumar','Events','https://www.instagram.com/_indrajeetkumar_/profilecard/?igsh=MXI3cWdodm54NHo1cQ==','https://www.facebook.com/profile.php?id=100086280951357&mibextid=ZbWKwL','https://www.linkedin.com/in/indrajeet-kumar-050919259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','knp.indrajeetkumar@gmail.com'],
                ['Sahil Sinha','Web','https://www.instagram.com/sahilsinha_11/','https://www.facebook.com/profile.php?id=100088538255044','https://www.linkedin.com/in/sahil-sinha-a53b4925a/','sahilsinha.shaurya.iitkgp@gmail.com'],
                ['Pranjul Shukla','Web','','','','pranjul.shukla@shauryaiitkgp.in'],
                ['Rakesh Tella','Publicity','https://www.instagram.com/rakesh_tella/','https://www.facebook.com/share/4b2k7qVANWJ5C5Z9/','https://in.linkedin.com/in/rakesh-tella8','rakesh.tella@shauryaiitkgp.in'],
                ['Hemant Kamble','Publicity','https://www.instagram.com/h_v_kamble/profilecard/?igsh=cWU4Z3Qzb25oNDZt','https://www.facebook.com/hemant.kamble.9803150?mibextid=kFxxJD','https://www.linkedin.com/in/hemant-kamble-7b5378229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','hemantkamble.shaurya.iitkgp@gmail.com'],
                ['Tuhsin Suhana Rahman','Publicity','https://www.instagram.com/tuhsin13/','https://www.facebook.com/profile.php?id=100086747262244','https://www.linkedin.com/in/tuhsin-suhana-rahman-5573a8251/','tuhsinsrahman.shaurya.iitkgp@gmail.com'],
                ['Kushal Kushwaha','Logistics','https://www.instagram.com/kushalkushwaha37/profilecard/?igsh=emZnb2Q2OWMwem1r','','https://www.linkedin.com/in/kushal-kushwaha-223055278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','kushal.shaurya.iitkgp@gmail.com'],
                ['Ayush Garg','Logistics','https://www.instagram.com/gargayush.2412/','https://www.facebook.com/profile.php?id=100087253047803','https://www.linkedin.com/in/ayush-garg-527710316','ayushgarg.shaurya.iitkgp@gmail.com'],
                ['Pranjal Kanodia','Logistics','','','','Pranjalkanodia11@gmail.com'],
                ['Deepak Mina','Design','https://www.instagram.com/archive_deepak?igsh=cHQ4ZzFrM3ZpZDZz','https://m.facebook.com/profile.php?mibextid=wwXIfr&mibextid=wwXIfr','https://www.linkedin.com/in/deepak-mina-1bb783253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app','deepak2020ibs@gmail.com'],
                ['Sai Chetan Kumar Sirivisetti ','Design','https://www.instagram.com/s.chetan_27/profilecard/?igsh=MTYydWFneG11M2Rqeg==','https://www.facebook.com/share/14UfpMCKyr/','https://www.linkedin.com/in/sai-chetan-kumar-sirivisetti-612a85259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','chetankumar10021@gmail.com'],
                ['Bhuvan Raj Naik','Design','https://www.instagram.com/bhuvanraj.05/','','https://www.linkedin.com/in/bhuvanrajguguloth05/','bhuvanraj.shaurya.iitkgp@gmail.com'],
                ['Shaurya Pratap Singh','Sponsorship','https://www.instagram.com/_shaurya.ps?igsh=aGwxMGgzdDZ4djJ4','','','shauryaps291204@gmail.com'],
                ['Samrat Koushik Shaw','Sponsorship','https://www.instagram.com/samrat.koushik_/','https://www.facebook.com/samrat.koushik.shaw/','https://www.linkedin.com/in/samratkoushik/','samrat.koushik@shauryaiitkgp.in'],
                ['Preet Panchal','Sponsorship','','','']]
    

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
        <div className="fixed inset-0 z-0">
                  <Image
                    src="/BgMainSite.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-30"
                  />
                </div>

      <div className="flex k1:flex-row flex-col gap-10 k1:gap-0 justify-between items-center">
                <div className="flex k1:flex-col flex-row gap-6 k1:gap-0 text-7xl font-mono ml-0 k1:ml-24">
                  <div className="">Executives</div>  
                  <div className="">And</div> 
                  <div className="">Finance</div> 
                </div>

                <div className="k1:mr-24 mr-0"><TeamsPage2 arr={team.slice(0,5)}/></div>
      </div>

        <div className="flex k1:flex-row flex-col gap-10 k1:gap-0 justify-between items-center">
          <div className="flex k1:flex-col flex-row gap-6 k1:gap-0 text-7xl font-mono ml-0 k1:ml-24">
              <div className="">Events</div>  
              <div className="">And</div> 
              <div className="">Web</div> 
          </div>
          <div className="k1:mr-24 mr-0"><TeamsPage2 arr={team.slice(5,10)}/></div>
        </div>

        <div className="flex k1:flex-row flex-col gap-10 k1:gap-0 justify-between items-center">
                <div className="flex k1:flex-col flex-row gap-6 k1:gap-0 text-7xl font-mono ml-0 k1:ml-24">
                  <div className="">Publicity</div>  
                  <div className="">And</div> 
                  <div className="">Logistics</div> 
                </div>

                <div className="k1:mr-24 mr-0"><TeamsPage2 arr={team.slice(10,16)}/></div>
        </div>

        <div className="flex k1:flex-row flex-col gap-10 k1:gap-0 justify-between items-center">
                <div className="flex k1:flex-col flex-row gap-6 k1:gap-0 text-7xl font-mono ml-0 k1:ml-24">
                <div className="">Design</div>  
                {/* <div className="">And</div> 
                <div className="">Logistics</div>  */}
                </div>

                <div className="k1:mr-24 mr-0"><TeamsPage2 arr={team.slice(16,19)}/></div> 
        </div>

        <div className="flex k1:flex-row flex-col gap-10 k1:gap-0 justify-between items-center">
                <div className="flex k1:flex-col flex-row gap-6 k1:gap-0 text-7xl font-mono ml-0 k1:ml-24">
                <div className="">Sponsorship</div>  
                {/* <div className="">And</div> 
                <div className="">Logistics</div>  */}
                </div>

                <div className="k1:mr-24 mr-0"><TeamsPage2 arr={team.slice(19)}/></div> 
        </div>

       
      </div>
      <div className="flex justify-center items-center w-screen ml-0 k2:hidden"><CardsmobileComponent team={team}/></div>
    </div>
  );
}