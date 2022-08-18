import React from 'react'
import "./AllGames.css"
import GameSummary from '../../components/GameSummary/GameSummary'
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { Pagination } from '@nextui-org/react';

function AllGames() {

  const [searchedGame, setSearchedGame] = useState('');

  const [games, setGames] = useState([])


  useEffect(() => {
    axios.get("http://localhost:8080/game/all").then((response) => {
      setGames(response.data)
      // console.log(response.data);
    });

  }, [])

  let data = games.filter((game) => {
    if (searchedGame === "") {
      return game
    } else if (game.name.toLowerCase().includes(searchedGame.toLowerCase())) {
      return game
    }
  })


  return (
    <div className='allGamesPage'>
      <h1> Games </h1>
      <input type="text" placeholder='Search a game' onChange={(e) => setSearchedGame(e.target.value)} />
      {data.length === 0 ? <></> :
        data.map((game) => (<GameSummary key={game.gameID} game={game} />))
      }

      {/* <Pagination total={20} initialPage={1} loop color={'secondary'}/> */}
    </div>
  )
}

export default AllGames