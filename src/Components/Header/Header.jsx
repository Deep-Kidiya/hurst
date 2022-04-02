import React from 'react'
import './Header.css'
import ME from '../Image/Header1.png'

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className="header_container">
                <div className="slider">
                   <div className="image1">
                        <img src={ME} alt="" />
                   </div>
                   <div className="text">
                       <h2>WELCOME TO OUR</h2>
                       <h1>ELEGENT<br/>
                        FURNITURE</h1>
                        <h2>GALLERY 2021</h2>

                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there hidden in the middle of text.</p>
                        <div className="btn">
                            <button>SHOP NOW</button>
                        </div>
                   </div>
                </div>
                <div className="header_contant">
                   
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default Header