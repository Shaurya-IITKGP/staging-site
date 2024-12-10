import Image from "next/image";
import Animate from "./animate";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="bg-bannerImg bg-repeat bg-opacity-50  bg-cover bg-bttom w-full h-screen">
      <div className="flex justify-center items-center h-screen pt-20">
        <Animate />
       
      </div>
      <Footer/>

    </div>
  );
}
