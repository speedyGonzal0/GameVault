import React from 'react'
import "./UserSummary.css"
import { useNavigate } from 'react-router-dom';

function UserSummary() {

    let navigate = useNavigate();

  return (
    <article className='userSummaryTile' onClick={() => navigate("/user/1")}>
        <figure className="userSummaryImg">
          <img src="https://images7.alphacoders.com/749/thumb-1920-749807.png" alt="" />          
        </figure>
        <h3> User name </h3>
        <p> User email </p>
    </article>
  )
}

export default UserSummary