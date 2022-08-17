import React from 'react'
import "./VisitProfile.css"
import { Input, Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUserAdd, AiOutlineWarning } from "react-icons/ai"
import GameSummary from '../../components/GameSummary/GameSummary';
import ViewComment from '../../components/ViewComment/ViewComment';


function VisitUserProfile() {

  let navigate = useNavigate();


  return (
    <main className='visitProfileContainer'>
      <h1> User Profile </h1>
      <div className="visitProfileTop">
        <figure className='visitProfileImg'>
          <img src="https://images7.alphacoders.com/749/thumb-1920-749807.png" alt="" />
        </figure>
        <div className="visitProfileDesc">
          <h3> User name </h3>
          <p>Email : User Email </p>
          <div className="visitProfileInfo">            
            <p>Orders: 4</p>
            <p>Comments: 5</p>
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
        <GameSummary/>
      </div>
      <div className="visitProfileComments">
        <h3>User Comments</h3>
        <ViewComment/>
      </div>
      <div className="visitProfileGames">
        <h3>Wishlisted games</h3>
        <GameSummary/>
      </div>



    </main>
  )
}

export default VisitUserProfile