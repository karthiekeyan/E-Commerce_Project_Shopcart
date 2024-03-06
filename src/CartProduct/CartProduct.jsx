import React from 'react'
import './CartProduct.css'
import arrow_icon from "../Components/Assets/breadcrum_arrow.png"

const CartProduct = (props) => {
    const {product} = props;
  return (
    <div className='cardproduct'>
        <h5>Home <img src={arrow_icon} alt="" />Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}</h5>
    </div>
  )
}

export default CartProduct