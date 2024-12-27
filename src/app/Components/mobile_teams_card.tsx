import React from 'react'



interface Cardprops{
    name : string;
    portfolio : string;
} 

const CardMobile : React.FC<Cardprops> = ({name,portfolio}) => {
 


  return (
    <div className="w-80 h-[450px] border-none overflow-hidden relative bg-[#86B971] flex flex-col justify-center items-center rounded-2xl scale-65 -mt-32 k3:scale-85 k3:mt-0">
      {/* Image */}
      <img
        src={`./img1.jpg`}       
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
              <a href="https://www.instagram.com/shaurya.iitkgp/" className="w-8 h-8 object-cover"><img src="./instagram.png" className="invert"/></a>
              <a href="https://www.facebook.com/shauryaiitkgp/" className="w-8 h-8 object-cover"><img src="./facebook.png" className="invert"/></a>
              <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/posts/?feedView=all" className="w-8 h-8 object-cover"><img src="./linkedin.png" className="invert"/></a>
              <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/posts/?feedView=all" className="w-8 h-8 object-cover"><img src="./mail.png" className="invert"/></a>

          </div>
        
        
      </div>



    </div>
  );
};

export default CardMobile;
