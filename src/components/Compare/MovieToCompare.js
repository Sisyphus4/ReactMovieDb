import React from 'react'
import { useHistory } from "react-router-dom";

import {
    imgsrc185,
} from '../../movieDbAPI/moiveDb.js';

export const MovieToCompare = (props) => {

    let history = useHistory(); 

    const handleMovieClick = (movie) => {
        history.push('.././movie/' + movie.id); //send us to movie page
    };
    return (
        <div className='oneOfComparedMovies' onClick={(e) => handleMovieClick(props.movie, e)}>
            <h1>{props.movie.original_title}</h1>
            <img src={imgsrc185 + props.movie.poster_path} />
            <p>{props.movie.release_date}</p>
            <p>{props.movie.budget.toLocaleString()}</p>
            <p>{props.movie.popularity}</p>
        </div>
    )
}