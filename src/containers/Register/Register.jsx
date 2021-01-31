import React from 'react';
import './Register.css';
import { NavLink } from 'react-router-dom';



const Register = () => {
    return (
        <div className="register">
            <button><NavLink to="/customer/signup">NEW CUSTOMER</NavLink></button>
            <button><NavLink to="/restaurant/signup">NEW RESTAURANT</NavLink></button>
        </div>
    )
};

export default Register;