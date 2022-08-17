import React from 'react'
import './ErrorPage.css'
import { BiError } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import {Button} from "@nextui-org/react"

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <main className='errorPageContainer'>
      <h1>Page does not exist</h1>
      <BiError size="10em"/>
      <Button shadow color="secondary" onClick={() => navigate("/")}>Go back home</Button>    
    </main>
  )
}

export default ErrorPage