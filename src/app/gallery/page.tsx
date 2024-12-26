"use client";


import { useEffect, useState } from "react";
import './home.css';


function Home(){
// const Home: React.FC = () => {
  const [image, setImage] = useState([
    '/img1.jpg',  // Correct path to the public folder
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg',
  ]);
  const [clas, setClas] = useState("");
  const timeAutoNext = 4000;

  useEffect(() => {
    const runnext = setTimeout(() => {
      setClas("");
      showSlider("next");
    }, timeAutoNext);

    const runtime = setTimeout(() => {
      setClas("");
    }, 600);

    return () => clearTimeout(runnext);
  }, [image]);

  const showSlider = (type: string) => {
    if (type === "next") {
      setImage((prev) => [...prev, prev[0]]);
      setImage((prev) => prev.slice(1));
      setClas((prev) => prev + " next");
    } else {
      setImage((prev) => {
        const lastImage = prev[prev.length - 1];
        return [lastImage, ...prev.slice(0, prev.length - 1)];
      });
      setClas((prev) => prev + " prev");
    }
  };
  return (
    <div className="App overflow-x-hidden overflow-y-hidden">
      <div
        className={`carousel${clas} h-screen -mt-12 w-screen overflow-x-hidden overflow-y-hidden`}
      >
        <div className="list">
          {/* Adjusting the transition and background change */}
          <div className="item w-full h-full absolute inset-0">
            <div
              className={`w-full h-full absolute inset-0 transition-all duration-700 ease-in-out ${clas === "next" ? "background-image-next" : clas === "prev" ? "background-image-prev" : ""}`}
              style={{ backgroundImage: `url(${image[0]})` }}
            ></div>
            <div className="content absolute top-[20%] w-[1140px] max-w-[80%] left-1/2 transform -translate-x-1/2 pr-[30%] box-border text-white">
              <div className="author font-bold tracking-[10px] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards]">
                LUNDEV
              </div>
              <div className="title text-[5em] font-bold leading-[1.3em] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.2s] !important">
                DESIGN SLIDER
              </div>
              <div className="topic text-[5em] font-bold leading-[1.3em] text-[#f1683a] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.4s] !important">
                ANIMAL
              </div>
              <div className="des transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.6s] !important">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit...
              </div>
              <div className="buttons grid grid-cols-[repeat(2,130px)] grid-rows-[40px] gap-[5px] mt-[20px] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.8s] !important">
              </div>
            </div>
          </div>
          <div className="item w-full h-full absolute inset-0">
            <div
              className={`w-full h-full absolute inset-0 transition-all duration-700 ease-in-out ${clas === "next" ? "background-image-next" : clas === "prev" ? "background-image-prev" : ""}`}
              style={{ backgroundImage: `url(${image[1]})` }}
            ></div>
            <div className="content absolute top-[20%] w-[1140px] max-w-[80%] left-1/2 transform -translate-x-1/2 pr-[30%] box-border text-white">
              <div className="author font-bold tracking-[10px] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards]">
              </div>
              <div className="title text-[5em] font-bold leading-[1.3em] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.2s] !important">
              </div>
              <div className="topic text-[5em] font-bold leading-[1.3em] text-[#f1683a] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.4s] !important">
              </div>
              <div className="des transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.6s] !important">
              </div>
              <div className="buttons grid grid-cols-[repeat(2,130px)] grid-rows-[40px] gap-[5px] mt-[20px] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.8s] !important">
              </div>
            </div>
          </div>
          <div className="item w-full h-full absolute inset-0">
            <div
              className={`w-full h-full absolute inset-0 transition-all duration-700 ease-in-out ${clas === "next" ? "background-image-next" : clas === "prev" ? "background-image-prev" : ""}`}
              style={{ backgroundImage: `url(${image[2]})` }}
            ></div>
            <div className="content absolute top-[20%] w-[1140px] max-w-[80%] left-1/2 transform -translate-x-1/2 pr-[30%] box-border text-white">
              <div className="author font-bold tracking-[10px] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards]">
              </div>
              <div className="title text-[5em] font-bold leading-[1.3em] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.2s] !important">
              </div>
              <div className="topic text-[5em] font-bold leading-[1.3em] text-[#f1683a] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.4s] !important">
              </div>
              <div className="des transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.6s] !important">
              </div>
              <div className="buttons grid grid-cols-[repeat(2,130px)] grid-rows-[40px] gap-[5px] mt-[20px] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.8s] !important">
              </div>
            </div>
          </div>
          <div className="item w-full h-full absolute inset-0">
            <div
              className={`w-full h-full absolute inset-0 transition-all duration-700 ease-in-out ${clas === "next" ? "background-image-next" : clas === "prev" ? "background-image-prev" : ""}`}
              style={{ backgroundImage: `url(${image[3]})` }}
            ></div>
            <div className="content absolute top-[20%] w-[1140px] max-w-[80%] left-1/2 transform -translate-x-1/2 pr-[30%] box-border text-white">
              <div className="author font-bold tracking-[10px] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards]">
                RUNDEV
              </div>
              <div className="title text-[5em] font-bold leading-[1.3em] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.2s] !important">
                DESIGN SLIDER
              </div>
              <div className="topic text-[5em] font-bold leading-[1.3em] text-[#f1683a] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.4s] !important">
                ANIMAL
              </div>
              <div className="des transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.6s] !important">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit...
              </div>
              <div className="buttons grid grid-cols-[repeat(2,130px)] grid-rows-[40px] gap-[5px] mt-[20px] transform translate-y-[50px] filter blur-[20px] opacity-0 animate-[showContent_0.5s_1s_linear_1_forwards] animate-delay-[1.8s] !important">
              </div>
            </div>
          </div>
        </div>

        <div
          className={`thumbnail absolute bottom-[50px] left-1/2 w-max flex gap-[20px] ${clas === "next" ? "animate-[effectNext_0.5s_linear_1_forwards]" : ""} z-50`}
        >
          {image.map((img, index) => (
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
            className={`w-[40px] h-[40px] rounded-full bg-[#eee4] border-0 text-white font-mono font-bold transition duration-500 hover:bg-white hover:text-black ${
              clas === "next" ? "pointer-events-none" : ""
            } ${clas === "prev" ? "pointer-events-none" : ""}`}
            id="prev"
            onClick={() => showSlider("prev")}
          >
            {"<"}
          </button>
          <button
            className={`w-[40px] h-[40px] rounded-full bg-[#eee4] border-0 text-white font-mono font-bold transition duration-500 hover:bg-white hover:text-black ${
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
  );
};


export default Home;