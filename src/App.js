
import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import { Container } from '@mui/system';
import Trending from "./Pages/Trending"
import Search from './Pages/Search'; 
import Favmovies from './Pages/Favmovies';
import Rating from './Pages/Rating';
import Tickets from './Pages/Tickets';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
      <Container>
          <Routes>
                    <Route exact path="/" element={<Trending />} />
                    <Route exact path="/favourites" element={<Favmovies />} />
                    <Route exact path="/search" element={<Search/>} />
                    <Route exact path="/rating" element={<Rating/>} />
                    <Route exact path="/ticket-booking" element={<Tickets/>} />
          </Routes>
      </Container>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
