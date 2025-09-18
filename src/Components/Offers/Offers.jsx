import React from 'react'
import './Offers.css'
import exlcusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button className='offers-btn'>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exlcusive_image} alt='exclusive-offers'/>
    </div>
    </div>
  )
}

export default Offers
