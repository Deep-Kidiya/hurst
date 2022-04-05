import React, {useState} from 'react'
import './SingleProductpage.css'

import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
import {RiCheckboxBlankFill} from 'react-icons/ri'

import sblog1 from '../Image/sblog1.png'
import sProduct1 from '../Image/S-Product1.png'
import sProduct2 from '../Image/S-Product2.png'
import sProduct3 from '../Image/S-Product3.png'
import sProduct4 from '../Image/S-Product4.png'


const SingleProductpagetop = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
      setToggleState(index);
  }

  return (
    <div className='singleproductpage'>
       
            <div className="s-produc_contant">
                <div className="top">
                  <div className={toggleState === 1 ? "tab-box active" : "tab-box"}>
                    <div className="img12">
                      <img src={sProduct1} alt="" />
                    </div>
                  </div>
                  <div className={toggleState === 2 ? "tab-box active" : "tab-box"}>
                    <div className="img12">
                      <img src={sProduct4} alt="" />
                    </div>
                  </div>
                  <div className={toggleState === 3 ? "tab-box active" : "tab-box"}>
                    <div className="img12">
                      <img src={sProduct1} alt="" />
                    </div>
                  </div>
                  <div className={toggleState === 4 ? "tab-box active" : "tab-box"}>
                    <div className="img12">
                      <img src={sProduct4} alt="" />
                    </div>
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
                        <img className={toggleState === 1 ? "tabs active" : "tabs"} onClick={ () => toggleTab(1)} src={sProduct2} alt="" />
                        <img className={toggleState === 2 ? "tabs active" : "tabs"} onClick={ () => toggleTab(2)} src={sProduct3} alt="" />
                        <img className={toggleState === 3 ? "tabs active" : "tabs"} onClick={ () => toggleTab(3)} src={sProduct2} alt="" />
                        <img className={toggleState === 4 ? "tabs active" : "tabs"} onClick={ () => toggleTab(4)} src={sProduct3} alt="" />
                      </div>        

                    </div>
                  </div>
                </div>

            </div>
        </div>

  )
}

export default SingleProductpagetop