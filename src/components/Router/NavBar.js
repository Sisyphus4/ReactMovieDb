import React from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { SearchBar } from '../Search/SearchBar'

export const NavBar = () => {
    const count = useSelector(state => state.moviesReducer.comparedId.length);

    const handleClick = (e) => {
        if (count === 0) {
            e.preventDefault();
        }
    }
    return (
        <nav className='navBar'>
            <Link className={location.pathname == '/' ? 'Activelink link' : 'link'} to="/">
                Home
            </Link>
            <Link className={location.pathname == '/Compare/' ? 'Activelink link' : 'link'} to='/Compare/' 
            onClick={(e) => handleClick(e)}>
                Compare({count})
            </Link>
            <Link className={location.pathname == '/about/' ? 'Activelink link' : 'link'} to='/about/'>
                About
            </Link>
            <SearchBar />
        </nav>
    );
};
