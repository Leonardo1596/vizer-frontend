import React from 'react';
import './ListItems.css'
import './responsive.css';

const ListItems = (props) => {
    const image_url = 'https://image.tmdb.org/t/p/w300';

    function handleClickImage(movie) {
        console.log(movie);
        localStorage.setItem('selectedMovie', JSON.stringify(movie));
      }

    return (
        <div className='ListItems'>
            <div className='container-listItems'>
                <div className='posters'>
                    {props.movies.map((movie) => (
                        <a href='/assistir/online'><img src={`${image_url}${movie.poster_path}`} className="image-poster" onClick={() => handleClickImage(movie)} draggable={false} /></a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListItems