import React from 'react'
import './PostComment.css'
import { Textarea, Button } from '@nextui-org/react'
import { FiUser } from 'react-icons/fi';


function PostComment() {
  return (
    <article className='postCommentTile'>
        <div className="postCommentUser">
            <FiUser size="1.5em"/>
            <p> User Name </p>
        </div>
        <Textarea bordered placeholder='Type your comment...' width='70%' minRows={2}/>
        <Button color="secondary"> Post </Button>
    </article>
  )
}

export default PostComment