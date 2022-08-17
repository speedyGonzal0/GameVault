import React from 'react'
import UserSummary from '../../components/UserSummary/UserSummary'
import "./Following.css"

function Following() {
  return (
    <main className='followingContainer'>
        <h1> Following </h1>
        <div className="followingUsers">
            <UserSummary/>
            <UserSummary/>
            <UserSummary/>
            <UserSummary/>
            <UserSummary/>
            <UserSummary/>
            <UserSummary/>
            <UserSummary/>
        </div>
    </main>
  )
}

export default Following