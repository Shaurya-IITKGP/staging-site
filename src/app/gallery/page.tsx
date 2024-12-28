"use client";

import { useEffect, useState } from "react";
import './home.css';
import Image from "next/image";

function Home() {
  const [images, setImages] = useState([
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg',
    '/CardBg2.png',
    '/CRICKET.png',
    '/CHESS.png',
  ]);
  const [clas, setClas] = useState("");
  const timeAutoNext = 4000;

  useEffect(() => {
    const runnext = setTimeout(() => {
      setClas("");
      showSlider("next");
    }, timeAutoNext);

    return () => clearTimeout(runnext);
  }, [images]);

  const showSlider = (type: string) => {
    if (type === "next") {
      setImages((prev) => {
        const newImages = [...prev, ...prev.slice(0, 3)]; // Add the first 3 images to the end
        return newImages.slice(3); // Remove the first 3 images
      });
      setClas((prev) => prev + " next");
    } else {
      setImages((prev) => {
        const lastImages = prev.slice(-3); // Get the last 3 images
        return [...lastImages, ...prev.slice(0, prev.length - 3)]; // Move the last 3 images to the front
      });
      setClas((prev) => prev + " prev");
    }
  };

  return (
    <div className="App overflow-x-hidden overflow-y-hidden">
      <div className={`carousel${clas} h-screen -mt-12 w-screen overflow-x-hidden overflow-y-hidden`}>
        <div className="list flex">
          {images.slice(0, 4).map((img, index) => (
            <div className="item w-full h-full absolute inset-0" key={index}>
              <div className={`w-full h-full absolute inset-0 transition-all duration-700 ease-in-out ${clas === "next" ? "background-image-next" : clas === "prev" ? "background-image-prev" : ""}`}>
                <Image src={img} alt={`Slide Image ${index + 1}` } objectFit="cover" layout="fill"  />
              </div>
              <div className="content absolute top-[20%] w-[1140px] max-w-[80%] left-1/2 transform -translate-x-1/2 pr-[30%] box-border text-white">
                <div className="author font-bold tracking-[10px] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards]">
                  LUNDEV
                </div>
                <div className="title text-[5em] font-bold leading-[1.3em] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.2s] !important">
                  DESIGN SLIDER
                </div>
                <div className="topic text-[5em] font-bold leading-[1.3em] text-[#f1683a] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.4s] !important">
                  {index === 0 ? "ANIMAL" : index === 1 ? "NATURE" : index === 2 ? "WILDLIFE" : "SCENERY"}
                </div>
                <div className="des transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.6s] !important">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit...
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`thumbnail absolute bottom-[50px] left-1/2 w-max flex gap-[20px] ${clas === "next" ? "animate-[effectNext_0.5s_linear_1_forwards]" : ""} z-50`}>
          {images.map((img, index) => (
            <div key={index} className={`item w-[150px] h-[220px] flex-shrink-0 relative`}>
              <img src={img} className="w-full h-full object-cover rounded-[20px]" />
              <div className="content text-white absolute bottom-[10px] left-[10px] right-[10px]">
                <div className="title font-medium">Name Slider</div>
                <div className="description font-light">Description</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows absolute top-[80%] right-[52%] z-50 w-[300px] max-w-[30%] flex gap-[10px] items-center">
          <button
            className={`w-[40px] h-[40px] rounded-full bg-[#eee4] border-0 text-white font-mono font-bold transition duration-500 hover:bg-white hover:text-black ${clas === "next" ? "pointer-events-none" : ""} ${clas === "prev" ? "pointer-events-none" : ""}`}
            id="prev"
            onClick={() => showSlider("prev")}
          >
            {"<"}
          </button>
          <button
            className={`w-[40px] h-[40px] rounded-full bg-[#eee4] border-0 text-white font-mono font-bold transition duration-500 hover:bg-white hover:text-black ${clas === "next" ? "pointer-events-none" : ""} ${clas === "prev" ? "pointer-events-none" : ""}`}
            id="next"
            onClick={() => showSlider("next")}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;