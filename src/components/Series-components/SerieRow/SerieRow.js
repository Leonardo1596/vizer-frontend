import React, { useEffect, useState } from 'react';
import './SerieRow.css';
import './responsive.css';
import axios from 'axios';
import requests from '../../../requests';


const SerieRow = ({ fetch }) => {
  const image_url = 'https://image.tmdb.org/t/p/w300';
  const [series, setseries] = useState([]);

  useEffect(() => {
    function fetchData() {
      axios.get(`https://api.themoviedb.org/3${requests.fetchSeries}`)
        .then(response => {
          // console.log(response.data.results);
          setseries(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }
    fetchData();

    
  }, [])

  function handleClickImage(movie) {
    console.log(movie);
    localStorage.setItem('selectedMovie', JSON.stringify(movie));
  }

  return (
    <div className='SerieRow-seriesPage'>
      <div className='container-serieRow'>
        <div className='posters'>
          {series.map((serie, key) => (
            <>
                <a href='/assistir/online'><img src={`${image_url}${serie.poster_path}`} className="image-poster" alt="poster" onClick={() => handleClickImage(serie)} draggable={false} /></a>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SerieRow