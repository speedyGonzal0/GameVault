import React from 'react'
import "./AllGames.css"
import GameSummary from '../../components/GameSummary/GameSummary'
import { Pagination } from '@nextui-org/react';

function AllGames() {
  return (
    <div className='allGamesPage'>
        <h1> All Games </h1>
        <GameSummary/>
        <Pagination total={20} initialPage={1} loop color={'secondary'}/>
    </div>
  )
}

export default AllGames