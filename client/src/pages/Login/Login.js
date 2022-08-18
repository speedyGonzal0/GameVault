import React from 'react'
import { useState } from 'react';
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { Input, Button } from '@nextui-org/react';
import axios from 'axios';

function Login( {setisLoggedIn} ) {

    let navigate = useNavigate();

    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    const submitLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/user/login", {
            email: email,
            password: pass
        }).then((response) => {
            if (response.data.role) {
                console.log(response.data.role);
                setisLoggedIn(true)
                navigate("/games")
            }
            else {
                console.log(response.data);
            }
        });
        // console.log("game submit")
        // e.target.reset();
    }

    return (
        <main className='loginContainer'>
            <h1> Login </h1>

            <form onSubmit={submitLogin} className="loginForm">
                <Input labelPlaceholder="Email" required type="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                <Input.Password labelPlaceholder="Password" required
                    onChange={(e) => {
                        setPass(e.target.value);
                    }} />
                <Button type="submit" shadow color="secondary">Submit</Button>
            </form>
        </main>
    )
}

export default Login