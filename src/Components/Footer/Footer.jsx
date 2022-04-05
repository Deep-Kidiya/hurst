import React from 'react'
import './Footer.css'
import {SiIcon} from 'react-icons/si'



const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer_container">
                <div className="footer_contant">
                    <h1>CONTACT US</h1>
                    <div className="footer-text">
                       <h2>Address :</h2>
                        <a href="#">28 Green Tower, Street Name,<br />New York City, USA</a>
                    </div>
                    <div className="footer-text">
                       <h2>Cell-Phone :</h2>
                        <a href="#">+91 83202 56818</a>
                    </div>
                    <div className="footer-text">
                       <h2>Email :</h2>
                        <a href="#">kidiyadeep@gmail.com</a>
                    </div>
                </div>
               
                <div className="footer_contant">
                    <div className="m-1">
                        <h1>ACCOUNTS</h1>
                        <div className="footer-text1">
                            <a href="#"><SiIcon className='icon' />My Account</a>
                        </div>
                        <div className="footer-text1">
                            <a href="#"><SiIcon className='icon' />My Wishlist</a>   
                        </div>
                        <div className="footer-text1">
                            <a href="#"><SiIcon className='icon' />My Cart</a>
                        </div>
                        <div className="footer-text1">
                            <a href="#"><SiIcon className='icon' />Sign In</a>
                        </div>
                        <div className="footer-text1">
                            <a href="#"><SiIcon className='icon' />Check out</a>
                        </div>
                    </div>
                </div>
               
                <div className="footer_contant">
                    <h1>CONTACT US</h1>
                    <div className="footer-text1">
                        <a href="#"><SiIcon className='icon' />New Products</a>
                    </div>
                    <div className="footer-text1">
                        <a href="#"><SiIcon className='icon' />Top Sellers</a>   
                    </div>
                    <div className="footer-text1">
                        <a href="#"><SiIcon className='icon' />Manufactirers</a>
                    </div>
                    <div className="footer-text1">
                        <a href="#"><SiIcon className='icon' />Suppliers</a>
                    </div>
                    <div className="footer-text1">
                        <a href="#"><SiIcon className='icon' />Specials</a>
                    </div>
                </div>

                <div className="footer_contant">
                    <h1>YOUR CHOICE PRODUCTS</h1>
                   
                </div>
            </div>
            <div className="end">
                <h1>&copy; Deep Kidiya</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer