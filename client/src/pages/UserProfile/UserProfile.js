import React from 'react'
import "./UserProfile.css"
import { Input, Button } from '@nextui-org/react';
import { useState } from 'react';
import ViewComment from '../../components/ViewComment/ViewComment';

function UserProfile() {


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
    setEmailUpd(true)
  }

  const handlePassChange = (e) => {
    setPassUpd(false)
    setPass(e.target.value)
  }

  const handlePassSubmit = (e) => {
    setPassUpd(true)
  }

  const handleImgChange = (e) => {
    setImgUpd(false)
    setImg(e.target.value)
  }

  const handleImgSubmit = (e) => {
    setImgUpd(true)
  }

  const handlePhnChange = (e) => {
    setPhnUpd(false)
    setPhn(e.target.value)
  }

  const handlePhnSubmit = (e) => {
    setPhnUpd(true)
  }


  return (
    <main className='userProfileContainer'>
        <h1> Profile </h1>
        <div className="userProfileTop">
          <figure className='userProfileImg'>
            <img src="https://images7.alphacoders.com/749/thumb-1920-749807.png" alt="" />
          </figure>
          <div className="userProfileDesc">
            <h3> User name </h3>
            <div className="userProfileInfo">
              <div className="userPofileInfoLeft">
                <p>Email:</p>
                <p>Password:</p>
                <p>Profile Image:</p>
                <p> Phone: </p>
              </div>
              <div className="userProfileInfoMid">
                <Input bordered placeholder='user email' onChange={(e)=> handleEmailChange(e)}/>
                <Input bordered placeholder='user pass' onChange={(e)=> handlePassChange(e)}/>
                <Input bordered placeholder='image url' onChange={(e)=> handleImgChange(e)}/>
                <Input bordered placeholder='user Phone' onChange={(e)=> handlePhnChange(e)}/>
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
              <h1> 43 </h1>
              <Button bordered size="sm" color="secondary"> See Orders </Button>
            </div>
            <div className="userProfileHistSection">
              <h3> Wishlisted games </h3>
              <h1> 20 </h1>
              <Button bordered size="sm" color="secondary"> View wishlist </Button>

            </div>
            
            

          </div>
        </div>
        <div className="userProfileComments">
          <h3> All comments </h3>
          <div className="userProfileCommentsDetails">
            <div className="userProfileCommentGame">
              <h3>Game name</h3>
              <Button color="secondary" size="sm"> View game page </Button>
            </div>
            <ViewComment/>
          </div>          
        </div>

    </main>
  )
}

export default UserProfile