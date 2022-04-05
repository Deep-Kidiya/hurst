import React, {useState} from 'react'
import './Online.css'
import {FaRegHeart, FaSearchPlus} from 'react-icons/fa'
import {BiRefresh} from 'react-icons/bi'
import {MdOutlineAddShoppingCart} from 'react-icons/md'

import Online1 from '../Image/Online1.png'
import Online2 from '../Image/Online2.png'
import Online3 from '../Image/Online3.png'
import Online4 from '../Image/Online4.png'
import Online5 from '../Image/Online5.png'
import Online6 from '../Image/Online6.png'
import Online7 from '../Image/Online7.png'
import Online8 from '../Image/Online8.png'

import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

const Online = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
  }

  return (
    <div className='online'>
        <div className="container">
            <div className="products_container">
                <div className="heading">
                    <h1>Purchase Online on Hurst</h1>
                </div>
                <div className="nav-line">
                    <a className={toggleState === 1 ? "tabs active" : "tabs"} onClick={ () => toggleTab(1)}>New Arrivals</a>
                    <a className={toggleState === 2 ? "tabs active" : "tabs"} onClick={ () => toggleTab(2)}>Best Seller</a>
                    <a className={toggleState === 3 ? "tabs active" : "tabs"} onClick={ () => toggleTab(3)}>Most View</a>
                    <a className={toggleState === 4 ? "tabs active" : "tabs"} onClick={ () => toggleTab(4)}>Discounts</a>
                </div>
                <div className={toggleState === 1 ? "tab-box active" : "tab-box"}>
                    <div className="product_contant">
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online1} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online2} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online3} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online4} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online5} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online6} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online7} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online8} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    
                    
                        
                
                    </div>
                </div>
                <div className={toggleState === 3 ? "tab-box active" : "tab-box"}>
                    <div className="product_contant">
                   
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online2} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online3} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online4} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online5} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online6} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online7} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online8} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    
                    
                        
                
                    </div>
                </div>
                <div className={toggleState === 2 ? "tab-box active" : "tab-box"}>
                    <div className="product_contant">
                   
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online4} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online5} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online6} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online7} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="product1">
                                <div className="image3">
                                    <img src={Online8} alt="" />
                                    <div className="img_contant">
                                        <FaRegHeart className='icon' /> |
                                        <FaSearchPlus className='icon' /> |
                                        <BiRefresh className='icon' /> |
                                        <MdOutlineAddShoppingCart className='icon' />

                                    </div>
                                </div>
                                <div className="product-text">
                                    <h1>DUMMY PRODUCT NAME</h1>
                                    <h2>Furniture</h2>
                                </div>
                                <div className="product-text product-text2 ">
                                    <h1>$ 56.20</h1>
                                    <div className="stars">
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStar className='icon' />
                                        <FaStarHalfAlt className='icon' />
                                        <FaRegStar className='icon' />
                                    </div>
                                </div>
                        </div>
                    </a>
                    
                    
                        
                
                    </div>
                </div>
                <div className={toggleState === 4 ? "tab-box active" : "tab-box"}>
                    <div className="product_contant">
                        <a href="/singleproduct">
                            <div className="product1">
                                    <div className="image3">
                                        <img src={Online8} alt="" />
                                        <div className="img_contant">
                                            <FaRegHeart className='icon' /> |
                                            <FaSearchPlus className='icon' /> |
                                            <BiRefresh className='icon' /> |
                                            <MdOutlineAddShoppingCart className='icon' />

                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h1>DUMMY PRODUCT NAME</h1>
                                        <h2>Furniture</h2>
                                    </div>
                                    <div className="product-text product-text2 ">
                                        <h1>$ 56.20</h1>
                                        <div className="stars">
                                            <FaStar className='icon' />
                                            <FaStar className='icon' />
                                            <FaStar className='icon' />
                                            <FaStarHalfAlt className='icon' />
                                            <FaRegStar className='icon' />
                                        </div>
                                    </div>
                            </div>
                        </a>
                        <a href="/singleproduct">
                            <div className="product1">
                                    <div className="image3">
                                        <img src={Online1} alt="" />
                                        <div className="img_contant">
                                            <FaRegHeart className='icon' /> |
                                            <FaSearchPlus className='icon' /> |
                                            <BiRefresh className='icon' /> |
                                            <MdOutlineAddShoppingCart className='icon' />

                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h1>DUMMY PRODUCT NAME</h1>
                                        <h2>Furniture</h2>
                                    </div>
                                    <div className="product-text product-text2 ">
                                        <h1>$ 56.20</h1>
                                        <div className="stars">
                                            <FaStar className='icon' />
                                            <FaStar className='icon' />
                                            <FaStar className='icon' />
                                            <FaStarHalfAlt className='icon' />
                                            <FaRegStar className='icon' />
                                        </div>
                                    </div>
                            </div>
                        </a>
                        <a href="/singleproduct">
                            <div className="product1">
                                    <div className="image3">
                                        <img src={Online2} alt="" />
                                        <div className="img_contant">
                                            <FaRegHeart className='icon' /> |
                                            <FaSearchPlus className='icon' /> |
                                            <BiRefresh className='icon' /> |
                                            <MdOutlineAddShoppingCart className='icon' />

                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h1>DUMMY PRODUCT NAME</h1>
                                        <h2>Furniture</h2>
                                    </div>
                                    <div className="product-text product-text2 ">
                                        <h1>$ 56.20</h1>
                                        <div className="stars">
                                            <FaStar className='icon' />
                                            <FaStar className='icon' />
                                            <FaStar className='icon' />
                                            <FaStarHalfAlt className='icon' />
                                            <FaRegStar className='icon' />
                                        </div>
                                    </div>
                            </div>
                        </a>
                        <a href="/singleproduct">
                            <div className="product1">
                                    <div className="image3">
                                        <img src={Online3} alt="" />
                                        <div className="img_contant">
                                            <FaRegHeart className='icon' /> |
                                            <FaSearchPlus className='icon' /> |
                                            <BiRefresh className='icon' /> |
                                            <MdOutlineAddShoppingCart className='icon' />

                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h1>DUMMY PRODUCT NAME</h1>
                                        <h2>Furniture</h2>
                                    </div>
                                    <div className="product-text product-text2 ">
                                        <h1>$ 56.20</h1>
                                        <div className="stars">
                                            <FaStar className='icon' />
                                            <FaStar className='icon' />
                                            <FaStar className='icon' />
                                            <FaStarHalfAlt className='icon' />
                                            <FaRegStar className='icon' />
                                        </div>
                                    </div>
                            </div>
                        </a>
                        <a href="/singleproduct">
                            <div className="product1">
                                    <div className="image3">
                                        <img src={Online4} alt="" />
                                        <div className="img_contant">
                                            <FaRegHeart className='icon' /> |
                                            <FaSearchPlus className='icon' /> |
                                            <BiRefresh className='icon' /> |
                                            <MdOutlineAddShoppingCart className='icon' />

                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h1>DUMMY PRODUCT NAME</h1>
                                        <h2>Furniture</h2>
                                    </div>
                                    <div className="product-text product-text2 ">
                                        <h1>$ 56.20</h1>
                                        <div className="stars">
                                            <FaStar className='icon' />
                                            <FaStar className='icon' />
                                            <FaStar className='icon' />
                                            <FaStarHalfAlt className='icon' />
                                            <FaRegStar className='icon' />
                                        </div>
                                    </div>
                            </div>
                        </a>
                        
                        <a href="/singleproduct">
                            <div className="product1">
                                    <div className="image3">
                                        <img src={Online7} alt="" />
                                        <div className="img_contant">
                                            <FaRegHeart className='icon' /> |
                                            <FaSearchPlus className='icon' /> |
                                            <BiRefresh className='icon' /> |
                                            <MdOutlineAddShoppingCart className='icon' />

                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <h1>DUMMY PRODUCT NAME</h1>
                                        <h2>Furniture</h2>
                                    </div>
                                    <div className="product-text product-text2 ">
                                        <h1>$ 56.20</h1>
                                        <div className="stars">
                                            <FaStar className='icon' />
                                            <FaStar className='icon' />
                                            <FaStar className='icon' />
                                            <FaStarHalfAlt className='icon' />
                                            <FaRegStar className='icon' />
                                        </div>
                                    </div>
                            </div>
                        </a>
                   
                    
                    
                        
                
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Online