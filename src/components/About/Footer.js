import React from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {

    return <footer className='Footer'>
            <p>Made by Alexander Chernikov</p>
            <br />
            <Link className='link' to='/about/'>About </Link>
        </footer>
}