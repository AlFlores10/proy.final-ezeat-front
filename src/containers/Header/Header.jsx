import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/img/logo.jpg';

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/">
                <img src={logo} alt='logo.jpg'></img>
            </NavLink>
            <div className="user">
                <NavLink to="/login">Log in</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        </header>
    )
}
export default Header