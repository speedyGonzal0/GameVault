import React from 'react'
import "./AddGame.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Input, Button, Textarea } from '@nextui-org/react';

function AddGame() {

    const [name, setName] = useState()
    const [desc, setDesc] = useState()
    const [date, setDate] = useState()
    const [rating, setRating] = useState()
    const [plats, setPlats] = useState()
    const [trailer, setTrailer] = useState()
    const [img, setImg] = useState()

    const submitGame = (e) => {
        e.preventDefault();
        console.log("game submit")
    }


    return (
        <main className='addGameContainer'>
            <h1>Add a game</h1>
            <form onSubmit={submitGame} className="gameForm">
                <Input labelPlaceholder=" Name" required
                    onChange={(e) => {
                        setName(e.target.value);
                    }} />
                <Textarea labelPlaceholder="Description" required
                    onChange={(e) => {
                        setDesc(e.target.value);
                    }} />
                <Input type="date" label="Release date" required
                    onChange={(e) => {
                        setDate(e.target.value);
                    }} />
                <Input labelPlaceholder="Meta rating" required
                    onChange={(e) => {
                        setRating(e.target.value);
                    }} />
                <Input labelPlaceholder="Platforms" required
                    onChange={(e) => {
                        setPlats(e.target.value);
                    }} />
                <Input labelPlaceholder="Trailer link" required
                    onChange={(e) => {
                        setTrailer(e.target.value);
                    }} />
                <Input labelPlaceholder="Cover img link" required
                    onChange={(e) => {
                        setImg(e.target.value);
                    }} />

                <Button type="submit" shadow color="secondary">Submit</Button>
            </form>
        </main>
    )
}

export default AddGame