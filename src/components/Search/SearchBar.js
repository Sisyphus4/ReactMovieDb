import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovie } from '../../redux/actions/searchMovie';
import { useHistory } from 'react-router-dom';
import { MovieList } from './MovieList'

export const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [active, setActive] = useState(false);

    const handleSubmit = (args, e) => {
        e.preventDefault();
        dispatch(searchMovie(args));
        history.push('/searchResults');
    }

    //We dinamically display movies that user is searching
    const handleTyping = (event) => {
        dispatch(searchMovie(event.target.value));
    }

    //If user clicks outside input, we make suggested list invisible
    window.onclick = function(event) {
        if(event.target.nodeName!='UL'&& event.target.nodeName!='INPUT'){
            setActive(false);
        }
    }

    //We make suggested list visible once the input is focused
    const handleFocus = () => {
        setActive(true);
    }

    return <form className='searchForm' onSubmit={(e) => handleSubmit(document.getElementById('searchBar').value, e)}>
        <input className='searchBar'
            id="searchBar"
            type='text'
            placeholder='Search'
            onChange={(e) => handleTyping(e)}
            onFocus={handleFocus} />
        <MovieList active={active} />
    </form>
}