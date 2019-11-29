import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


export const MovieList = () => {
    const searchResults = useSelector(state => state.moviesReducer.searchResults);
    const active = useSelector(state => state.moviesReducer.inputActive);

    var visibility = active ? 'visible' : 'hidden';

    const history = useHistory();

    const handleMovieClick = (movie) => {
        history.push('/movie/' + movie.id); // send us to movie page
        location.reload();
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