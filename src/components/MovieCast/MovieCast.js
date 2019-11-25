import React, { useEffect } from 'react';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export const MovieCast = props => {
    useEffect(() => {
        props.getCast();
    }, [1]);


    return props.movieCast
        ? (
            <div className='cast'>
                <h4>Cast:</h4>
                {props.movieCast.cast.map(actor =>
                    <span key={actor.name}>{actor.name}, </span>)}
            </div>
        )
        : <div>There is no cast</div>
};