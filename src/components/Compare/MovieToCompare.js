import React from 'react'

import {
    imgsrc185,
} from '../../movieDbAPI/moiveDb.js';

export const MovieToCompare = (props) => {

    return (
        <React.Fragment>
            <h1>{props.movie.original_title}</h1>
            <img src={imgsrc185 + props.movie.poster_path} />
            <p>{props.movie.release_date}</p>
            <p>{props.movie.budget.toLocaleString()}</p>
            <p>{props.movie.popularity}</p>
        </React.Fragment>
    )
}