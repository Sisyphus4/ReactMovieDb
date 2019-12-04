import React from 'react'
import { debounce } from 'underscore';
import { searchMovie } from '../../redux/actions/searchMovie';
import { useDispatch } from 'react-redux';


export const SearchForm = React.forwardRef((props, ref) => {
    const dispatch = useDispatch();

    const handleSubmit = (searchInputValue, e) => {
        props.OnSubmit(searchInputValue, e);
    }

    // Debounce dispatch for cases when user is typing fast
    const debouncedDispatch = debounce((value) => dispatch(searchMovie(value)), 200);

    // We dinamically display movies that user is searching
    const handleTyping = (event) => {
        debouncedDispatch(event.target.value);
    }

    // We make suggested list visible once the input is focused
    const handleFocus = () => {
        props.OnFocus();
    }
    return <form onSubmit={(e) => handleSubmit(document.getElementById('searchBar').value, e)}>
        <input ref={ref}
            id="searchBar"
            type='text'
            placeholder='Search'
            autoComplete="off"
            onChange={handleTyping}
            onFocus={handleFocus} />
    </form>
});