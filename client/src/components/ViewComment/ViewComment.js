import React, { useState } from 'react'
import './ViewComment.css'
import { FiUser } from 'react-icons/fi';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

function ViewComment() {

    const [belongsToUser, setbelongsToUser] = useState(true)

    const [upvote, setUpvote] = useState(false)
    const [downvote, setDownvote] = useState(false)
    const [votes, setVotes] = useState(0)
    
    const handleUpvotes = () => {
        
        if(downvote){
            setVotes(votes + 1)
            setDownvote(false)
        }

        if(!upvote){
            setVotes(votes + 1)
            setUpvote(true)
        }
        else{
            setVotes(votes - 1)
            setUpvote(false)
        }
    }

    const handleDownvotes = () => {

        if(upvote){
            setVotes(votes - 1)
            setUpvote(false)
        }
        if(!downvote){
            setVotes(votes - 1)
            setDownvote(true)
        }
        else{
            setVotes(votes + 1)
            setDownvote(false)
        }
    }

    
  return (
    <article className='viewCommentTile'>
        <div className="viewCommentInfo">
            <FiUser size="1.5em"/>
            <b> User Name </b>
            <p> Jul 15 2022</p>
        </div>
        <div className="viewCommentTxt">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae sit odit id dolorum, asperiores delectus consectetur non neque voluptates numquam? Aspernatur repellendus animi neque placeat magni ea dolorem magnam.</p>
        </div>
        <div className="viewCommentInteractions">
            <div className="viewCommentUp">
                <p> Upvote </p>
                <BiUpvote size="1.25em" color={upvote ? "#7828c8" : ""} cursor="pointer" onClick={ handleUpvotes }/>
            </div>
            <div className="viewCommentCount">
                <p>{ votes }</p>
            </div>
            <div className="viewCommentDown">
                <BiDownvote size="1.25em" color={downvote ? "#f4a261" : ""} cursor="pointer" onClick={ handleDownvotes }/>
                <p>Downvote</p>
            </div>
            <div className="viewCommentDel" style={ belongsToUser ? {} : {display: "none"}}>
                <AiOutlineDelete size="1.25em"/>
            </div>
        </div>
    </article>
  )
}

export default ViewComment