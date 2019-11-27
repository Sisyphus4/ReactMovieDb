import React from 'react'

import {
    imgsrc185,
} from '../../movieDbAPI/movieDb.js';

export const MovieToCompare = (props) => {
    const imgsrc = imgsrc185 + props.movie.poster_path;
    return (
        <>
            <h1>{props.movie.original_title}</h1>
            <img src={imgsrc} />
            <p>{props.movie.release_date}</p>
            <p>{props.movie.budget.toLocaleString()}</p>
            <p>{props.movie.popularity}</p>
        </>
    )
}