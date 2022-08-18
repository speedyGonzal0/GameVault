import React from 'react'
import "./Register.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Input, Button } from '@nextui-org/react';
import axios from 'axios';

function Register() {

  let navigate = useNavigate();

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const [phn, setPhn] = useState()

  const submitReg = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/user/register", {
      name: name,
      email: email,
      password: pass,
      phone: phn
    }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
        navigate("/login")
      }
      else {
        console.log(response.data);
      }
    });
    // console.log("game submit")
    e.target.reset();
  }



  return (
    <main className='registerContainer'>
      <h1>Register</h1>
      <form onSubmit={submitReg} className="regForm">
        <Input labelPlaceholder="Name" required
          onChange={(e) => {
            setName(e.target.value);
          }} />
        <Input labelPlaceholder="Email" required type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }} />
        <Input labelPlaceholder="Phone" required
          onChange={(e) => {
            setPhn(e.target.value);
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

export default Register