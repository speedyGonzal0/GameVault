import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import { Button } from '@nextui-org/react';

function Navbar() {

  let navigate = useNavigate();
  return (
    <nav className='navbar'>
        <div className="navbarLogo">
            <h2 onClick = {() => navigate("/")}>GameVault</h2>
        </div>
        <div className="navbarLinks">
            <Link to="/"> <b>Home</b> </Link>
            <Link to="games"> <b>All games</b> </Link>
            <Link to="searchgames"> <b>Search games</b> </Link>
            <Link to="searchusers"> <b>Search users</b> </Link>
            <Link to="about"> <b>About us</b> </Link>         
        </div>
        <div className="navbarLogin">
            <Button size = "sm" shadow color="secondary">Log in</Button>
            <Button size = "sm" bordered color = "secondary">Sign up</Button>
        </div>
    </nav>
  )
}

export default Navbar