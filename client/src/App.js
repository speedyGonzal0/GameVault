import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import AllGames from './pages/AllGames/AllGames';
import SearchGames from './pages/SearchGames/SearchGames';
import SearchUsers from './pages/SearchUsers/SearchUsers';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import GameDetails from './pages/GameDetails/GameDetails';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import UserProfile from './pages/UserProfile/UserProfile';
import Wishlist from './pages/Wishlist/Wishlist';

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(true)

  const theme = createTheme({
    type: "dark", // it could be "light" or "dark"
  })


  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'afd067b7a9msh2ec43a05fec1db8p1db00bjsn93b9c9bb1f69',
  //       'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
  //     }
  //   };
    
  //   fetch('https://rawg-video-games-database.p.rapidapi.com/games?key=0c8ab50adac04ffe8c4aeca81a52a126', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));  
  // }, [])
  
  return (
    <NextUIProvider theme={theme}>
      <BrowserRouter>
        <Navbar login={isLoggedIn}/>
        <main className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/games' element={<AllGames/>}/>
            <Route path='/searchgames' element={<SearchGames/>}/>
            <Route path='/gamedetails/:id' element={<GameDetails/>}/>
            <Route path='/searchusers' element={<SearchUsers/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/user/:id' element={<UserProfile/>}/>
            <Route path='/wishlist/:id' element={<Wishlist/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
