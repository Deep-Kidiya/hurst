import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import Logo from '../Image/logo.png'

import {Link} from 'react-router-dom'
import {RiShoppingCart2Line} from 'react-icons/ri'


const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)


  return (
    <div className='navbar'>
      <div className="container">
        <div className="nav_container">
          <div className="hamburger-1">
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link> </li>
                    <li><Link to='/shop'>Shop</Link> </li>
                    <li><Link to='/blogpage'>Blog</Link></li>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
          </div>

          <div className="logo">
            <a href="/"> <img src={Logo} alt="" /></a>
          </div>

          <div className="nav_cart">
            <a href="/"><RiShoppingCart2Line className='icon' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar