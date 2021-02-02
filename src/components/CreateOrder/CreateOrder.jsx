import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './CreateOrder.css';


const CreateOrder = () => {

    const history = useHistory();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const form = event.target;
            const customerID = localStorage.getItem('id');
            const newOrder = {
                customerID: customerID,
                restaurantID: form.name.value,
                menuID: form.ingredient.value,
                bill: form.bill.value
            }
            if (newOrder.customerID && newOrder.restaurantID && newOrder.menuID) {
                const token = localStorage.getItem('token');
                await axios.post('http://localhost:3000/order', newOrder, {headers: {token}});
                console.log(newOrder);
                alert("Order Created Successfully")
                history.push('/')
            } else {
                console.log(newOrder);
                alert("Error Creating Order")
            }


        } catch (error) {
            console.error(error)
        }

    };

    return (
        <form className="create-order" onSubmit={handleSubmit}>
            <h2>Create Order</h2>
            <input type="text" name="bill" placeholder="Enter your Pay Method" />
            <button type="submit">Create</button>
        </form>
    )
}

export default CreateOrder;