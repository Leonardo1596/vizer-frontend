import React from 'react';
import MovieRow from '../MovieRow/MovieRow';
import './ListSeries.css';
import './responsive.css';
import requests from '../../../requests';

const ListSeries = () => {
  return (
    <div className='ListSeries'>
      <div className='container-listSeries'>
        <div className='options'>
          <span>Assistir Séries Online</span>
          <div className='options-buttons'>
            <a href="#"><button className='btn btn-active'>Novos Episódios</button></a>
            <a href="#"><button className='btn'>Novas Séries</button></a>
            <a href="#"><button className='btn'>Populares</button></a>
            <a href="#"><button className='btn'>Mais Assistidas</button></a>
          </div>
        </div>
        <MovieRow fetch={requests.fetchSeries}/>
      </div>
    </div>
  )
}

export default ListSeries