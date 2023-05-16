import React from 'react'
import NavbarComponent from './NavbarComponent'
import ArticleComponent from './ArticleComponent'
import NewsComponent from './NewsComponent'
import QuickNewsComponent from './QuickNewsComponent'

const Layout = () => {
  return (
    <>
        <NavbarComponent/>
        <ArticleComponent/>
        <NewsComponent/>
        <QuickNewsComponent/>
    </>
    )
}

export default Layout