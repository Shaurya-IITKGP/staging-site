import Card from './EventCard';


interface CardssProps {
  overlay: boolean;
  setOverlay: Function;
  setinn: Function;
}

const Cardss2: React.FC<CardssProps> = ({ overlay, setOverlay, setinn }) => {
  const sports=['ATHLETICS','CHESS','BASKETBALL','BADMINTON','CRICKET','FOOTBALL','LAWN TENNIS','TABLE TENNIS','VOLLEYBALL','SQUASH','HOCKEY','WEIGHT LIFTING','POWER LIFTING']
  const desc=[' Number of Players:Maximum of 2 players per event from each college.Each player can participate in not more than 3 events(except relay)',' Unrated Chess Mixed Tournament ','Each Match will have 4 Quarters, 10 Min each (for both Men and Women).The format will be League cum Knockout','Matches will be played in the best of three sets(each set of 21 points) format.','The format of the tournament will be League cum Knockout','The format of the tournament will be League cum knockout (for both Men and Women)','Matches will be played in the best of three sets format.The format will be League cum Knockout'," Men's: The matches will be held on the basis of five singles.Each singles shall be played on a best of five game’s format with each game of 11points.The games will be played in ABC-XYZ format.Women’s: The matches will be held on the basis of two singles and one doubles.Each match will be played on a best of five game’s format with each game of 11 points. The games will be played in AB-XY format.",'The tournament shall be played on aLeague cum Knockout Format Matches will be played in the best of 5 sets format','Matches will be played individually in a Knockout format','Each match will have 4 quarters of 15min each The format of the tournament will be League cum knockout'," Each team is allowed to enter at most 2 participants in each category Men’s Weight Categories : Up to 56 kg, up to 62 kg, up to 69 kg, up to 77 kg, Above 77kg","Event’s Format: INDIVIDUAL There will be 3 events: Squat, Bench Press and Deadlift in the categories as listed below.Men’s Weight Categories: Up to 56 kg, up to 62 kg, up to 69 kg, up to 77 kg, Above 77kg"]
  const prize=['Event Reg fee per head : Rs300 For Relay per head:Rs100 Prize Pool: Rs 39000','Event Reg fee per head: 400( M&W) Prize Pool: Rs.17500',' Event Reg Fee Per Head: 500 (M & W) Prize Pool: Rs.59000',' Registration Fee Per Head Rs.850(M & W) Prize Pool: Rs.28000','Event Reg fee per head: Rs 800 Prize Pool: Rs 38000',' Event Reg fee per head: Rs 800 (M&W) Prize Pool: Rs 58600 ','Event Reg fee per head: 900(M & W) Prize Pool: Rs 19000','Event Reg fee per head: 450 (M & W) Prize Pool: Rs 21500',' Event Reg fee per head: Rs 400 (M&W) Prize Pool: Rs 56000',' Event Reg fee per head: Rs 550 (M&W) Prize Pool: Rs 12000','Event Reg fee per head: Rs 850 Prize Pool: Rs 17000',' Event Reg fee per head: Rs 300 Prize Pool: Rs 3200']
  return (
  
    <div className='grid justify-center m-16 grid-flow-row grid-cols-3 gap-20 mt-48'>
     <div>
        <ul className='grid'>
          {sports.slice(0,6).map((item, index) => (
            <li key={index}><div className={`relative gap-20 inline-grid`}><Card name={sports[index]} des={desc[index]} prize={prize[index]} overlay={overlay} setOverlay={setOverlay} inn={index} setinn={setinn}/><div/></div></li>
          ))}
        </ul>
      </div> 
      <div className='-mt-36'>
        <ul className='grid'>
          {sports.slice(0,7).map((item, index) => (
            <li key={index}><div className={`relative gap-20 inline-grid`}><Card name={sports[index+6]} des={desc[index+6]} prize={prize[index+6]} overlay={overlay} setOverlay={setOverlay} inn={index+6} setinn={setinn}/><div/></div></li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Cardss2;