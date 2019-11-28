import React from 'react'
import { useSelector } from 'react-redux'

import {
    imgsrc300,
} from '../../movieDbAPI/movieDb';

export const MovieDescription = () => {
    const movie = useSelector(state => state.movieReducer.movie);
    const imgsrc = imgsrc300 + movie.poster_path;
    return (
        // Here I use fragments in order not to create too much divs
        <>
            <h1>{movie.original_title}</h1>
            <p>Genres: {movie.genres.map(genre => {
                return <span key={genre.id}>{genre.name + ','} </span>
            })}</p>
            <img src={imgsrc} />
            <p>Release date: {movie.release_date}</p>
        </>
    )
}