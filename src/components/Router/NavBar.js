import React from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { SearchBar } from '../Search/SearchBar'
import { useHistory } from 'react-router-dom';


export const NavBar = () => {

    const history = useHistory();
    const count = useSelector(state => state.moviesReducer.comparedIds.length);

    const handleMovieClick = (movie) => {
        history.push('/movie/' + movie.id); // send us to movie page
    };

    return (
        <nav className='NavBar'>
            <Link className="NavBar-Link" to="/">
                <button className='NavBar-NavButton' type='button'>Home</button>
            </Link>
            <Link className='NavBar-Link' to='/Compare/'>
                <button className='NavBar-NavButton' type='button' disabled={!count}>Compare({count}/4)</button>
            </Link>
            <Link className='NavBar-Link' to='/about/'>
                <button className='NavBar-NavButton' type='button'>About</button>
            </Link>
            <SearchBar OnMovieClick={handleMovieClick}/>
        </nav>
    );
};
