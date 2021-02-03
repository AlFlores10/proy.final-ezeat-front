import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './CreateMenu.css';


const CreateMenu = () => {

    const history = useHistory();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const form = event.target;
            const restaurantID = localStorage.getItem('id');
            const newMenu = {
                restaurantID: restaurantID,
                name: form.name.value,
                ingredient: form.ingredient.value
            }
            if (newMenu.restaurantID && newMenu.name && newMenu.ingredient) {
                const token = localStorage.getItem('token');
                await axios.post('https://proy-final-ezeat.herokuapp.com/menu', newMenu, { headers: { token } });
                console.log(newMenu);
                alert("Menu Created Successfully")
                history.push('/')
            } else {
                console.log(newMenu);
                alert("Error Creating Menu")
            }


        } catch (error) {
            console.error(error)
        }

    };

    return (
        <form className="create-menu" onSubmit={handleSubmit}>
            <h2>Create Menu</h2>
            <input type="text" name="name" placeholder="Enter your Menu Name" />
            <input type="text" name="ingredient" placeholder="Enter your Ingredients" />
            <button type="submit">Create</button>
        </form>
    )
}

export default CreateMenu;