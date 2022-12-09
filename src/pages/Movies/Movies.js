import React from 'react';
import './Movies.css';
import './responsive.css';
import Navbar from '../../components/Navbar/Navbar';
import MovieRow from '../../components/Movies-components/MovieRow/MovieRow';

const Movies = () => {
  return (
    <div className='Movies-page'>
      <Navbar />
      <div className='title'>
        <span>Assistir Filmes Online - Últimos Lançamentos</span>
      </div>
      <MovieRow />
    </div>
  )
}

export default Movies