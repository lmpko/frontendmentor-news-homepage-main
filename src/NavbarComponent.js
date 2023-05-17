import React from 'react'
import logo from "/assets/images/logo.svg"
import sideMenuImg from "/assets/images/icon-menu.svg"

const NavbarComponent = () => {
  return (
    <nav>
        <img src={logo} alt="logo" />
        <button>
          <img src={sideMenuImg} alt="side-menu-icon"/>
        </button>
    </nav>
  )
}

export default NavbarComponent