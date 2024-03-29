import React from 'react'
import "./VisitProfile.css"
import { Input, Button } from '@nextui-org/react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineUserAdd, AiOutlineWarning } from "react-icons/ai"
import GameSummary from '../../components/GameSummary/GameSummary';
import ViewComment from '../../components/ViewComment/ViewComment';
import { useEffect, useState } from 'react';
import axios from 'axios';


function VisitUserProfile() {

  let navigate = useNavigate();

  let {id} = useParams();

  const [user, setUser] = useState({})
  const [orders, setOrders] = useState([])
  const [comments, setComments] = useState([])
  const [wishlists, setWishlists] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8080/user/${id}`).then((response) => {
      setUser(response.data)
      // console.log(response.data);
    });

    axios.get(`http://localhost:8080/orders/user/${id}`).then((response) => {
      setOrders(response.data)
      // console.log(response.data);
    });

    axios.get(`http://localhost:8080/comment/user/${id}`).then((response) => {
      setComments(response.data)
      // console.log(response.data);
    });

    axios.get(`http://localhost:8080/wishlist/user/${id}`).then((response) => {
      setWishlists(response.data)
      // console.log(response.data);
    });

}, [])


  return (
    <main className='visitProfileContainer'>
      <h1> User Profile </h1>
      <div className="visitProfileTop">
        <figure className='visitProfileImg'>
          <img src={user.img} alt="" />
        </figure>
        <div className="visitProfileDesc">
          <h3> {user.name} </h3>
          <p>Email : {user.email} </p>
          <div className="visitProfileInfo">            
            <p>Orders: {orders.length}</p>
            <p>Comments: {comments.length }</p>
            <p>Wishlisted games: 9 </p>
          </div>
          
        </div>
        <div className="visitProfileInteractions">
          <Button size="sm" color="secondary" iconRight={<AiOutlineUserAdd size="1.25em"/>}> Follow </Button>
          <Button size="sm" bordered color="error" iconRight={<AiOutlineWarning size="1.25em"/>}>Report </Button>
        </div>
      </div>
      <div className="visitProfileGames">
        <h3>Games played</h3>
        {  orders.map((order) => (<GameSummary key={order.orderID} game={order.game}/>))}        
      </div>
      <div className="visitProfileComments">
        <h3>User Comments</h3>
        {comments.length === 0 ? <></>: 
          comments.map((comment) => (
            <div className="visitProfileCommentContainer" key={comment.commentID}>
              <div className="visitProfileCommentGame">
                <h3>{ comment.game.name}</h3>
                <Button color="secondary" size="sm" onClick={() => navigate(`/games/${comment.game.gameID}`)}> View game </Button>
              </div>
              <ViewComment comment={comment} />
            </div>

          ))
        }
      </div>
      <div className="visitProfileGames">
        <h3>Wishlisted games</h3>
        {wishlists.length === 0 ? <></> :
          wishlists.map((wishlist) => (
            <GameSummary key={wishlist.wishID} game={wishlist.game}/> 
          ))
        }
        {/* <GameSummary/> */}
      </div>



    </main>
  )
}

export default VisitUserProfile