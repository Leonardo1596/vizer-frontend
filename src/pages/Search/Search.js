import React from 'react';
import './Search.css';
import Navbar from '../../components/Navbar/Navbar';
import SearchComponent from '../../components/Search-components/SearchComponent/SearchComponent';

const Search = () => {
  return (
    <div className='Search-page'>
        <Navbar />
        <SearchComponent />
    </div>
  )
}

export default Search