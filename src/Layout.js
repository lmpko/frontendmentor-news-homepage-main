import React from 'react'
import NavbarComponent from './NavbarComponent'
import ArticleComponent from './ArticleComponent'
import NewsComponent from './NewsComponent'
import QuickNewsComponent from './QuickNewsComponent'
import SideMenuComponent from "./SideMenuComponent"

const Layout = () => {
  return (
    <>
        <SideMenuComponent />
        <NavbarComponent/>
        <ArticleComponent/>
        <NewsComponent/>
        <QuickNewsComponent/>
        
    </>
    )
}

export default Layout