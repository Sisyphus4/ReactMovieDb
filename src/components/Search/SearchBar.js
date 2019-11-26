import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovie } from '../../redux/actions/searchMovie';
import { useHistory } from 'react-router-dom';
import { MovieList } from './MovieList';
import { debounce } from 'underscore';
import {
    SET_ACTIVE_TRUE,
    SET_ACTIVE_FALSE,
} from '../../redux/types/types';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (args, e) => {
        e.preventDefault();
        dispatch(searchMovie(args));
        history.push('/searchResults');
    }

    // Debounce dispatch for cases when user is typing fast
    const debouncedDispatch = debounce((value) => dispatch(searchMovie(value)), 200);

    // We dinamically display movies that user is searching
    const handleTyping = (event) => {
        debouncedDispatch(event.target.value);
    }

    // If user clicks outside input, we make suggested list invisible
    const handleOutsideClick = (e) => {
        // ignore clicks on the component itself
        if (e.target.id === 'searchBar' || e.target.id === 'MovieList') {
            return;
        }
        dispatch({ type: SET_ACTIVE_FALSE });
    }

    // We make suggested list visible once the input is focused
    const handleFocus = () => {
        dispatch({ type: SET_ACTIVE_TRUE });
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, false);
        return () => {
            document.removeEventListener('click', handleOutsideClick, false);
        }
    }, [1]);

    return <div className='searchForm'>
        <form onSubmit={(e) => handleSubmit(document.getElementById('searchBar').value, e)}>
            <input className='searchBar'
                id="searchBar"
                type='text'
                placeholder='Search'
                autoComplete="off"
                onChange={handleTyping}
                onFocus={handleFocus} />
        </form>
        <MovieList />
    </div>
}