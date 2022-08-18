import React from 'react'
import "./AllGames.css"
import GameSummary from '../../components/GameSummary/GameSummary'
import { useState } from 'react';
// import { Pagination } from '@nextui-org/react';

function AllGames() {

  const [searchedGame, setSearchedGame] = useState('');

  let games = [{}, {}]

  let data = games.filter((game) => {
      if (searchedGame === "") {
        return game
      } else if (game.title.toLowerCase().includes(searchedGame.toLowerCase())) {
        return game
      }
  })


  return (
    <div className='allGamesPage'>
      <h1> Games </h1>
      <input type="text" placeholder='Search a game' onChange={(e) => setSearchedGame(e.target.value)}/>

      <GameSummary />
      {/* <Pagination total={20} initialPage={1} loop color={'secondary'}/> */}
    </div>
  )
}

export default AllGames