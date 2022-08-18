import React from 'react'
import './PostComment.css'
import { Textarea, Button } from '@nextui-org/react'
import { FiUser } from 'react-icons/fi';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


function PostComment({ gameid }) {

  const [commentText, setCommentText] = useState("")

  const [date, setDate] = useState()

  const [user, setUser] = useState()

  const inputHandler = (e) => {
    setCommentText(e.target.value)
    let newDate = new Date();
    newDate = newDate.toJSON().substring(0, newDate.toJSON().indexOf("T"))
    setDate(newDate)
  }

  const handleSubmit = (e) => {
    axios.post(`http://localhost:8080/comment/create/${gameid}`, {
      commentBody: commentText,
      commentDate: date
    }, { withCredentials: true }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
      }
      else {
        console.log(response.data);
      }
    });
  }

  return (
    <article className='postCommentTile'>
      <div className="postCommentUser">
        <FiUser size="1.5em" />
      </div>
      <Textarea bordered placeholder='Type your comment...' width='70%' minRows={2} onChange={inputHandler} />
      <Button color="secondary" onClick={handleSubmit}> Post </Button>
    </article>
  )
}

export default PostComment