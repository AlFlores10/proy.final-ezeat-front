import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <NavLink to="/about">About US</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </footer>
    )
}
export default Footer;