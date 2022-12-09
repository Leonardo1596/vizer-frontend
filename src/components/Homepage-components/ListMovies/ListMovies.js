import React from 'react';
import MovieRow from '../MovieRow/MovieRow';
import './ListMovies.css';
import './responsive.css';
import requests from '../../../requests';

const ListMovies = ({ fetch }) => {
  return (
    <div className='ListMovies'>
      <div className='container-listMovies'>
        <div className='options'>
          <span>Assistir Filmes Online</span>
          <div className='options-buttons'>
            <a href="#"><button className='btn btn-active'>Lançamentos</button></a>
            <a href="#"><button className='btn'>Novos Filmes</button></a>
            <a href="#"><button className='btn'>Populares</button></a>
            <a href="#"><button className='btn'>Mais Assistidos</button></a>
          </div>
        </div>
        <MovieRow fetch={requests.fetchTrending}/>
      </div>
    </div>
  )
}

export default ListMovies