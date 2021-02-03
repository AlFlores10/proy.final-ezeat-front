import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/img/logo.jpg';

const Header = () => {
    const history = useHistory();
    const logout = () => {
        localStorage.clear();
        history.push('/');
    }

    const profile = () => {
        const role = localStorage.getItem('role');
        if (role === 'restaurant') {
            history.push('/restaurant/profile');
        } else {
            history.push('/customer/profile');
        }
    }
    return (
        <header className="header">
            <NavLink to="/">
                <img src={logo} alt='logo.jpg'></img>
            </NavLink>
            <div className="user">
                {localStorage.getItem('token') ?
                    <>
                        <span onClick={profile}>Profile</span>
                        <span onClick={logout}>Logout</span>
                    </> :
                    <>
                        <NavLink to="/login">Log in</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </>
                }
            </div>
        </header>
    )
}

export default Header;