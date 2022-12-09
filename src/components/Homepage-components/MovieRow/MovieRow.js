import React, { useEffect, useState } from 'react';
import './MovieRow.css';
import './responsive.css';
import axios from 'axios';

const MovieRow = ({ fetch }) => {
  const image_url = 'https://image.tmdb.org/t/p/w300';
  const [movies, setmovies] = useState([]);
  let selectedMovie;
  useEffect(() => {
    function fetchData() {
      axios.get(`https://api.themoviedb.org/3${fetch}`)
        .then(response => {
          // console.log(response.data.results);
          setmovies(response.data.results);
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
    <div className='MovieRow'>
      <div className='container-movieRow'>
        <div className='posters'>
          {movies.map((movie, key) => (
            <>
              <a href='/assistir/online'><img src={`${image_url}${movie.poster_path}`} className="image-poster" alt="poster" onClick={() => handleClickImage(movie)} draggable={false} /></a>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRow