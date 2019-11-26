import React from 'react'

import {
    imgsrc300,
} from '../../movieDbAPI/movieDb';

export const MovieDescription = (props) => {
    const imgsrc = imgsrc300 + props.movie.poster_path;
    return (
        // Here I use fragments in order not to create too much divs
        <>
            <h1>{props.movie.original_title}</h1>
            <p>Genres: {props.movie.genres.map(genre => {
                return <span key={genre.id}>{genre.name + ','} </span>
            })}</p>
            <img src={imgsrc} />
            <p>Release date: {props.movie.release_date}</p>
        </>
    )
}