import React, { useEffect, useState } from 'react';
import './Watch.css';
import Navbar from '../../components/Navbar/Navbar';
import InfoMovie from '../../components/Watch-components/InfoMovie/InfoMovie';
import Buttons from '../../components/Watch-components/Buttons/Buttons';

const Watch = () => {
    const image_url = 'https://image.tmdb.org/t/p/w300';
    const backdrop_url = 'https://image.tmdb.org/t/p/original';
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        function getMovie() {
            const retrieved = localStorage.getItem('selectedMovie');
            setmovie(JSON.parse(retrieved));
        }
        getMovie();
    }, [])

    return (
        <div className='Watch-page'>
            <div className='background' style={{ backgroundImage: `url(${backdrop_url}${movie.backdrop_path})` }}>
            </div>
            <Navbar />
            <InfoMovie />
        </div>
    )
}

export default Watch