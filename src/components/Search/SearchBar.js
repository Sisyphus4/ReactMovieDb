import React, { useState, useEffect, useRef } from 'react';
import { MovieList } from './MovieList';
import { SearchForm } from './SearchForm'


export const SearchBar = (props) => {
    const searchInput = useRef(null);
    const [active, setActive] = useState(false);

    // If user clicks outside input, we make suggested list invisible
    const handleOutsideClick = (e) => {
        if (searchInput.current && !searchInput.current.contains(e.target)) {
            setActive(false);
        }
    }

    const handleFocus = () => {
        setActive(true);
    }

    const handleBlurClick = () => {
        searchInput.current.blur();
    }

    const handleSubmit = (searchInputValue, e) => {
        props.OnSubmit(searchInputValue, e);
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

    return <div className='SearchBar'>
        <SearchForm ref={searchInput} 
        OnFocus={() => handleFocus()} 
        OnSubmit={(searchInputValue, e)=> handleSubmit(searchInputValue, e)}/>
        <MovieList 
        OnBlurClick={handleBlurClick} 
        active={active} 
        OnMovieClick={(movie) => OnMovieClick(movie)} />
    </div>
}