import React from 'react'
import "./Header.css"
import LabelBottomNavigation from "./Navbar"




const Header = () => {
  return (
    <div>
      <div className='header' onClick={()=>{window.scroll({top:0,left:0,behavior:"smooth"})}}>MOVIEWEB</div>
      <LabelBottomNavigation/>
    </div>
  )
}

export default Header
