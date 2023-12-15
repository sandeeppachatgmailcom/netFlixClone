import React, { useEffect, useState } from 'react'
import './NavBar.css'
import axios from '../axios';
import { apiKey } from '../contants';
function NavBar(props) {
    const [state,setState]= useState(props.menu)
   
    
    
   
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Logo" srcset="" />
   
      <img className='ProfilePic' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="ProfilePIc" srcset="" />
    </div>
  )
}

export default NavBar
