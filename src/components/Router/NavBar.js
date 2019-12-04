import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom";
import { SearchBar } from '../Search/SearchBar'
import { useHistory } from 'react-router-dom';
import { searchMovie } from '../../redux/actions/searchMovie';


export const NavBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const count = useSelector(state => state.moviesReducer.comparedIds.length);

    const handleMovieClick = (movie) => {
        history.push('/movie/' + movie.id); // send us to movie page
    };

    const handleSubmit = (searchInputValue, e) => {
        e.preventDefault();
        dispatch(searchMovie(searchInputValue));
        history.push('/searchResults');
    }

    const handleClick = (e) => {
        if (count === 0) {
            e.preventDefault();
        }
    }

    return (
        <nav className='NavBar'>
            <NavLink className='NavBar-Link'
                activeClassName='NavBar-Link-active'
                exact to="/">
                Home
        </NavLink>
            <NavLink className='NavBar-Link'
                exact to='/Compare/'
                activeClassName='NavBar-Link-active'
                onClick={(e) => handleClick(e)}>
                Compare({count})
        </NavLink>
            <NavLink className='NavBar-Link'
                activeClassName='NavBar-Link-active'
                exact to='/about/'>
                About
        </NavLink>
            <SearchBar
                OnSubmit={(searchInputValue, e) => handleSubmit(searchInputValue, e)}
                OnMovieClick={handleMovieClick} />
        </nav>)
};
