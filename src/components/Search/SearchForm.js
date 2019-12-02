import React from 'react'
import { debounce } from 'underscore';
import { searchMovie } from '../../redux/actions/searchMovie';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    SET_ACTIVE_TRUE,
} from '../../redux/types/types';

export const SearchForm = React.forwardRef((props, ref) => {
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
        if(event.target.value)
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