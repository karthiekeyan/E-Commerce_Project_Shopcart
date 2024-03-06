import React from 'react'
import './Offers.css';
import exclusive_icon from '../Assets/exclusive_icon.png';


const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h2>Offers For You</h2>
            <p> ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
        <img src={exclusive_icon} alt='exclusive items' />

        </div>

    </div>
  )
}

export default Offers