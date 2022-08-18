import React from 'react'
import { useState, useEffect } from 'react'
import "./Checkout.css"
import { Input, Button } from '@nextui-org/react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Checkout() {

  const [orderDate, setOrderDate] = useState()
  const [days, setDays] = useState()
  const [price, setPrice] = useState(0)
  const [disabled, setDisabled] = useState(true)

  let navigate = useNavigate();

  let {id} = useParams();


  const dayHandler = (e) => {
    
    let date = new Date();
    setOrderDate( date.toJSON().substring(0, date.toJSON().indexOf("T")) )
    // setValidTill(date.toJSON().substring(0, date.toJSON().indexOf("T")))
    setPrice(days * 0.5)
    setDisabled(false)
  }

  const orderHandler = () => {
    axios.post(`http://localhost:8080/orders/create`,{
      days: days,
      cost: price,
      gameID:id,
      orderdate:orderDate
    }, {withCredentials:true}).then((response) => {
      navigate("/user/orders")
      setDisabled(true)
    });
    // console.log("checkout")
    
  }

  const [game, setGame] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/game/${id}`).then((response) => {
      setGame(response.data)
      // console.log(response.data);
    });

}, [])

  return (
    <main className='checkoutContainer'>
      <h1>Checkout</h1>
      <div className="checkoutSummary">
        <figure className="checkoutImg">
          <img src={game.coverImg} alt="" />
        </figure>
        <div className="checkoutGame">
          <p> Game </p>
          <h3> {game.name} </h3>
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