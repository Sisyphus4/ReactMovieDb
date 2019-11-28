import React from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { SearchBar } from '../Search/SearchBar'

export const NavBar = () => {
    const count = useSelector(state => state.moviesReducer.comparedId.length);
    return (
        <nav className='NavBar'>
            <Link className="NavBar-Link" to="/">
                <button className='NavBar-NavButton' type='button'>Home</button>
            </Link>
            <Link className='NavBar-Link' to='/Compare/'>
                <button className='NavBar-NavButton' type='button' disabled={!count}>Compare({count})</button>
            </Link>
            <Link className='NavBar-Link' to='/about/'>
                <button className='NavBar-NavButton' type='button'>About</button>
            </Link>
            <SearchBar/>
        </nav>
    );
};
