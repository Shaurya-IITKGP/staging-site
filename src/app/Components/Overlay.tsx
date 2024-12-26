import React from 'react'
import ModalCard from './ModalCard'


interface Cardprops{
    overlay: boolean;
    setOverlay: Function;
    setinn: Function;
}

const Overlay: React.FC<Cardprops> = ({setOverlay,overlay,setinn}) => {
   const handleClick=(event: React.MouseEvent<HTMLDivElement>)=>{
    if((event.target as HTMLDivElement).id==='bg'){
      if(overlay){
      setOverlay(!overlay)
      setinn(-1)}
    }
   }
  

  return (
    <div className='w-full h-full bg-black flex fixed inset-0' onClick={handleClick} id='bg'></div>
  )
}

export default Overlay
