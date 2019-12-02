import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { MovieList } from './MovieList';
import { SearchForm } from './SearchForm'
import {
    SET_ACTIVE_FALSE,
} from '../../redux/types/types';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const searchInput = useRef(null);

    // If user clicks outside input, we make suggested list invisible
    const handleOutsideClick = (e) => {
        if (searchInput.current && !searchInput.current.contains(e.target)) {
            dispatch({ type: SET_ACTIVE_FALSE });
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, false);
        return () => {
            document.removeEventListener('click', handleOutsideClick, false);
        }
    }, [1]);

    return <div className='SearchBar'>
        <SearchForm ref={searchInput} />
        <MovieList />
    </div>
}