import React, {useState} from 'react'
import './SingleProductpage.css'

import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
import {RiCheckboxBlankFill} from 'react-icons/ri'
import SingleProductpagetop from './SingleProductpagetop'

import sblog1 from '../Image/sblog1.png'
import sProduct1 from '../Image/S-Product1.png'
import sProduct2 from '../Image/S-Product2.png'
import sProduct3 from '../Image/S-Product3.png'
import sProduct4 from '../Image/S-Product4.png'


const SingleProductpage = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
      setToggleState(index);
  }

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
                <SingleProductpagetop />

              <div className="bottom">
                <div className="s-produc-tabs">
                  <div className="btn1">
                    <button className={toggleState === 2 ? "tabs active" : "tabs"} onClick={ () => toggleTab(2)}>Description</button>
                    <button className={toggleState === 1 ? "tabs active" : "tabs"} onClick={ () => toggleTab(1)}>Reviews</button>
                    <button className={toggleState === 3 ? "tabs active" : "tabs"} onClick={ () => toggleTab(3)}>Information</button>
                    <button className={toggleState === 4 ? "tabs active" : "tabs"} onClick={ () => toggleTab(4)}>Tags</button>
                  </div>               
                </div>
                <div className="singleblog_contant">
                <div className="img9">
                    
                </div>
                <div className={toggleState === 2 ? "tab-box active" : "tab-box"}>
                  <div className="singleblog-text">
                    
                    <div className="customer-comment">
                        <div className="header1">
                            <h1 className='after1'>DUMMY PRODUCT NAME</h1>
                        </div>
                        <div className="comment-list1">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                        </div>
                        
                    </div>
                    
                  </div>
                </div>

                <div className={toggleState === 1 ? "tab-box active" : "tab-box"}>
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

                <div className={toggleState === 3 ? "tab-box active" : "tab-box"}>
                <div className="singleblog-text">
                    
                    <div className="customer-comment">
                        <div className="header1">
                            <h1 className='after1'>PRODUCT INFORMATION</h1>
                        </div>
                        <div className="comment-list1">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                        </div>
                        
                    </div>
                    
                  </div>

                </div>
                <div className={toggleState === 4 ? "tab-box active" : "tab-box"}>
                <div className="singleblog-text">
                    
                    <div className="customer-comment">
                        <div className="header1">
                            <h1 className='after1'>TAGS</h1>
                        </div>
                        <div className="comment-list1">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                        </div>
                        
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