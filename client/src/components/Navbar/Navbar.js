import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import { Button, Dropdown, User, Text } from '@nextui-org/react';
import { FiUser } from 'react-icons/fi'
import { BiBookmarkAltPlus } from 'react-icons/bi';
import {FiShoppingCart} from 'react-icons/fi'
import {RiUserFollowLine} from 'react-icons/ri'
import Cart from '../Cart/Cart';

function Navbar( {login} ) {

  let navigate = useNavigate();

  let id = 1;

  const handleLogout = () => {
    navigate("/")
  }
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
        {login? 
          <div className="navbarLoggedIn">
            <Dropdown placement="bottom-left">
              <Dropdown.Trigger>
                <User
                  bordered
                  as="button"
                  size="lg"
                  color="secondary"
                  name="Username"
                  text="Username"
                  pointer
                  squared
                />
              </Dropdown.Trigger>
              <Dropdown.Menu color="secondary" aria-label="User Actions">
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    zoey@example.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" icon={<FiUser/>}>
                  <p onClick={() => navigate("/user")}>View Profile</p>
                </Dropdown.Item>
                <Dropdown.Item key="following" icon={<RiUserFollowLine/>}> <p onClick={() => navigate("/following")}>Following</p></Dropdown.Item>
                <Dropdown.Item key="wishlist" icon={<BiBookmarkAltPlus/>}> <p onClick={() => navigate("/wishlist")}>Wishlist</p></Dropdown.Item>
                <Dropdown.Item key="rents" icon={<FiShoppingCart/>}> <p onClick={() => navigate("/orders")}>Orders</p></Dropdown.Item>
                
                <Dropdown.Item key="logout" color="error" withDivider>
                  <div onClick={ handleLogout }> <b>Log Out</b> </div>          
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Cart/>
            
          </div>
           :
          <div className="navbarLogin">
            <Button size = "sm" shadow color="secondary">Log in</Button>
            <Button size = "sm" bordered color = "secondary">Sign up</Button>
          </div>
        }
        
    </nav>
  )
}

export default Navbar