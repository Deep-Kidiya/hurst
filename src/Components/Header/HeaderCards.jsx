import React from 'react'
import './Header.css'
import NEW from '../Image/New1.png'
import NEW2 from '../Image/Naw2.png'



const HeaderCards = () => {
  return (
    <div className='headercards'>
    <div className="container">
        <div className="headercards_container">
            <div className="slider">
                <div className="left-box">
                    <div className="top-box">
                        <h1>New</h1>
                        <h2>$ 50.00</h2>
                    </div>
                    <div className="Image2">
                        <img src={NEW} alt="" />
                    </div>
                    <div className="bottom-box">
                        <h1>Product name<br/>
                            <span>Furniture</span></h1>
                        <div className="btn">
                            <button>Buy now</button>
                        </div>
                    </div>
                </div>
                <div className="right-box">
                    <div className="Image2">
                        <img src={NEW2} alt="" />
                    </div>
                   <div className="card_text">
                        <h1>DESIGN BY <br/>
                            HURST<br/>
                            MODERN<br/>
                            <span>-2016</span></h1>
                   </div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default HeaderCards