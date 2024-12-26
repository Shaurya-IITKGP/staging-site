import React from 'react'



interface Cardprops{
    name : string;
    des : string;
    overlay: boolean;
    setOverlay: Function;
    inn: number;
    setinn: Function;
} 

const CardMobile : React.FC<Cardprops> = ({name,des,setOverlay,setinn,inn}) => {
    const setOverlayandinn=()=>{
        setOverlay(true);
        setinn(inn);
      }


  return (
    <div className="w-80 h-[450px] overflow-hidden bg-[#F0F8E1] flex flex-col justify-center items-center shadow-xl shadow-black rounded-2xl scale-85">
      {/* Image */}
      <img
        src={`./assets/${name}.png`}       
        alt=""
        className={`absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-300`}
      />


    
      {/* Content Section */}
      


      <div className={`h-72 w-full p-6 flex items-center flex-col translate-y-40 clip-ellipse2 pt-9 bg-[#86B971]`}>
        <h3 className="text-xl font-bold mb-2 text-center pb-2">
          {name}
        </h3>
        <p className="text-sm mb-4 text-center">
          {des}
        </p>
        <a
          target='_blank'
          className="flex items-center text-[#2d7f0b] cursor-pointer bottom-28 absolute"
        >
         <div className=''><span className={`mr-2 pb-4 text-lg`} onClick={()=>setOverlayandinn()}>Register Now!</span></div> 
        </a>
        
      </div>



    </div>
  );
};

export default CardMobile;
