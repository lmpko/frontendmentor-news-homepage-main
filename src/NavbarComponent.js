import React, {useEffect, useState} from 'react'
import logo from "/assets/images/logo.svg"
import sideMenuImg from "/assets/images/icon-menu.svg"
import MenuComponent from './MenuComponent'

const NavbarComponent = () => {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowElements(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Check initial screen width
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
        <img src={logo} alt="logo" />
        {!showElements && <MenuComponent/>}
        
        {showElements && <button>
          <img src={sideMenuImg} alt="side-menu-icon"/>
        </button>}
    </nav>
  )
}

export default NavbarComponent