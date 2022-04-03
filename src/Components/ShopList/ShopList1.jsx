import React from 'react'
import './ShopList1.css'


import Shoplist1 from '../Image/Shoplist1.png'
import Shoplist2 from '../Image/Shoplist2.png'
import Shoplist3 from '../Image/Shoplist3.png'
import Shoplist4 from '../Image/Shoplist4.png'
import Shoplist5 from '../Image/Shoplist5.png'


import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
import {ImSearch} from 'react-icons/im'
import {FaBars} from 'react-icons/fa'
import {RiCheckboxBlankFill} from 'react-icons/ri'
import {BiDotsVertical} from 'react-icons/bi'

const ShopList1 = () => {
  return (
    <div>
        <div className='shoplist'>
            <div className="shop-bg">
                <div className="Head-text">
                    <h1> PRODUCT LIST VIEW</h1>
                </div>
            </div>
             <div className="container">
                <div className="btn">
                    <a href="/"><h1>HOME</h1></a>
                    <h2>/</h2>
                    <h1> PRODUCT LIST VIEW</h1>
                </div>
                 <div className="products_container">
                    <div className="contant-box">
                        <div className="product-left">
                            <div className="top-left">
                                <input type="shearch" placeholder='Shearch Here...'/>
                                <a href="#"><ImSearch className='icon' /></a>
                            </div>
                            <div className="item_contant">
                                <h1>CATEGORIES</h1>

                                <h2>Chair</h2>
                                <h2 className='active'>Furniture</h2>
                                <h4>Men Bag</h4>
                                <h4>Shoes</h4>
                                <h4>Watch</h4>
                                <h4>T-Shirt</h4>
                                <h4>Shirt</h4>
                                <h2>Accessories</h2>
                                <h2>Top Brands</h2>
                                <h2>Jewelry</h2>
                            </div>
                            <div className="item_contant">
                                <h1>PRICE</h1>
                                <h2>You range : <span>$50 - $999</span></h2>
                            </div>
                            <div className="item_contant">
                                <h1>COLOR</h1>

                                <div className="item1">
                                  <div className="le-1">
                                    <a href="#"><RiCheckboxBlankFill className=' icon1' /></a>
                                    <h2>LightSalmon</h2>
                                  </div>
                                   <h3>12</h3>
                               </div>
                               <div className="item1">
                                  <div className="le-1">
                                    <a href="#"><RiCheckboxBlankFill className=' icon2' /></a>
                                    <h2>Dark Salmon</h2>
                                  </div>
                                   <h3>20</h3>
                               </div>
                               <div className="item1">
                                  <div className="le-1">
                                    <a href="#"><RiCheckboxBlankFill className=' icon3' /></a>
                                    <h2>Tomato</h2>
                                  </div>
                                   <h3>59</h3>
                               </div>
                               <div className="item1">
                                  <div className="le-1">
                                    <a href="#"><RiCheckboxBlankFill className=' icon4' /></a>
                                    <h2>Deep Sky Blue</h2>
                                  </div>
                                   <h3>45</h3>
                               </div>
                               <div className="item1">
                                  <div className="le-1">
                                    <a href="#"><RiCheckboxBlankFill className=' icon5' /></a>
                                    <h2>Electric Purple</h2>
                                  </div>
                                   <h3>78</h3>
                               </div>
                               <div className="item1">
                                  <div className="le-1">
                                    <a href="#"><RiCheckboxBlankFill className=' icon6' /></a>
                                    <h2>Atlantis</h2>
                                  </div>
                                   <h3>10</h3>
                               </div>
                            </div>
                            <div className="item_contant">
                                <h1>SIZE</h1>
                                <div className="size">
                                    <h2>S</h2>
                                    <h2>M</h2>
                                    <h2>L</h2>
                                    <h2>SL</h2>
                                    <h2>XL</h2>
                                </div>
                            </div>
                        </div>
                        <div className="product-right">
                            <div className="top-box">                                
                                <div className="top-nav">
                                    <div className="left">
                                    <h1 ><BiDotsVertical className='margin' /><BiDotsVertical className='margin' /><BiDotsVertical className='margin' /></h1>
                                    <h1 className='active'><FaBars /></h1>
                                    </div>
                                    <div className="right">
                                    <h1>Showing 01-09 of 17 Results</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="shoplist_contant">
                               <div className="shoplist-box">
                                    <div className="img8">
                                        <img src={Shoplist1} alt="" />
                                    </div>
                                    <div className="box_contant">
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
                                        <h1>$ 56.20 <span>$ 96.20</span></h1>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum, you neede be sure there isn't anythin  going to use a passage embarrassing.</p>
                                    </div>
                               </div>
                               <div className="shoplist-box">
                                    <div className="img8">
                                        <img src={Shoplist2} alt="" />
                                    </div>
                                    <div className="box_contant">
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
                                        <h1>$ 56.20 <span>$ 96.20</span></h1>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum, you neede be sure there isn't anythin  going to use a passage embarrassing.</p>
                                    </div>
                               </div>
                               <div className="shoplist-box">
                                    <div className="img8">
                                        <img src={Shoplist3} alt="" />
                                    </div>
                                    <div className="box_contant">
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
                                        <h1>$ 56.20 <span>$ 96.20</span></h1>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum, you neede be sure there isn't anythin  going to use a passage embarrassing.</p>
                                    </div>
                               </div>
                               <div className="shoplist-box">
                                    <div className="img8">
                                        <img src={Shoplist4} alt="" />
                                    </div>
                                    <div className="box_contant">
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
                                        <h1>$ 56.20 <span>$ 96.20</span></h1>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum, you neede be sure there isn't anythin  going to use a passage embarrassing.</p>
                                    </div>
                               </div>
                               <div className="shoplist-box">
                                    <div className="img8">
                                        <img src={Shoplist5} alt="" />
                                    </div>
                                    <div className="box_contant">
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
                                        <h1>$ 56.20 <span>$ 96.20</span></h1>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum, you neede be sure there isn't anythin  going to use a passage embarrassing.</p>
                                    </div>
                               </div>
                               <div className="shoplist-box">
                                    <div className="img8">
                                        <img src={Shoplist1} alt="" />
                                    </div>
                                    <div className="box_contant">
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
                                        <h1>$ 56.20 <span>$ 96.20</span></h1>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum, you neede be sure there isn't anythin  going to use a passage embarrassing.</p>
                                    </div>
                               </div>
                            </div>
                         
                            <div className="number">
                                <AiOutlineArrowLeft className='icon' /> 
                                <h1 className='active'>01</h1>
                                <h1>02</h1>
                                <h1>03</h1>
                                <h1>04</h1>
                                <AiOutlineArrowRight className='icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ShopList1