import React from 'react'
import UserSummary from '../../components/UserSummary/UserSummary'
import "./SearchUsers.css"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function SearchUsers() {

  const [searchedUser, setSearchedUser] = useState('');

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8080/user/all`).then((response) => {
      setUsers(response.data)
      // console.log(response.data);
    });

}, [])

  let data = users.filter((user) => {
      if (searchedUser === "") {
        return user
      } else if (user.name.toLowerCase().includes(searchedUser.toLowerCase())) {
        return user
      }
  })

  




  return (
    <main className='searchUsersContainer'>
      <h1>Search Users</h1>
      <input type="text" placeholder='Search a user' onChange={(e) => setSearchedUser(e.target.value)}/>
      <div className="searchUsersView">
      {data.length === 0 ? <></> :
        data.map((user) => (<UserSummary key={user.userID} user={user} />))
      }
      </div>
    </main>
  )
}

export default SearchUsers