import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './RegisterCustomer.css';


const RegisterCustomer = () => {

    const history = useHistory();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const form = event.target;
            const customer = {
                firstname: form.firstname.value,
                lastname: form.lastname.value,
                email: form.email.value,
                password: form.password.value,
            }
            if (customer.firstname && customer.lastname && customer.email && customer.password) {
                await axios.post('https://proy-final-ezeat.herokuapp.com/customer/signup', customer)
                console.log(customer);
                alert("Customer Created Successfully")
                history.push('/')
            } else {
                console.log(customer);
                alert("Error Creating Customer")
            }


        } catch (error) {
            console.error(error)
        }

    };

    return (
        <form className="register-customer" onSubmit={handleSubmit}>
            <h2>Register Customer</h2>
            <input type="text" name="firstname" placeholder="Enter your First Name" />
            <input type="text" name="lastname" placeholder="Enter your Last Name" />
            <input type="email" name="email" placeholder="Enter your Email" />
            <input type="password" name="password" placeholder="Enter your Password" />
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterCustomer;