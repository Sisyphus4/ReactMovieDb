import React from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

export const NavBar = () => {
    const count = useSelector(state => state.generalReducer.comparedId.length);
    return (
        <nav className='navBar'>
            <Link className="link" to="/">
                <button className='navButton' type='button'>Home</button>
            </Link>
            <Link className='link' to='/Compare/'>
                <button className='navButton' type='button' disabled={!count}>Compare({count})</button>
            </Link>
            <Link className='link' to='/about/'>
                <button className='navButton' type='button'>About</button>
            </Link>
        </nav>
    );
};