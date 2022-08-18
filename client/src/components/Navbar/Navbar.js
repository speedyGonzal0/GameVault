import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import { Button, Dropdown, User, Text, Modal, Input } from '@nextui-org/react';
import { FiUser } from 'react-icons/fi'
import { BiBookmarkAltPlus } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi'
import { RiUserFollowLine } from 'react-icons/ri'
import { AiOutlineSend } from 'react-icons/ai'
import { useState } from 'react';

function Navbar({ login }) {

  let navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const openHandler = () => {
    setVisible(true);

  };
  const closeHandler = () => setVisible(false);

  let id = 1;

  const handleLogout = () => {
    navigate("/")
  }
  return (
    <nav className='navbar'>
      <div className="navbarLogo">
        <h2 onClick={() => navigate("/")}>GameVault</h2>
      </div>
      <div className="navbarLinks">
        <Link to="/"> <b>Home</b> </Link>
        <Link to="games"> <b>Games</b> </Link>
        {/* <Link to="searchgames"> <b>Search games</b> </Link> */}
        <Link to="searchusers"> <b>Search users</b> </Link>
        <b onClick={openHandler}>Request game</b>
        <Modal
          closeButton
          // blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <h2> Request a game </h2>
          </Modal.Header>
          <Modal.Body>
            <Input bordered placeholder='Enter game name'/>

          </Modal.Body>
          <Modal.Footer justify='center'>
            <Button shadow color="secondary" > Request </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {login ?
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
              <Dropdown.Item key="settings" icon={<FiUser />}>
                <p onClick={() => navigate("/user")}>View profile</p>
              </Dropdown.Item>
              <Dropdown.Item key="following" icon={<RiUserFollowLine />}> <p onClick={() => navigate("/user/following")}>Followed users</p></Dropdown.Item>
              <Dropdown.Item key="wishlist" icon={<BiBookmarkAltPlus />}> <p onClick={() => navigate("/user/wishlist")}>Wishlist</p></Dropdown.Item>
              <Dropdown.Item key="rents" icon={<FiShoppingCart />}> <p onClick={() => navigate("/user/orders")}>Orders</p></Dropdown.Item>
              {/* <Dropdown.Item key="request" icon={<AiOutlineSend />}> <p onClick={openHandler}>Request game</p></Dropdown.Item> */}

              <Dropdown.Item key="logout" color="error" withDivider>
                <div onClick={handleLogout}> <b>Log Out</b> </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
        :
        <div className="navbarLogin">
          <Button size="sm" shadow color="secondary" onClick={() => navigate("/login")}>Log in</Button>
          <Button size="sm" bordered color="secondary" onClick={() => navigate("/register")}>Sign up</Button>
        </div>
      }

    </nav>
  )
}

export default Navbar