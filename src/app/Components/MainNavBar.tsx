"use client"
import React, { useState , useEffect } from 'react'
import NewNavbar from '../Components/NewLaptopNavbar'
import NewMobileNavbar from '../Components/NewMobileNavbar';

const MainNavBar = () => {
    const [isMobile,setIsMobile] = useState(false);
      // Check the window width and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1138);
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
    {isMobile?<NewMobileNavbar/>:<NewNavbar/>}
    </div>
  )
}

export default MainNavBar