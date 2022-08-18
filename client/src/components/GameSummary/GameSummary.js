import React from 'react'
import "./GameSummary.css"
import { Button, Image } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

function GameSummary() {

  let navigate = useNavigate();
  let id = 1;
  return (
    <article className='gameSummaryTile'>
      <div className="gameSummaryLeft">
        <figure className="gameSummaryImg">
          <img src="https://www.kemperlesnik.com/wp-content/uploads/2020/04/valorant-official-art.jpg" alt="" />
        </figure>
        <div className="gameSummaryDesc">
          <h3>Game Name</h3>
          <p>Publisher: Game Company</p>
          <p>Genre: Action, Multiplayer, Strategy</p>
        </div>
      </div>
      <div className="gameSummaryRight">
        <div className="gameSummaryDate">
          <h3> January 10, 2020</h3>
          <p>Release Date</p>
        </div>
        <div className="gameSummaryRating">
          <h3>4 / 5</h3>
          <p>Rating</p>
        </div>
        <div className="gameSummaryLinks">
          <Button color = "secondary" bordered onClick={() => navigate(`/games/${id}`)}>View Game Details</Button>
          <Button color = "secondary" onClick={() => navigate("/checkout")}>Rent Game</Button>
        </div>
      </div>
      
    </article>
  )
}

export default GameSummary