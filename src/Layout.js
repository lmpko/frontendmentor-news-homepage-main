import React, { useContext } from 'react';
import NavbarComponent from './NavbarComponent';
import ArticleComponent from './ArticleComponent';
import NewsComponent from './NewsComponent';
import QuickNewsComponent from './QuickNewsComponent';
import SideMenuComponent from './SideMenuComponent';
import { SideMenuProvider, SideMenuContext } from './SideMenuContext';

const Layout = () => {
  const { toggleSideMenu } = useContext(SideMenuContext);

  return (
    <>
        {toggleSideMenu && <SideMenuComponent />}
        <NavbarComponent />
        <ArticleComponent />
        <NewsComponent />
        <QuickNewsComponent />
    </>
  );
};

export default Layout;