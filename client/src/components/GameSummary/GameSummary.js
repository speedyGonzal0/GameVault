import React from 'react'
import "./GameSummary.css"
import { Button, Image } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

function GameSummary( { game } ) {

  let navigate = useNavigate();
  let id = 1;
  return (
    <article className='gameSummaryTile'>
      <div className="gameSummaryLeft">
        <figure className="gameSummaryImg">
          <img src={game.coverImg} alt="" />
        </figure>
        <div className="gameSummaryDesc">
          <h3>{game.name}</h3>
          {/* <p>Publisher: Game Company</p>
          <p>Genre: Action, Multiplayer, Strategy</p> */}
        </div>
      </div>
      <div className="gameSummaryRight">
        <div className="gameSummaryDate">
          <h3> {game.releasedate}</h3>
          <p>Release Date</p>
        </div>
        <div className="gameSummaryRating">
          <h3>{game.metarating}</h3>
          <p>Metacritic Rating</p>
        </div>
        <div className="gameSummaryLinks">
          <Button color = "secondary" bordered onClick={() => navigate(`/games/${game.gameID}`)}>View Game Details</Button>
          <Button color = "secondary" onClick={() => navigate(`/checkout/${game.gameID}`)}>Rent Game</Button>
        </div>
      </div>
      
    </article>
  )
}

export default GameSummary