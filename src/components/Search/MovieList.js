import React from 'react'
import { useSelector } from 'react-redux';


export const MovieList = (props) => {
    const searchResults = useSelector(state => state.moviesReducer.searchResults);
    const active = useSelector(state => state.moviesReducer.inputActive);

    var visibility = active ? 'visible' : 'hidden';


    const handleMovieClick = (movie) => {
        props.OnMovieClick(movie);
    };

    return <div id='MovieList' className='MovieList' style={{ visibility: visibility }}>
        <ul>
            {searchResults.map(movie =>
                <li key = {movie.id} onClick={() => handleMovieClick(movie)}>{movie.original_title}</li>
            )}
        </ul>
    </div>
}