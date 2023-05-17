import React, { createContext, useState } from 'react';

// Create a new context
const SideMenuContext = createContext({
  toggleSideMenu: false,
  setToggleSideMenu: () => {},
});

// Create a provider component
const SideMenuProvider = ({ children }) => {
  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  return (
    <SideMenuContext.Provider value={{ toggleSideMenu, setToggleSideMenu }}>
      {children}
    </SideMenuContext.Provider>
  );
};

export { SideMenuProvider, SideMenuContext };