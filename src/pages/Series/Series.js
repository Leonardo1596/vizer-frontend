import React from 'react';
import './Series.css';
import './responsive.css';
import Navbar from '../../components/Navbar/Navbar';
import SerieRow from '../../components/Series-components/SerieRow/SerieRow';

const Movies = () => {
  return (
    <div className='Series-page'>
      <Navbar />
      <div className='title'>
        <span>Assistir Séries Online - Últimos Episódios</span>
      </div>
      <SerieRow />
    </div>
  )
}

export default Movies