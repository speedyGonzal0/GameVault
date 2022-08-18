import React from 'react'
import "./UserSummary.css"
import { useNavigate } from 'react-router-dom';

function UserSummary( {user} ) {

    let navigate = useNavigate();

  return (
    <article className='userSummaryTile' onClick={() => navigate(`/user/${user.userID}`)}>
        <figure className="userSummaryImg">
          <img src={user.img} alt="" />          
        </figure>
        <h3> {user.name} </h3>
        <p> {user.email} </p>
    </article>
  )
}

export default UserSummary