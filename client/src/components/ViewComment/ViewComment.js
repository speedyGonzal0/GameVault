import React, { useState } from 'react'
import './ViewComment.css'
import { FiUser } from 'react-icons/fi';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import { AiOutlineDelete, AiOutlineWarning } from 'react-icons/ai';
import { Modal, Button } from "@nextui-org/react"
import { useEffect } from 'react';
import axios from 'axios';

function ViewComment({ comment }) {

    const [belongsToUser, setbelongsToUser] = useState(true)

    const [upvote, setUpvote] = useState(false)
    const [downvote, setDownvote] = useState(false)
    const [votes, setVotes] = useState(0)

    const handleUpvotes = () => {

        if (!upvote) {
            axios.put(`http://localhost:8080/comment/upvote/${comment.commentID}`).then((response) => {
                if (response.data.message) {
                    console.log(response.data.message);
                    setUpvote(true)
                }
                else {
                    console.log(response.data);
                }
            });
        }
        else if (upvote) {

            axios.put(`http://localhost:8080/comment/downvote/${comment.commentID}`).then((response) => {
                if (response.data.message) {
                    console.log(response.data.message);
                    setUpvote(false)
                }
                else {
                    console.log(response.data);
                }
            });

        }
    }

    const handleDownvotes = () => {

        if (!downvote) {
            axios.put(`http://localhost:8080/comment/downvote/${comment.commentID}`).then((response) => {
                if (response.data.message) {
                    console.log(response.data.message);
                    setDownvote(true)
                }
                else {
                    console.log(response.data);
                }
            });
        }
        else if (downvote) {

            axios.put(`http://localhost:8080/comment/upvote/${comment.commentID}`).then((response) => {
                if (response.data.message) {
                    console.log(response.data.message);
                    setDownvote(false)
                }
                else {
                    console.log(response.data);
                }
            });

        }

    }

    const reportHandler = (cmntID) => {
        axios.post(`http://localhost:8080/report/create/${cmntID}`,).then((response) => {
            if (response.data.message) {
                console.log(response.data.message);
                // setDownvote(false)
            }
            else {
                console.log(response.data);
            }
        });
    }


    return (
        <article className='viewCommentTile'>
            <div className="viewCommentInfo">
                <FiUser size="1.5em" />
                <b> {comment.user.name}</b>
                <p> {comment.commentDate} </p>
            </div>
            <div className="viewCommentTxt">
                <p> {comment.commentBody}</p>
            </div>
            <div className="viewCommentInteractions">
                <div className="viewCommentInteractionsLeft">
                    <div className="viewCommentUp">
                        <p> Upvote </p>
                        <BiUpvote size="1.25em" color={upvote ? "#7828c8" : ""} cursor="pointer" onClick={handleUpvotes} />
                    </div>
                    <div className="viewCommentCount">
                        <p>{comment.votes}</p>
                    </div>
                    <div className="viewCommentDown">
                        <BiDownvote size="1.25em" color={downvote ? "#f4a261" : ""} cursor="pointer" onClick={handleDownvotes} />
                        <p>Downvote</p>
                    </div>
                    {/* <div className="viewCommentDel" style={ belongsToUser ? {} : {display: "none"}}>
                    <AiOutlineDelete size="1.25em"/>
                </div> */}
                </div>
                <div className="viewCommentReport">
                    <Button size="sm" bordered color="error" iconRight={<AiOutlineWarning size="1.5em" />} onClick={() => reportHandler(comment.commentID)}> Report </Button>
                </div>
            </div>
        </article>
    )
}

export default ViewComment