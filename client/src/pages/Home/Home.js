
import "./Home.css"
import { Button } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import {FaArrowRight} from 'react-icons/fa'

function Home() {

  let navigate = useNavigate();
  return (
    <main className="homeContainer">
      <div className="homeTop">
        <h1>Welcome to GameVault</h1>
        <h3>Explore, Rent, & Play</h3>
        <p>The best platform for you & your friends to rent games</p>
      </div>

      <Button shadow iconRight={<FaArrowRight size="1.25em"/>} color="secondary" size="xl" onClick={() => navigate("./register")} > Get Started</Button>
    </main>
  )
}

export default Home