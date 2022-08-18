import React from 'react'
import "./AdminNavbar.css"
import { Link, useNavigate } from "react-router-dom";
import { Button } from '@nextui-org/react';

function AdminNavbar() {

    let navigate = useNavigate();

    return (
        <nav className='adminNavbar'>
            <div className="adminNavbarLogo">
                <h2 onClick={() => navigate("/")}>GameVault</h2>
            </div>
            <div className="adminNavbarLinks">
                {/* <Link to="/dashboard"> <b>Dashboard</b> </Link> */}
                <Link to="/reports/users"> <b>Reported users</b> </Link>
                <Link to="/reports/comments"> <b>Reported comments</b> </Link>
                {/* <Link to="searchgames"> <b>Search games</b> </Link> */}
                <Link to="/requests"> <b>Game requests</b> </Link>
                <Link to="/addgame"> <b>Add game</b> </Link>
                <Link to="/bans"> <b>Banned users</b> </Link>
                
            </div>

            <div className="adminNavbarLogout">
                <Button color="secondary"> Log out </Button>

            </div>

        </nav>
    )
}

export default AdminNavbar