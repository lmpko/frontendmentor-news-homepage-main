import React, { useContext } from 'react';
import MenuComponent from './MenuComponent';
import closeIMG from '/assets/images/icon-menu-close.svg';
import { SideMenuContext } from './SideMenuContext';

const SideMenuComponent = () => {
  const { toggleSideMenu, setToggleSideMenu } = useContext(SideMenuContext);

  const handleClick = () => {
    setToggleSideMenu(false);
  };

  return (
    <div className="side-menu">
      <button type="button" onClick={handleClick}>
        <img src={closeIMG} alt="close" />
      </button>
      <MenuComponent />
    </div>
  );
};

export default SideMenuComponent;
