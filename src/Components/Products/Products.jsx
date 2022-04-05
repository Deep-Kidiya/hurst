import React from 'react'
import './Products.css'
import Product1 from '../Image/Product1.png'
import Product2 from '../Image/Product2.png'
import Product3 from '../Image/Product3.png'
import Product4 from '../Image/Product4.png'
import discount from '../Image/discount.png'
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
import {BsArrowRightShort} from 'react-icons/bs'
import {FaRegHeart, FaSearchPlus} from 'react-icons/fa'
import {BiRefresh} from 'react-icons/bi'
import {MdOutlineAddShoppingCart} from 'react-icons/md'



const Products = () => {
  return (
    <div className='products'>
        <div className="container">
            <div className="products_container">
                <div className="heading">
                    <h1>Featured Products</h1>
                </div>
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
                        <div className="m-3">
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
                        </div>
                    </a>
                    <a href="/singleproduct">
                        <div className="m-2">
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
                        </div>
                    </a>
                   <a href="/singleproduct">
                   <div className="m-1">
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
                    </div>
                   </a>
                   
                    
             
                </div>
                <div className="discount">
                   <div className="image4">
                     <img src={discount} alt="" />
                   </div>
                    <div className="discount-text">
                        <h1>Discount 50%</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does eiusmodes tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venim.</p>
                        <div className="btn">
                            <a href="#">GET DISCOUNT <BsArrowRightShort className='icon' /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products