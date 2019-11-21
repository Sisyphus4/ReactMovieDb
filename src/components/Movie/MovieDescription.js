import React from 'react'

import {
    imgsrc300,
} from '../../movieDbAPI/moiveDb.js';

export const MovieDescription = (props) => {
    return (
        //Here I use fragments in order not to create too much divs
        <React.Fragment>
            <h1>{props.movie.original_title}</h1>
            <p>Genres: {props.movie.genres.map(genre => {
                return <span key={genre.id}>{genre.name + ','} </span>
            })}</p>
            <img src={imgsrc300 + props.movie.poster_path} />
            <p>Release date: {props.movie.release_date}</p>
        </React.Fragment>
    )
}