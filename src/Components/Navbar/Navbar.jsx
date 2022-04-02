import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import Logo from '../Image/logo.png'
import {RiShoppingCart2Line} from 'react-icons/ri'


const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <div className='navbar'>
      <div className="container">
        <div className="nav_container">
          <div className="hamburger-1">
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
          </div>

          <div className="logo">
            <a href="/"> <img src={Logo} alt="" /></a>
          </div>

          <div className="nav_cart">
            <a href="/error"><RiShoppingCart2Line className='icon' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar