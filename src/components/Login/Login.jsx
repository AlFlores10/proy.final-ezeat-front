import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './Login.css';


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const history = useHistory();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const res = await axios.post('http://localhost:3000/login', { email, password, role });
            if (res.data.token === undefined) {
                alert("Login Failed");
                console.log(res.data.error);
                localStorage.setItem('id', null);
                localStorage.setItem('token', null);
            } else {
                alert("Login OK");
                console.log(res.data);
                localStorage.setItem('id', res.data._id);
                localStorage.setItem('token', res.data.token);
                history.push('/');
            }
        } catch (error) {
            console.error(error)
            alert("Login Failed")
        }

    }
    return (
        <form className="login" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" onChange={event => setEmail(event.target.value)} name="email" placeholder="Enter your Email" value={email} />
            <input type="password" onChange={event => setPassword(event.target.value)} name="password" placeholder="Enter your Password" value={password} />
            <h2>Select Role: <br/><br/>
            <select value={role} onChange={event => setRole(event.target.value)} name="role">
                <option></option>
                <option value="customer">Customer</option>
                <option value="restaurant">Restaurant</option>
            </select></h2>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;