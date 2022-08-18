import React from 'react'
import { useState } from 'react'
import "./Checkout.css"
import { Input, Button } from '@nextui-org/react';

function Checkout() {

  const [orderDate, setOrderDate] = useState()
  const [days, setDays] = useState()
  const [price, setPrice] = useState(0)
  const [disabled, setDisabled] = useState(true)




  const dayHandler = (e) => {
    
    let date = new Date();
    setOrderDate( date.toJSON().substring(0, date.toJSON().indexOf("T")) )
    // setValidTill(date.toJSON().substring(0, date.toJSON().indexOf("T")))
    setPrice(days * 0.5)
    setDisabled(false)
  }

  const orderHandler = () => {
    console.log("checkout")
    setDisabled(true)
  }

  return (
    <main className='checkoutContainer'>
      <h1>Checkout</h1>
      <div className="checkoutSummary">
        <figure className="checkoutImg">
          <img src="https://www.kemperlesnik.com/wp-content/uploads/2020/04/valorant-official-art.jpg" alt="" />
        </figure>
        <div className="checkoutGame">
          <p> Game </p>
          <h3> Valorant </h3>
        </div>
        <div className="checkoutTime">
          <p>Rent for</p>
          <Input type="number" bordered placeholder="Type no. of days" onChange={(e) => setDays(e.target.value)}/>
          <Button color="secondary" size="sm" bordered onClick={dayHandler}> Submit </Button>
        </div>
        <div className="checkoutPrice">
          <p>Price</p>
          <h3> ${price}</h3>
        </div>
      </div>
      <Button disabled={disabled} color="secondary" shadow onClick={orderHandler}> Place Order </Button>
    </main>
  )
}

export default Checkout