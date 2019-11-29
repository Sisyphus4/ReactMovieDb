import React from 'react'

import {
    imgsrc185,
} from '../../movieDbAPI/movieDb.js';

export const MovieToCompare = (props) => {
    const imgsrc = imgsrc185 + props.movie.poster_path;

    const handleMovieClick = (movie) => {
        props.OnMovieClick(movie);
    }

    return (
        <>
            <h3 onClick={() => handleMovieClick(props.movie)}>Title: {props.movie.original_title}</h3>
            <img src={imgsrc} onClick={() => handleMovieClick(props.movie)} />
            <p>Release: {props.movie.release_date}</p>
            <p>Budget: {props.movie.budget.toLocaleString()}</p>
            <p>Average vote: {props.movie.vote_average}/10</p>
        </>
    )
}