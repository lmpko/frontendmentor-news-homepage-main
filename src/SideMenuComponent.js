import React from 'react'
import MenuComponent from './MenuComponent'
import closeIMG from "/assets/images/icon-menu-close.svg"

const SideMenuComponent = () => {
  return (
    <div className='side-menu'>
      <button type="">
        <img src={closeIMG} alt="close"/>
      </button>
      <MenuComponent/>
    </div>
      
  )
}

export default SideMenuComponent