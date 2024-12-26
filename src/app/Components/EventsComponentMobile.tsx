import CardMobile from "./EventCardMobile";
import React from 'react'

interface Cardprops{
    setOverlay: Function;
    setinn: Function;
    overlay: boolean;
}

const Cardsmobile : React.FC<Cardprops> = ({overlay,setOverlay,setinn}) => {
    const sports=['ATHLETICS','CHESS','BASKETBALL','BADMINTON','CRICKET','FOOTBALL','LAWN TENNIS','TABLE TENNIS','VOLLEYBALL','SQUASH','HOCKEY','WEIGHT LIFTING','POWER LIFTING']
    const desc=[' Number of Players:Maximum of 2 players per event from each college.Each player can participate in not more than 3 events(except relay)',' Unrated Chess Mixed Tournament ','Each Match will have 4 Quarters, 10 Min each (for both Men and Women).The format will be League cum Knockout','Matches will be played in the best of three sets(each set of 21 points) format.','The format of the tournament will be League cum Knockout','The format of the tournament will be League cum knockout (for both Men and Women)','Matches will be played in the best of three sets format.The format will be League cum Knockout'," Men's: The matches will be held on the basis of five singles.Each singles shall be played on a best of five game’s format with each game of 11points.The games will be played in ABC-XYZ format.Women’s: The matches will be held on the basis of two singles and one doubles.Each match will be played on a best of five game’s format with each game of 11 points. The games will be played in AB-XY format.",'The tournament shall be played on aLeague cum Knockout Format Matches will be played in the best of 5 sets format','Matches will be played individually in a Knockout format','Each match will have 4 quarters of 15min each The format of the tournament will be League cum knockout'," Each team is allowed to enter at most 2 participants in each category Men’s Weight Categories : Up to 56 kg, up to 62 kg, up to 69 kg, up to 77 kg, Above 77kg","Event’s Format: INDIVIDUAL There will be 3 events: Squat, Bench Press and Deadlift in the categories as listed below.Men’s Weight Categories: Up to 56 kg, up to 62 kg, up to 69 kg, up to 77 kg, Above 77kg"]


  return (
    <div className='grid justify-center grid-flow-row grid-cols-1 mt-10 z-10'>
     <div>
        <ul className='grid'>
          {sports.map((item, index) => (
            <li key={index}><div className={`relative gap-1 inline-grid`}><CardMobile name={sports[index]} des={desc[index]} overlay={overlay} setOverlay={setOverlay} inn={index} setinn={setinn}/><div/></div></li>
          ))}
        </ul>
      </div> 
    </div>
  )
}

export default Cardsmobile
