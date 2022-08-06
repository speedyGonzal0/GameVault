import React from 'react'
import "./CartItem.css"
import {CgRemove} from "react-icons/cg"


function CartItem({ item, idx }) {

    let index = idx;
    let name = item.name;
    let period = item.period;
    let price = item.price;
    
  return (
    <div className='cartItemContainer'>
        <div className="cartItemLeft">
            <p> {index + 1} </p>    
            <b> {name} </b>
        </div>
        <div className="cartItemRight">
            <p> {period} </p>
            <p> ${price} </p>
            <CgRemove size="1.25em" color='#ef233c'/>
        </div>        
    </div>
  )
}

export default CartItem