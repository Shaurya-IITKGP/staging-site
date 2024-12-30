import CardMobile from './mobile_teams_card';
import React from 'react'

interface Props{
  team:string[][]
}

const CardsmobileComponent:React.FC<Props> = ({team}) => {
    // const name_portfolio: [string, string][] = [['Tejashwi Kumar Jha', 'Executive'],['Jival Chorawala', 'Executive'], ['Chavi Agarwal', 'Executive']];

  return (
    <div className='flexjustify-center flex-row mt-16 z-10'>
     <div>
        <ul className='grid'>
          {team.map((item, index) => (
            <li key={index}><div className={`k3:gap-10 gap-0 grid`}><CardMobile name={team[index][0]} portfolio={team[index][1]} i={team[index][2]} l={team[index][4]} f={team[index][3]} m={team[index][5]}/><div/></div></li>
          ))}
        </ul>
      </div> 
    </div>
  )
}

export default CardsmobileComponent