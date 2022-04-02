import React from 'react'
import './SgingleBlog.css'

import {GrFacebookOption} from 'react-icons/gr'
import {IoLogoTwitter} from 'react-icons/io'
import {RiLinkedinFill} from 'react-icons/ri'
import {TiSocialDribbble, TiSocialInstagram} from 'react-icons/ti'

import sblog1 from '../Image/sblog1.png'
import sblog2 from '../Image/sblog2.png'



const SingleBlogpage = () => {
  return (
    <div className='singleblog'>
        <div className="head-bg">
            <div className="Head-text">
                <h1>SINGLE-BLOG</h1>
            </div>
        </div>
        <div className="container">
            <div className="btn">
                <a href="/"><h1>HOME</h1></a>
                <h2>/</h2>
                <h1>SINGLE-BLOG</h1>
            </div>  
            <div className="singleblog_contant">
                <div className="img9">
                    
                </div>
                <div className="singleblog-text">
                    <h1>FARNITURE DRAWING 2021</h1>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrink ing from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will
                    </p>
                    <p>which is the same as saying through shrink ing from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour.On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrink ing from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour.</p>
                   <div className="social-links">
                        <div className="social-icons">
                            <h2>SHARE</h2>
                            <a href="#"><GrFacebookOption className='icon'/></a>
                            <a href="#"><IoLogoTwitter className='icon'/></a>
                            <a href="#"><RiLinkedinFill className='icon'/></a>
                            <a href="#"><TiSocialDribbble className='icon'/></a>
                            <a href="#"><TiSocialInstagram className='icon'/></a>
                        </div>
                        <div className="social-tag">
                            <h2 className='active'>TAGS</h2>
                            <h2>Chair</h2>
                            <h2> Furniture</h2>
                            <h2> Light</h2>
                            <h2>Table</h2>
                        </div>
                   </div>
                   <div className="singleblog-comment">
                        <div className="img10">
                            <img src={sblog2} alt="" />
                        </div>
                        <div className="singleblog-c">
                            <h1>Salim Rana</h1>
                            <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter conseques ences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally car mstances occur in which toil and pain can procure him some great pleasure.</p>

                        </div>
                   </div>
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
  )
}

export default SingleBlogpage