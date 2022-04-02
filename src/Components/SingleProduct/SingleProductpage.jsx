import React from 'react'
import './SingleProductpage.css'

import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
import {RiCheckboxBlankFill} from 'react-icons/ri'

import sblog1 from '../Image/sblog1.png'
import sProduct1 from '../Image/S-Product1.png'
import sProduct2 from '../Image/S-Product2.png'
import sProduct3 from '../Image/S-Product3.png'


const SingleProductpage = () => {
  return (
    <div className='singleproductpage'>
         <div className="head-bg">
            <div className="Head-text">
                <h1>SINGLE PRODUCT</h1>
            </div>
        </div>
        <div className="container">
            <div className="btn">
                <a href="/"><h1>HOME</h1></a>
                <h2>/</h2>
                <h1>SINGLE PRODUCT</h1>
            </div> 
            <div className="s-produc_contant">
                <div className="top">
                  <div className="img12">
                    <img src={sProduct1} alt="" />
                  </div>
                  <div className="top_content">
                    <div className="content-line">
                      <div className="lines">
                        <h1>DUMMY PRODUCT NAME</h1>
                        <div className="stars">
                              <FaStar className='icon' />
                              <FaStar className='icon' />
                              <FaStar className='icon' />
                              <FaStarHalfAlt className='icon' />
                              <FaRegStar className='icon' />
                          </div>
                      </div>
                      <h1>$ 56.20</h1>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum, you neede be sure there isn't anythin  going to use a passage embarrassing.</p>
                      <div className="color">
                       <div className="item1">
                         <h3>COLOR</h3>
                          <div className="le-1">
                            <a href="#"><RiCheckboxBlankFill className=' icon1' /></a>
                            <a href="#"><RiCheckboxBlankFill className=' icon2' /></a>
                            <a href="#"><RiCheckboxBlankFill className=' icon3' /></a>
                            <a href="#"><RiCheckboxBlankFill className=' icon4' /></a>
                            <a href="#"><RiCheckboxBlankFill className=' icon5' /></a>
                          </div>
                        </div>
                      </div>  
                      <div className="size1">
                        <div className="item_contant">
                            <h3>SIZE</h3>
                            <div className="size">
                                <h2>S</h2>
                                <h2>M</h2>
                                <h2>L</h2>
                                <h2>SL</h2>
                                <h2>XL</h2>
                            </div>
                        </div>
                      </div>  
                      <div className="img13">
                        <img src={sProduct2} alt="" />
                        <img src={sProduct3} alt="" />
                        <img src={sProduct2} alt="" />
                        <img src={sProduct3} alt="" />
                      </div>        

                    </div>
                  </div>
                </div>


              <div className="bottom">
                <div className="s-produc-tabs">
                  <div className="btn1">
                    <button>Description</button>
                    <button className='active'>Reviews</button>
                    <button>Information</button>
                    <button>Tags</button>
                  </div>               
                </div>
                <div className="singleblog_contant">
                <div className="img9">
                    
                </div>
                <div className="singleblog-text">
                   
                   <div className="customer-comment">
                       <div className="header1">
                           <h1 className='after1'>CUSTOMER COMMENTS</h1>
                       </div>
                       <div className="comment-list">
                           <div className="img11">
                               <img src={sblog1} alt="" />
                           </div>
                           <div className="comment-text">
                               <h2>GERALD BARNES</h2>
                               <h3>27 Jun, 2021 at 2:30pm</h3>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                           </div>
                       </div>
                       <div className="comment-list list1">
                           <div className="img11">
                               <img src={sblog1} alt="" />
                           </div>
                           <div className="comment-text">
                               <h2>GERALD BARNES</h2>
                               <h3>27 Jun, 2021 at 2:30pm</h3>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                           </div>
                       </div>
                   </div>
                   <div className="input-contant">
                        <div className="header1">
                           <h1 className='after1'>LEAVE YOUR COMMENTS</h1>
                        </div>
                        <div className="inupt-items">
                            <input type="name" placeholder='Your name here...' />
                            <input type="email" placeholder='Your email here...' />
                            <input className='active' type="comment" placeholder='Your Comment here...' />
                        </div>
                        <div className="btn">
                            <button>SUBMIT COMMENT</button>
                        </div>
                   </div>
                </div>
            </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProductpage