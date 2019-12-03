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
        <nav className='NavBar'>
            <Link className={location.pathname == '/' ? 'NavBar-Link_active NavBar-Link' : 'NavBar-Link'} 
            to="/">
                Home
            </Link>
            <Link className={location.pathname == '/Compare/' ? 'NavBar-Link_active NavBar-Link' : 'NavBar-Link'} 
            to='/Compare/' 
            onClick={(e) => handleClick(e)}>
                Compare({count})
            </Link>
            <Link className={location.pathname == '/about/' ? 'NavBar-Link_active NavBar-Link' : 'NavBar-Link'} 
            to='/about/'>
                About
            </Link>
            <SearchBar />
        </nav>
    );
};
