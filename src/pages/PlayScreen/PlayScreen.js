import React, { useEffect, useState } from 'react';
import './PlayScreen.css';

const PlayScreen = () => {
    const [movieId, setmovieId] = useState('');

    useEffect(() => {
        function getMovieId() {
            setmovieId(localStorage.getItem('movieId'));
        }
        getMovieId();
    }, []);

    return (
        <div className='PlayScreen-page'>
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${movieId}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default PlayScreen