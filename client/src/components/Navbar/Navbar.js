import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className="navbarLogo">
            GameVault
        </div>
        <div className="navbarLinks">
            <Link to="/">Home</Link>
            <Link to="allgames">All games</Link>
            <Link to="gamesearch">Search games</Link>
            <Link to="usersearch">Search users</Link>
            <Link to="about">About us</Link>         
        </div>
        <div className="navbarLogin">
            <button>Log in</button>
            <button>Sign up</button>
        </div>
    </nav>
  )
}

export default Navbar