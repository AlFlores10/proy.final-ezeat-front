import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './RegisterRestaurant.css';


const RegisterRestaurant = () => {

    const history = useHistory();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const form = event.target;
            const restaurant = {
                name: form.name.value,
                email: form.email.value,
                adress: form.adress.value,
                password: form.password.value,
            }
            if (restaurant.name && restaurant.email && restaurant.adress && restaurant.password) {
                await axios.post('https://proy-final-ezeat.herokuapp.com/restaurant/signup', restaurant)
                console.log(restaurant);
                alert("Restaurant Created Successfully")
                history.push('/')
            } else {
                console.log(restaurant);
                alert("Error Creating Restaurant")
            }


        } catch (error) {
            console.error(error)
        }

    };

    return (
        <form className="register-restaurant" onSubmit={handleSubmit}>
            <h2>Register Restaurant</h2>
            <input type="text" name="name" placeholder="Enter your Name" />
            <input type="email" name="email" placeholder="Enter your Email" />
            <input type="text" name="adress" placeholder="Enter your Adress" />
            <input type="password" name="password" placeholder="Enter your Password" />
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterRestaurant;