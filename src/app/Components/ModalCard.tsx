import React from 'react'
interface Cardprops{
    overlay: boolean;
    setOverlay: Function;
    inn: number;
    name : string;
    setinn: Function;
}

const ModalCard : React.FC<Cardprops>= ({setOverlay,overlay,setinn,inn,name}) => {
    const sports=['ATHLETICS','CHESS','BASKETBALL','BADMINTON','CRICKET','FOOTBALL','LAWN TENNIS','TABLE TENNIS','VOLLEYBALL','SQUASH','HOCKEY','WEIGHT LIFTING','POWER LIFTING']
    const desc=[' Number of Players:Maximum of 2 players per event from each college.Each player can participate in not more than 3 events(except relay)',' Unrated Chess Mixed Tournament ','Each Match will have 4 Quarters, 10 Min each (for both Men and Women).The format will be League cum Knockout','Matches will be played in the best of three sets(each set of 21 points) format.','The format of the tournament will be League cum Knockout','The format of the tournament will be League cum knockout (for both Men and Women)','Matches will be played in the best of three sets format.The format will be League cum Knockout'," Men's: The matches will be held on the basis of five singles.Each singles shall be played on a best of five game’s format with each game of 11points.The games will be played in ABC-XYZ format.Women’s: The matches will be held on the basis of two singles and one doubles.Each match will be played on a best of five game’s format with each game of 11 points. The games will be played in AB-XY format.",'The tournament shall be played on aLeague cum Knockout Format Matches will be played in the best of 5 sets format','Matches will be played individually in a Knockout format','Each match will have 4 quarters of 15min each The format of the tournament will be League cum knockout'," Each team is allowed to enter at most 2 participants in each category Men’s Weight Categories : Up to 56 kg, up to 62 kg, up to 69 kg, up to 77 kg, Above 77kg","Event’s Format: INDIVIDUAL There will be 3 events: Squat, Bench Press and Deadlift in the categories as listed below.Men’s Weight Categories: Up to 56 kg, up to 62 kg, up to 69 kg, up to 77 kg, Above 77kg"]
    const prize=['Event Reg fee per head : Rs300 For Relay per head:Rs100 Prize Pool: Rs 39000','Event Reg fee per head: 400( M&W) Prize Pool: Rs.17500',' Event Reg Fee Per Head: 500 (M & W) Prize Pool: Rs.59000',' Registration Fee Per Head Rs.850(M & W) Prize Pool: Rs.28000','Event Reg fee per head: Rs 800 Prize Pool: Rs 38000',' Event Reg fee per head: Rs 800 (M&W) Prize Pool: Rs 58600 ','Event Reg fee per head: 900(M & W) Prize Pool: Rs 19000','Event Reg fee per head: 450 (M & W) Prize Pool: Rs 21500',' Event Reg fee per head: Rs 400 (M&W) Prize Pool: Rs 56000',' Event Reg fee per head: Rs 550 (M&W) Prize Pool: Rs 12000','Event Reg fee per head: Rs 850 Prize Pool: Rs 17000',' Event Reg fee per head: Rs 300 Prize Pool: Rs 3200']
  
    const handleClick=(event: React.MouseEvent<HTMLDivElement>)=>{
        if((event.target as HTMLDivElement).id==='bgx'){
          if(overlay){
          setOverlay(!overlay)
          setinn(-1)}
        }
       }

  
  return (
    
    <div className='w-[600px] h-[450px] flex justify-center items-center relative overflow-hidden rounded-3xl' onClick={handleClick} id='bg'>
    <div className='w-full h-full flex justify-center items-center inset-0'>
       <img
         src={`/assets/${name}.png`}
         alt=""
         className={`object-cover w-full h-full ${inn==4?'object-right':''} ${inn==5?'object-left':''}`}
       />
   </div>
     <div className='text-5xl text-black absolute font-semibold top-7'>{sports[inn]}</div>
     <button className='z-40 pb-1 w-[100px] h-[30px] absolute rounded-2xl scale-150 font-semibold bottom-16 bg-[#435c20]'>Register</button>
   </div>
  )
}

export default ModalCard
