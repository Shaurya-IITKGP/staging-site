import React from 'react'



interface Cardprops{
    name : string;
    portfolio : string;
    i: string;
    l: string;
    f: string;
    m: string;
} 

const CardMobile : React.FC<Cardprops> = ({name,portfolio,i,l,f,m}) => {
 


  return (
    <div className="w-80 h-[450px] border-none overflow-hidden relative bg-[#86B971] flex flex-col justify-center items-center rounded-2xl scale-65 -mt-32 k3:scale-85 k3:mt-0">
      {/* Image */}
      <img
        src={`./team_pics/${name}.jpg`}       
        alt=""
        className={`absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-300`}
        style={{clipPath: 'ellipse(90% 250px at center 20px)'}}
      />


    
      {/* Content Section */}
      


      <div className={`h-72 w-full p-6 flex items-center flex-col translate-y-48 pt-3 bg-[#86B971]`}>
          <h3 className="text-xl font-bold mb-2 text-center pb-2 pt-2">
            {name}
          </h3>
          <p className="text-lg mb-4 text-center pt-2">
            {portfolio}
          </p>
          <div className="flex flex-row gap-1 scale-75">
              <a href={i} className="w-8 h-8 object-cover"><img src="./instagram.png" className=""/></a>
              <a href={f} className="w-8 h-8 object-cover"><img src="./facebook.png" className=""/></a>
              <a href={l} className="w-8 h-8 object-cover"><img src="./linkedin.png" className=""/></a>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${m}`} className="w-8 h-8 object-cover"><img src="./mail.png" className=""/></a>

          </div>
        
        
      </div>



    </div>
  );
};

export default CardMobile;
