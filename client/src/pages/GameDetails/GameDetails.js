import React, { useState } from 'react'
import './GameDetails.css'
import { Button, Input } from "@nextui-org/react";
import ViewComment from '../../components/ViewComment/ViewComment';
import PostComment from '../../components/PostComment/PostComment';
import { BiBookmarkAltPlus } from 'react-icons/bi';
import { IoGameControllerOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function GameDetails() {

    const [rated, setRated] = useState(false);
    const [rating, setRating] = useState();
    const [helperText, setHelperText] = useState("")
    const [inputColor, setInputColor] = useState("")
    const [submitDisabled, setSubmitDisabled] = useState(true)
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("")

    let navigate = useNavigate();

    const handleRating = (e) => {
        let score = e.target.value

        if (score <= 5){
            setRating(score)
            setSubmitDisabled(false)
            setHelperText("")
            setInputColor("")
        }
        else if( isNaN(score) || score > 5){
            setHelperText("Rate out of 5")
            setInputColor("error")
            setSubmitDisabled(true)
        }
    }

  return (
    <section className='gameDetailsContainer'>
        <h1>Game Name</h1>
        <div className="gameDetailsTop">
            <figure className="gameDetailsImg">
                <img src="https://www.kemperlesnik.com/wp-content/uploads/2020/04/valorant-official-art.jpg" alt="" />
            </figure>
            <div className="gameDetailsDesc">
                <h3>Description</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam asperiores harum aliquid fuga quidem vero veritatis porro officiis accusantium voluptatem iusto repellat hic, aspernatur pariatur cupiditate eum odio nobis totam?</p>
            </div>
            
            <div className="gameDetailsInteractions">
                <h3>Personal Rating</h3>
                {rated ? 
                <h1> {rating} / 5 </h1>
                    :
                <div className="gameDetailsRating">
                    <Input color={inputColor} helperText={helperText} bordered placeholder="Your Rating" type="number" labelRight="/5" onChange = { e => handleRating(e) }/>
                    <Button disabled={submitDisabled} size = "sm" bordered color = "secondary" onClick={() => setRated(true)}> Submit </Button>
                </div>
                    
                }
                <Button onClick={() => navigate("/checkout")} color="secondary" iconRight={ <IoGameControllerOutline size="1.5em" color='#ffffff'/>}>Rent game</Button>
                <Button rounded bordered color="secondary" iconRight={ <BiBookmarkAltPlus size="1.5em"/> }> Add to wishlist </Button>

            </div>
        </div>
        <div className="gameDetailsInfo">
            <div className="gameDetailsDate">
                <p> Release Date </p>
                <h2> June 12, 2022 </h2>
            </div>
            <div className="gameDetailsMeta">
                <p> Metacritic Rating </p>
                <h2> 4 / 5 </h2>
            </div>
            <div className="gameDetailsPlats">
                <p> Platforms </p>
                <h2>PC, XBOX, PS5</h2>
            </div>
        </div>
        <div className="gameDetailsTrailer">
            <h3> Trailer </h3>
            <iframe
            src="https://www.youtube.com/embed/e_E9W2vsRbQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen="true"
            title="video"
            />
        </div>
        <div className="gameDetailsComments">
            <h3> Comments </h3>
            <PostComment/>
            <ViewComment/>
            
        </div>
        
    </section>
  )
}

export default GameDetails