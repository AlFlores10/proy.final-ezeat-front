import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './UpdateRestaurant.css';


const UpdateRestaurant = () => {

    const history = useHistory();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const restaurantID = localStorage.getItem('id');
            const form = event.target;
            const restaurant = {
                _id: restaurantID,
                password: form.password.value,
            }
            if (restaurant.password) {
                const token = localStorage.getItem('token');
                await axios.patch('http://localhost:3000/restaurant', restaurant, { headers: { token } })
                console.log(restaurant);
                alert("Restaurant Updated Successfully")
                history.push('/')
            } else {
                console.log(restaurant);
                alert("Error Updating Restaurant")
            }


        } catch (error) {
            console.error(error)
        }

    };

    return (
        <form className="update-restaurant" onSubmit={handleSubmit}>
            <h2>Update Restaurant</h2>
            <input type="password" name="password" placeholder="Enter your Password" />
            <button type="submit">Update</button>
        </form>
    )
}

export default UpdateRestaurant;