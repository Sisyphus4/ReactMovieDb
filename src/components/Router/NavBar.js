import React from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { SearchBar } from '../Search/SearchBar'
import { useHistory } from 'react-router-dom';


export const NavBar = () => {

    const history = useHistory();
    const count = useSelector(state => state.moviesReducer.comparedId.length);

    const handleMovieClick = (movie) => {
        history.push('/movie/' + movie.id); // send us to movie page
    };

    return (
        <nav className='navBar'>
            <Link className="link" to="/">
                <button className='navButton' type='button'>Home</button>
            </Link>
            <Link className='link' to='/Compare/'>
                <button className='navButton' type='button' disabled={!count}>Compare({count}/4)</button>
            </Link>
            <Link className='link' to='/about/'>
                <button className='navButton' type='button'>About</button>
            </Link>
            <SearchBar OnMovieClick={handleMovieClick}/>
        </nav>
    );
};
