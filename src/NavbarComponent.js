import React, { useState, useEffect, useContext } from 'react';
import logo from '/assets/images/logo.svg';
import sideMenuImg from '/assets/images/icon-menu.svg';
import MenuComponent from './MenuComponent';
import { SideMenuContext } from './SideMenuContext';

const NavbarComponent = () => {
  const [showElements, setShowElements] = useState(false);
  const { toggleSideMenu, setToggleSideMenu } = useContext(SideMenuContext);

  const handleClick = () => {
    setToggleSideMenu(!toggleSideMenu);
  };

  useEffect(() => {
    
    const handleResize = () => {
      setShowElements(window.innerWidth <= 768);

        if (window.innerWidth > 768) {
          setToggleSideMenu(false);
      }
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
      {!showElements && <MenuComponent />}
      {showElements && (
        <button onClick={handleClick}>
          <img src={sideMenuImg} alt="side-menu-icon" />
        </button>
      )}
    </nav>
  );
};

export default NavbarComponent;
