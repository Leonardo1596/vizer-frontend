import React, { useEffect, useState } from 'react';
import './InfoMovie.css';
import './responsive.css';
import { FaStar, FaChevronRight } from 'react-icons/fa';
import Cast from '../Cast/Cast';
import Buttons from '../Buttons/Buttons';
import axios from 'axios';

const InfoMovie = () => {
    const [isLoading, setisLoading] = useState(true);
    const image_url = 'https://image.tmdb.org/t/p/w300';
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        function getMovie() {
            const retrieved = localStorage.getItem('selectedMovie');
            setmovie(JSON.parse(retrieved));
            setisLoading(false);


            // Retriving trailer
            async function getTrailer() {
                await axios.get(`https://api.themoviedb.org/3/movie/${JSON.parse(retrieved).id}?api_key=6195b5693c9e04db18d5a30066d6835f&append_to_response=videos`)
                    .then(response => {
                        // console.log(response.data.videos.results.length);
                        if (response.data.videos.results.length === 0) {
                            localStorage.setItem('movieId', 'GV3HUDMQ-F8');
                            return;
                        } else {
                            const movieKey = response.data.videos.results[0].key;
                            localStorage.setItem('movieId', movieKey);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
            getTrailer();

        }
        getMovie();

    }, []);

    if (isLoading) {
        return <span></span>
    }

    return (
        <div className='InfoMovie-component'>
            <div className='container-infoMovie'>
                <div className='poster'>
                    <img src={`${image_url}${movie.poster_path}`} />
                </div>

                <div className='info'>
                    <h2>assistir {movie.title ? movie.title : movie.name}</h2>
                    <h1>{movie.title ? movie.title : movie.name}</h1>
                    <div className='date-row'>
                        <span id='date'>{movie.release_date ? movie.release_date.split('-')[0] : movie.first_air_date.split('-')[0]}</span>
                        <div className='vote'>
                            <FaStar />
                            <span id='vote'>{`${movie.vote_average.toString().substring(0, 3)}/10`}</span>
                        </div>
                        <div className='trailer'>
                            <a href="/trailer"><button className='btn btn-trailer'>TRAILER</button></a>
                            <FaChevronRight className='icon-arrow'/>
                        </div>

                    </div>
                    <Cast />
                    <span>{movie.overview.length > 400 ? movie.overview.substring(0, 350) + '...' : movie.overview}</span>
                    <Buttons />
                </div>
            </div>
        </div>
    )
}

export default InfoMovie