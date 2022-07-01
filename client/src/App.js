import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import AllGames from './pages/AllGames/AllGames';
import SearchGames from './pages/SearchGames/SearchGames';
import SearchUsers from './pages/SearchUsers/SearchUsers';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Navbar/>
        <main className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/allgames' element={<AllGames/>}/>
            <Route path='/searchgames' element={<SearchGames/>}/>
            <Route path='/searchusers' element={<SearchUsers/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
