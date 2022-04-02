import React from 'react'
import './Errorpage.css'

import {GoSearch} from 'react-icons/go'


const Errorpage = () => {
  return (
    <div className='error'>
        <div className="head-bg">
            <div className="Head-text">
                <h1>ERROR</h1>
            </div>
        </div>
        <div className="container">
            <div className="btn">
                <a href="/"><h1>HOME</h1></a>
                <h2>/</h2>
                <h1>ERROR</h1>
            </div>
            <div className="error_contant">
                <div className="error-box">
                    <h1>404</h1>
                    <h2>Ooops.... Error 404</h2>
                    <h3>Sorry, But the page you are looking for does't exist</h3>
                    <div className="inputbar">
                        <input type="search here..." placeholder='Search here...' />
                        <GoSearch className='icon' />

                    </div>
                    <h4>Or</h4>
                    <div className="btn">
                        <a href="/"><button>GO TO HOME PAGE</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Errorpage