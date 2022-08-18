import React from 'react'
import "./UserProfile.css"
import { Input, Button } from '@nextui-org/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import ViewComment from '../../components/ViewComment/ViewComment';

function UserProfile() {

  let navigate = useNavigate();


  const [emailUpd, setEmailUpd] = useState(true)
  const [passUpd, setPassUpd] = useState(true)
  const [imgUpd, setImgUpd] = useState(true)
  const [phnUpd, setPhnUpd] = useState(true)

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [img, setImg] = useState("")
  const [phn, setPhn] = useState("")


  const handleEmailChange = (e) => {
    setEmailUpd(false)
    setEmail(e.target.value)
  }

  const handleEmailSubmit = (e) => {
    axios.put("http://localhost:8080/user/update", {
      email: email
    }, {withCredentials: true}).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
        // navigate("/login")
      }
      else {
        console.log(response.data);
      }
    });   
    setEmailUpd(true)
  }

  const handlePassChange = (e) => {
    setPassUpd(false)
    setPass(e.target.value)
  }

  const handlePassSubmit = (e) => {
    axios.put("http://localhost:8080/user/update", {
      password: pass
    }, {withCredentials: true}).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
        // navigate("/login")
      }
      else {
        console.log(response.data);
      }
    });    
    setPassUpd(true)
  }

  const handleImgChange = (e) => {
    setImgUpd(false)
    setImg(e.target.value)
  }

  const handleImgSubmit = (e) => {
    axios.put("http://localhost:8080/user/update", {
      img: img
    }, {withCredentials: true}).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
        // navigate("/login")
      }
      else {
        console.log(response.data);
      }
    });
    setImgUpd(true)
  }

  const handlePhnChange = (e) => {
    setPhnUpd(false)
    setPhn(e.target.value)
  }

  const handlePhnSubmit = (e) => {
    axios.put("http://localhost:8080/user/update", {
      phone: phn
    }, {withCredentials: true}).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
        // navigate("/login")
      }
      else {
        console.log(response.data);
      }
    });
    setPhnUpd(true)
  }

  const [user, setUser] = useState({})
  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8080/user/details`, {withCredentials: true}).then((response) => {
      setUser(response.data)
      // console.log(response.data);
    });

    axios.get(`http://localhost:8080/orders/user`, {withCredentials: true}).then((response) => {
      setOrders(response.data)
      // console.log(response.data);
    });

}, [emailUpd, passUpd, phnUpd, imgUpd])


  return (
    <main className='userProfileContainer'>
      <h1> Profile </h1>
      <div className="userProfileTop">
        <figure className='userProfileImg'>
          <img src={user.img} alt="" />
        </figure>
        <div className="userProfileDesc">
          <h3> {user.name} </h3>
          <div className="userProfileInfo">
            <div className="userPofileInfoLeft">
              <p>Email:</p>
              <p>Password:</p>
              <p>Profile Image:</p>
              <p> Phone: </p>
            </div>
            <div className="userProfileInfoMid">
              <Input bordered placeholder={user.email} onChange={(e) => handleEmailChange(e)} />
              <Input bordered placeholder={user.password} onChange={(e) => handlePassChange(e)} />
              <Input bordered placeholder={user.img} onChange={(e) => handleImgChange(e)} />
              <Input bordered placeholder={user.phone} onChange={(e) => handlePhnChange(e)} />
            </div>
            <div className="userProfileInfoRight">
              <Button disabled={emailUpd} color="secondary" onClick={handleEmailSubmit}> Update </Button>
              <Button disabled={passUpd} color="secondary" onClick={handlePassSubmit}> Update </Button>
              <Button disabled={imgUpd} color="secondary" onClick={handleImgSubmit}> Update </Button>
              <Button disabled={phnUpd} color="secondary" onClick={handlePhnSubmit}> Update </Button>
            </div>
          </div>
        </div>
        <div className="userProfileHist">
          <div className="userProfileHistSection">
            <h3> Total orders </h3>
            <h1> {orders.length} </h1>
            <Button bordered size="sm" color="secondary" onClick={() => navigate("/user/orders")}> See Orders </Button>
          </div>
          <div className="userProfileHistSection">
            <h3> Wishlisted games </h3>
            <h1> 20 </h1>
            <Button bordered size="sm" color="secondary" onClick={() => navigate("/user/wishlist")}> View wishlist </Button>

          </div>



        </div>
      </div>
      <div className="userProfileComments">
        <h3> All comments </h3>
        <div className="userProfileCommentsDetails">
          <div className="userProfileCommentGame">
            <h3>Game name</h3>
            <Button color="secondary" size="sm" onClick={() => navigate("/games/1")}> View game </Button>
          </div>
          <ViewComment />
        </div>
      </div>

    </main>
  )
}

export default UserProfile