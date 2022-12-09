import React, { useEffect, useState } from 'react';
import './Cast.css';
import './responsive.css';
import axios from 'axios';
import requests from '../../../requests';

const API_KEY = '6195b5693c9e04db18d5a30066d6835f';

const Cast = () => {
    const [isLoading, setisLoading] = useState(true)
    const [movie, setmovie] = useState([]);
    const [actors, setactors] = useState([]);

    useEffect(() => {
        async function getMovie() {
            const retrieved = await localStorage.getItem('selectedMovie');
            setmovie(JSON.parse(retrieved));

            function fetchCast() {
                // console.log(movie.id);
                axios.get(`https://api.themoviedb.org/3/movie/${JSON.parse(localStorage.getItem('selectedMovie')).id}/credits?api_key=${API_KEY}&language=en-US`)
                    .then(response => {
                        // console.log(response.data.cast);
                        setactors(response.data.cast);
                        setisLoading(false);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
            fetchCast();
        }
        getMovie();
    }, []);

    if (isLoading) {
        return <span></span>
    }

    return (
        <div className='Cast-component'>
            <div className='container-cast'>
                <div className='grid'>
                    <span>{actors[0].name}</span>
                    <span>{actors[1].name}</span>
                    <span>{actors[2].name}</span>
                    <span>{actors[3].name}</span>
                </div>
            </div>
        </div>
    )
}

export default Cast