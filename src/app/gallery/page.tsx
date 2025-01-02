"use client";

import { useEffect, useState } from "react";
import "./home.css";
import Image from "next/image";

function Home() {
  const [images, setImages] = useState([
    "/gallery/Gallery1.jpg",
    "/gallery/Gallery2.jpg",
    "/gallery/Gallery3.jpg",
    "/gallery/Gallery4.jpg",
    "/gallery/Gallery5.jpg",
    "/gallery/Gallery6.jpg",
    "/gallery/Gallery7.jpg",
    "/gallery/Gallery8.jpg",
    "/gallery/Gallery10.jpg",
    "/gallery/Gallery11.jpg",
    "/gallery/Gallery12.jpg",
    "/gallery/Gallery13.jpg",
    "/gallery/Gallery14.jpg",
    "/gallery/Gallery15.jpg",
    "/gallery/Gallery16.jpg",
    "/gallery/Gallery17.jpg",
    "/gallery/Gallery18.jpg",
    "/gallery/Gallery19.jpg",
    "/gallery/Gallery20.jpg",
    "/gallery/Gallery21.jpg",
    "/gallery/Gallery22.jpg",
    "/gallery/Gallery23.jpg",
    "/gallery/Gallery24.jpg",
    "/gallery/Gallery25.jpg",
    // "/img3.jpg",
    // "/img2.jpg",
    // "/img1.jpg",
    // "/img4.jpg",
  ]);
  const [clas, setClas] = useState("");
  const timeAutoNext = 4000;

  const [isMobile, setIsMobile] = useState(false);
  // Check the window width and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        const newImages = [...prev, ...prev.slice(0, 1)];
        return newImages.slice(1);
      });
      setClas((prev) => prev + " next");
    } else {
      setImages((prev) => {
        const lastImages = prev.slice(-1);
        return [...lastImages, ...prev.slice(0, prev.length - 1)];
      });
      setClas((prev) => prev + " prev");
    }
  };

  return (
    <div className="App overflow-hidden">
      {" "}
      {/* Removed overflow-x and overflow-y */}
      <div className={`carousel${clas}`}>
        <div className="list flex">
          {images.slice(0, 1).map((img, index) => (
            <div className="item" key={index}>
              <div
                className={`w-full h-full absolute z-30 inset-0 transition-all duration-700 ease-in-out ${
                  clas === "next"
                    ? "background-image-next"
                    : clas === "prev"
                    ? "background-image-prev"
                    : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`Slide Image ${index + 1}`}
                  layout="fill"
                  objectFit={isMobile ? "contain" : "cover"}
                />
              </div>
              {/* <div className="content absolute top-[20%] w-[90%] max-w-[80%] left-1/2 transform -translate-x-1/2 pr-[30%] box-border text-white">
                <div className="author font-bold tracking-[10px] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards]">
                  LUNDEV
                </div>
                <div className="title text-[5em] font-bold leading-[1.3em] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.2s] !important">
                  DESIGN SLIDER
                </div>
                <div className="topic text-[5em] font-bold leading-[1.3em] text-[#f1683a] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.4s] !important">
                  {index === 0
                    ? "ANIMAL"
                    : index === 1
                    ? "NATURE"
                    : index === 2
                    ? "WILDLIFE"
                    : "SCENERY"}
                </div>
                <div className="des transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.6s] !important">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit...
                </div>
              </div> */}
            </div>
          ))}
        </div>

        <div
          className={`thumbnail absolute bottom-[10px] left-1/2 w-full flex gap-[20px] ${
            clas === "next" ? "animate-[effectNext_0.5s_linear_1_forwards]" : ""
          } z-50`}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className={`item w-[150px] h-[200px] flex-shrink-0 relative`}
            >
              <Image
                width={100}
                height={100}
                src={img}
                className={
                  isMobile
                    ? "w-full h-full object-cover rounded-[20px]"
                    : "w-full h-full object-cover rounded-[20px]"
                }
                alt="none"
              />
              <div className="content text-white absolute bottom-[10px] left-[10px] right-[10px]">
                {/* <div className="title font-medium">Name Slider</div>
                <div className="description font-light">Description</div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="">
          <div className="arrows absolute top-[45%] left-10 z-50  ">
            <button
              className={`w-[40px] h-[40px] rounded-full bg-[#eeeeee5d] border-0 text-white font-mono font-bold transition duration-500 hover:bg-white hover:text-black ${
                clas === "next" ? "pointer-events-none" : ""
              } ${clas === "prev" ? "pointer-events-none" : ""}`}
              id="prev"
              onClick={() => showSlider("prev")}
            >
              {"<"}
            </button>
          </div>
          <div className="arrows absolute top-[45%] right-10 z-50">
            <button
              className={`w-[40px] h-[40px] rounded-full bg-[#eeeeee5f] border-0 text-white font-mono font-bold transition duration-500 hover:bg-white hover:text-black ${
                clas === "next" ? "pointer-events-none" : ""
              } ${clas === "prev" ? "pointer-events-none" : ""}`}
              id="next"
              onClick={() => showSlider("next")}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
