import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './UpdateCustomer.css';


const UpdateCustomer = () => {

    const history = useHistory();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const customerID = localStorage.getItem('id');
            const form = event.target;
            const customer = {
                _id: customerID,
                password: form.password.value,
            }
            if (customer.password) {
                const token = localStorage.getItem('token');
                await axios.patch('https://proy-final-ezeat.herokuapp.com/customer', customer, { headers: { token } })
                console.log(customer);
                alert("Customer Updated Successfully")
                history.push('/')
            } else {
                console.log(customer);
                alert("Error Updating Customer")
            }


        } catch (error) {
            console.error(error)
        }

    };

    return (
        <form className="update-customer" onSubmit={handleSubmit}>
            <h2>Update Customer</h2>
            <input type="password" name="password" placeholder="Enter your Password" />
            <button type="submit">Update</button>
        </form>
    )
}

export default UpdateCustomer;