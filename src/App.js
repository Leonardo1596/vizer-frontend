import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Search from './pages/Search/Search';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Watch from './pages/Watch/Watch';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PlayScreen from './pages/PlayScreen/PlayScreen';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/pesquisar" element={<Search />} />
          <Route path="/filmes/online" element={<Movies />} />
          <Route path="/series/online" element={<Series />} />
          <Route path="/assistir/online" element={<Watch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/trailer" element={<PlayScreen />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App