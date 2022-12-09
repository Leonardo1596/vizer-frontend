import React, { useState } from 'react';
import './SearchComponent.css';
import './responsive.css';
import { FaSearch } from "react-icons/fa";
import ListItems from '../ListItems/ListItems';
import axios from 'axios';
import requests from '../../../requests';

const SearchComponent = () => {
  const [inputValue, setinputValue] = useState('');
  const [movies, setmovies] = useState([]);


  function fetchMovies() {
    axios.get(`https://api.themoviedb.org/3${requests.fetchSearchMovies}${inputValue}`)
      .then(response => {
        // console.log(response.data.results);
        setmovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleOnChange(e) {
    setinputValue(e.target.value);
  }

  function handleKeyUp(e) {
    if (e.keyCode === 13) {
      fetchMovies();
    }
  }

  function handleClickIcon() {
    fetchMovies();
  }

  return (
    <div className='Search-component'>
      <div className='container-searchComponent'>
        <div className='input'>
          <input type="text" id="input" onChange={handleOnChange} placeholder='Pesquise por título ou elenco...' onKeyUp={handleKeyUp} />
          <FaSearch className='search-icon' onClick={handleClickIcon}/>
        </div>
      </div>
      <ListItems movies={movies} />
    </div>
  )
}

export default SearchComponent