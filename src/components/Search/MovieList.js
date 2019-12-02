import React from 'react'
import { useSelector } from 'react-redux';


export const MovieList = (props) => {
    const searchResults = useSelector(state => state.moviesReducer.searchResults);
    
    var visibility = props.active ? 'visible' : 'hidden';

    const handleMovieClick = (movie) => {
        props.OnMovieClick(movie);
    };

    return <div id='MovieList' className='MovieList' style={{ visibility: visibility }}>
        <ul>
            {searchResults.map(movie =>
                <li key = {movie.id} onClick={() => handleMovieClick(movie)}>
                    <p className='MovieList-Title'>{movie.original_title}</p> 
                    <p className='MovieList-Date'>{movie.release_date}</p></li>
            )}
        </ul>
    </div>
}