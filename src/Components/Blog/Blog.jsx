import React from 'react'
import './Blog.css'


import {AiOutlineArrowLeft, AiOutlineArrowRight, AiFillHeart} from 'react-icons/ai'
import {FaLayerGroup} from 'react-icons/fa'
import {BsFillShareFill} from 'react-icons/bs'

import Blog5 from '../Image/Blog5.png'
import Blog2 from '../Image/Blog2.png'
import Blog3 from '../Image/Blog3.png'

const Blog = () => {
  return (
    <div className='blog'>
        <div className="container">
            <div className="blog_container">
            <div className="heading">
                    <h1>From The Blog</h1>
                </div>
            </div>
            <div className="blogpage_container">

                <div className="blogpage1_contant">
                    <div className="blog-card">
                        <div className="img7">
                            <img src={Blog5} alt="" />
                            <div className="img7-inner">
                                <h1><AiFillHeart className='icon' /> 89 Like</h1>
                                <h1><FaLayerGroup className='icon' /> 59 Commats</h1>
                                <h1><BsFillShareFill className='icon' /> 59 Share</h1>
                            </div>
                        </div>
                        <div className="blog-text">
                            <div className="top">
                                <div className="blog-number">
                                    <h1>30</h1>
                                </div>
                                <div className="text">
                                    <h1>JUNE, 2021</h1>
                                    <h2>FARNITURE DRAWING 2016</h2>
                                </div>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsumes available, but the majority have suffered If you are done to use a passage  Lorem Ipsum, you alteration in some anything embarrassing  from dhaka.</p>
                            <div className="btn1">
                                <a href="#">Read more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="img7">
                            <img src={Blog2} alt="" />
                            <div className="img7-inner">
                                <h1><AiFillHeart className='icon' /> 89 Like</h1>
                                <h1><FaLayerGroup className='icon' /> 59 Commats</h1>
                                <h1><BsFillShareFill className='icon' /> 59 Share</h1>
                            </div>
                        </div>
                        <div className="blog-text">
                            <div className="top">
                                <div className="blog-number">
                                    <h1>30</h1>
                                </div>
                                <div className="text">
                                    <h1>JUNE, 2021</h1>
                                    <h2>FARNITURE DRAWING 2016</h2>
                                </div>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsumes available, but the majority have suffered If you are done to use a passage  Lorem Ipsum, you alteration in some anything embarrassing  from dhaka.</p>
                            <div className="btn1">
                                <a href="#">Read more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="img7">
                            <img src={Blog3} alt="" />
                            <div className="img7-inner">
                                <h1><AiFillHeart className='icon' /> 89 Like</h1>
                                <h1><FaLayerGroup className='icon' /> 59 Commats</h1>
                                <h1><BsFillShareFill className='icon' /> 59 Share</h1>
                            </div>
                        </div>
                        <div className="blog-text">
                            <div className="top">
                                <div className="blog-number">
                                    <h1>30</h1>
                                </div>
                                <div className="text">
                                    <h1>JUNE, 2021</h1>
                                    <h2>FARNITURE DRAWING 2016</h2>
                                </div>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsumes available, but the majority have suffered If you are done to use a passage  Lorem Ipsum, you alteration in some anything embarrassing  from dhaka.</p>
                            <div className="btn1">
                                <a href="#">Read more...</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog