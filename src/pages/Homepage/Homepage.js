import React from 'react';
import './Homepage.css';
import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Homepage-components/Main/Main';
import ListMovies from '../../components/Homepage-components/ListMovies/ListMovies';
import ListSeries from '../../components/Homepage-components/ListSeries/ListSeries';

const Homepage = () => {
  return (
    <div className='Homepage-page'>
        <Navbar />
        <Main />
        <ListMovies />
        <ListSeries />
    </div>
  )
}

export default Homepage