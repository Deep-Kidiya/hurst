import React from 'react'
import './AboutUs.css'

import About from '../Image/about.png'
import About1 from '../Image/about1.png'
import About2 from '../Image/about2.png'
import About3 from '../Image/about3.png'
import About4 from '../Image/about4.png'

import {BsTwitter} from 'react-icons/bs'
import {AiOutlineDribbble} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'




const AboutUs = () => {
  return (
    <div className='about'>
        <div className="head-bg">
        <div className="Head-text">
            <h1>ABOUT US</h1>
        </div>
        
      
       </div>
       <div className="container">
            <div className="btn">
                <a href="/"><h1>HOME</h1></a>
                <h2>/</h2>
                <h1>ABOUT US</h1>
            </div>  
            <div className="about_container">
                <div className="about-box">
                    <div className="img5">
                        <img src={About} alt="" />
                    </div>
                    <div className="text-box">
                        <h1>ABOUT HURST</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magn aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia is be deserunt mollit anim id est laborum.</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit. voluptatem accusantium doloremque laudantium, totam remes aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, conse ctetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore </p>
                    </div>
                </div>

                <div className="heading">
                    <h1>Team Member</h1>
                </div>
                <div className="team-box">
                    <div className="team-card">
                        <div className="img6">
                            <img src={About1} alt="" />
                        </div>
                        <div className="team-text">
                            <h1>NANCY HOLLAND</h1>
                            <h2>CHAIRMAN</h2>
                            <p>There are many variations of passage of Lorem Ipsum available, but the in majority have suffered.</p>
                        </div>
                        <div className="team-icon">
                            <BsTwitter className='icon' />
                            <AiOutlineDribbble className='icon' />
                            <FaFacebookF className='icon' />
                            <FaLinkedinIn className='icon' />
                            <TiSocialPinterest className='icon' />
                        </div>
                    </div>
                    <div className="team-card">
                        <div className="img6">
                            <img src={About2} alt="" />
                        </div>
                        <div className="team-text">
                            <h1>HEATHER ESTRADA</h1>
                            <h2>CHIEF MARKETING</h2>
                            <p>There are many variations of passage of Lorem Ipsum available, but the in majority have suffered.</p>
                        </div>
                        <div className="team-icon">
                            <BsTwitter className='icon' />
                            <AiOutlineDribbble className='icon' />
                            <FaFacebookF className='icon' />
                            <FaLinkedinIn className='icon' />
                            <TiSocialPinterest className='icon' />
                        </div>
                    </div>
                    <div className="team-card">
                        <div className="img6">
                            <img src={About3} alt="" />
                        </div>
                        <div className="team-text">
                            <h1>NANCY HOLLAND</h1>
                            <h2>FASHION DESINGER</h2>
                            <p>There are many variations of passage of Lorem Ipsum available, but the in majority have suffered.</p>
                        </div>
                        <div className="team-icon">
                            <BsTwitter className='icon' />
                            <AiOutlineDribbble className='icon' />
                            <FaFacebookF className='icon' />
                            <FaLinkedinIn className='icon' />
                            <TiSocialPinterest className='icon' />
                        </div>
                    </div>
                    <div className="team-card">
                        <div className="img6">
                            <img src={About4} alt="" />
                        </div>
                        <div className="team-text">
                            <h1>SARA KNIGHT</h1>
                            <h2>GRAPHIC DESIGN</h2>
                            <p>There are many variations of passage of Lorem Ipsum available, but the in majority have suffered.</p>
                        </div>
                        <div className="team-icon">
                            <BsTwitter className='icon' />
                            <AiOutlineDribbble className='icon' />
                            <FaFacebookF className='icon' />
                            <FaLinkedinIn className='icon' />
                            <TiSocialPinterest className='icon' />
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default AboutUs