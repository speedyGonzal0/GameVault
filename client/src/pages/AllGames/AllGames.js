import React from 'react'
import "./AllGames.css"
import GameSummary from '../../components/GameSummary/GameSummary'

function AllGames() {
  return (
    <div className='allGamesPage'>
        <h1> All Games </h1>
        <GameSummary/>
        

    </div>
  )
}

export default AllGames