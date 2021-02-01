import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: []
        };
    };


    componentDidMount = () => {
        this.getAllRestaurants();
    };


    getAllRestaurants = async () => {
        try {
            const dataRestaurants = await axios.get('http://localhost:3000/restaurant');
            this.setState({ restaurants: dataRestaurants.data });
            console.log(this.state.restaurants);
        } catch (error) {
            console.log(error);
        };
    };


    showRestaurants = () => {
        if (this.state.restaurants[0]) {
            return (
                this.state.restaurants.map(restaurant => {
                    return (
                        <>
                            <div className="container-restaurant" key={restaurant.id}>
                                <h2> {restaurant.name} </h2>
                                <h2> {restaurant.adress} </h2>
                                <h2> {restaurant.email} </h2>
                                <img className="img-restaurant" onClick={() => this.selectRestaurant(restaurant)} 
                                alt={restaurant.name} src={`http://localhost:3000/{film.poster_path}`}></img>
                            </div>
                        </>
                    )
                })
            )
        } else {
            return (
                <div> CARGANDO LOS DATOS...</div>
            )
        };
    };


    selectRestaurant = (restaurant) => {
        this.props.history.push('/restaurant');
        localStorage.setItem('restaurant', JSON.stringify(restaurant));
    };


    render() {
        return (
            <>
                <div>{this.showRestaurants()}</div>
            </>
        )
    };
};

export default Home;
