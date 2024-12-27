import CardMobile from './mobile_teams_card';
import React from 'react'



const CardsmobileComponent = () => {
    const name_portfolio: [string, string][] = [['Tejashwi Kumar Jha', 'Executive'],['Jival Chorawala', 'Executive'], ['Chavi Agarwal', 'Executive']];

  return (
    <div className='flexjustify-center flex-row mt-16 z-10'>
     <div>
        <ul className='grid'>
          {name_portfolio.map((item, index) => (
            <li key={index}><div className={`k3:gap-10 gap-0 grid`}><CardMobile name={name_portfolio[index][0]} portfolio={name_portfolio[index][1]}/><div/></div></li>
          ))}
        </ul>
      </div> 
    </div>
  )
}

export default CardsmobileComponent
