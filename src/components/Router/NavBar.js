import React from "react";
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import { SearchBar } from '../Search/SearchBar'

export const NavBar = () => {
    const count = useSelector(state => state.moviesReducer.comparedId.length);
    const activeStyle = { backgroundColor: 'Fuchsia' };

    const handleClick = (e) => {
        if (count === 0) {
            e.preventDefault();
        }
    }
    
    return (
        <nav className='NavBar'>
            <NavLink className='NavBar-Link'
                activeStyle={activeStyle}
                exact to="/">
                Home
            </NavLink>
            <NavLink className='NavBar-Link'
                exact to='/Compare/'
                activeStyle={activeStyle}
                onClick={(e) => handleClick(e)}>
                Compare({count})
            </NavLink>
            <NavLink className='NavBar-Link'
                activeStyle={activeStyle}
                exact to='/about/'>
                About
            </NavLink>
            <SearchBar />
        </nav>
    );
};
