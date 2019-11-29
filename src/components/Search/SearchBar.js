import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { MovieList } from './MovieList';
import { SearchForm } from './SearchForm'
import {
    SET_ACTIVE_FALSE,
} from '../../redux/types/types';

export const SearchBar = (props) => {
    const dispatch = useDispatch();
    const searchInput = useRef(null);

    // If user clicks outside input, we make suggested list invisible
    const handleOutsideClick = (e) => {
        console.log(searchInput.current == e.target)
        if (searchInput.current && !searchInput.current.contains(e.target)) {
            dispatch({ type: SET_ACTIVE_FALSE });
        }
    }

    const OnMovieClick = (movie) => {
        props.OnMovieClick(movie);
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, false);
        return () => {
            document.removeEventListener('click', handleOutsideClick, false);
        }
    }, [1]);

    return <div className='searchBar'>
        <SearchForm ref={searchInput} />
        <MovieList  OnMovieClick={(movie)=>OnMovieClick(movie)}/>
    </div>
}