import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


export const MovieList = (props) => {
    const searchResults = useSelector(state => state.moviesReducer.searchResults);

    var visibility = props.active ? 'visible' : 'hidden';

    const history = useHistory();

    const handleMovieClick = (movie) => {
        console.log('asd');
        history.push('/movie/' + movie.id); //send us to movie page
        location.reload();
    };

    return <div name='MovieList' className='MovieList' style={{ visibility: visibility }}>
        <ul>
            {searchResults.map(movie =>
                <li onClick={() => handleMovieClick(movie)}>{movie.original_title}</li>
            )}
        </ul>
    </div>
}