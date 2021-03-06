import React, {useState} from 'react'
import './ShopI.css'

import Product1 from '../Image/Product1.png'
import Product2 from '../Image/Product2.png'
import Product3 from '../Image/Product3.png'
import Product4 from '../Image/Product4.png'
import Online1 from '../Image/Online1.png'
import Online2 from '../Image/Online2.png'
import Online3 from '../Image/Online3.png'
import Online4 from '../Image/Online4.png'
import Online5 from '../Image/Online5.png'
import Online6 from '../Image/Online6.png'
import Online7 from '../Image/Online7.png'
import Online8 from '../Image/Online8.png'

import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
import {FaRegHeart, FaSearchPlus} from 'react-icons/fa'
import {BiRefresh} from 'react-icons/bi'
import {MdOutlineAddShoppingCart} from 'react-icons/md'

const ShopI = () => {


    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }



    return (
    <div className='shopi'>
       <div className="shop-bg">
        <div className="Head-text">
            <h1>SHOP</h1>
        </div>
      
       </div>
      <div className="container">
        <div className="btn">
            <a href="/"><h1>HOME</h1></a>
            <h2>/</h2>
            <h1>SHOP</h1>
        </div>
        <div className="products_container">
          <div className="top-nav">
            <div className="left">
              <h1>Categories</h1>
              <h1>Price</h1>
              <h1>Color</h1>
              <h1>Size</h1>
            </div>
            <div className="right">
              <h1>Showing 01-09 of 17 Results</h1>
            </div>
          </div>
         <div className={toggleState === 1 ? "tab-box active" : "tab-box"}>
            <div className="product_contant">
                <a href="/singleproduct">
                    <div className="product1">
                        <div className="image3">
                            <img src={Product1} alt="" />
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
                            <img src={Product2} alt="" />
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
                            <img src={Product3} alt="" />
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
                            <img src={Product4} alt="" />
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
                            <img src={Product3} alt="" />
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
                            <img src={Product4} alt="" />
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
                            <img src={Product1} alt="" />
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
                            <img src={Product2} alt="" />
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
                            <img src={Product3} alt="" />
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
                            <img src={Product4} alt="" />
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
                            <img src={Product1} alt="" />
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
                            <img src={Product2} alt="" />
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
                            <img src={Product3} alt="" />
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
                            <img src={Product4} alt="" />
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
                            <img src={Product1} alt="" />
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
                            <img src={Product2} alt="" />
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
                            <img src={Product3} alt="" />
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
                            <img src={Product4} alt="" />
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
                            <img src={Product1} alt="" />
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
                            <img src={Product2} alt="" />
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
            </div>
         </div>
          <div className="number">
            <div className={toggleState === 1 ? "tabs active" : "tabs"} onClick={ () => toggleTab(1)}>01</div>
            <div className={toggleState === 2 ? "tabs active" : "tabs"} onClick={ () => toggleTab(2)}>02</div>
            <div className={toggleState === 3 ? "tabs active" : "tabs"} onClick={ () => toggleTab(3)}>03</div>
            <div className={toggleState === 4 ? "tabs active" : "tabs"} onClick={ () => toggleTab(4)}>04</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopI