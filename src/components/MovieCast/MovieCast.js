import React, { useEffect } from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export const MovieCast = props => {
    useEffect(() => {
        props.getCast(props.id);
    }, [1]);


<<<<<<< HEAD
    return !!props.movieCast
=======
    return props.movieCast
>>>>>>> 03365eb8b9f294c17a93955b99bb36bf22cbcf02
        ? (
            <div className='cast'>
                <h4>Cast:</h4>
                {props.movieCast.cast.map(actor =>
                    <span key={actor.name}>{actor.name}, </span>)}
            </div>
        )
        : <div>There is no cast</div>
};