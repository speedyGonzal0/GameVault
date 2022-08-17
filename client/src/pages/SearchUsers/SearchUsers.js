import React from 'react'
import UserSummary from '../../components/UserSummary/UserSummary'
import "./SearchUsers.css"
import { useState } from 'react';

function SearchUsers() {

  const [searchedUser, setSearchedUser] = useState('');

  let users = [{}, {}]

  let data = users.filter((user) => {
      if (searchedUser === "") {
        return user
      } else if (user.title.toLowerCase().includes(searchedUser.toLowerCase())) {
        return user
      }
  })


  return (
    <main className='searchUsersContainer'>
      <h1>Search Users</h1>
      <input type="text" placeholder='Search a user' onChange={(e) => setSearchedUser(e.target.value)}/>
      <div className="searchUsersView">
        <UserSummary />
        <UserSummary />
        <UserSummary />
        <UserSummary />
        <UserSummary />
        <UserSummary />
        <UserSummary />
      </div>
    </main>
  )
}

export default SearchUsers