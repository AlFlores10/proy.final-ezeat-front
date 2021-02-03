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
            const dataRestaurants = await axios.get('https://proy-final-ezeat.herokuapp.com/restaurant');
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
                        <div className="container-restaurant" key={restaurant.id}>
                            <div>
                                <h3>{restaurant.name}</h3>
                                <img className="img-restaurant" onClick={() => this.selectRestaurant(restaurant)}
                                    alt={restaurant.name} src={restaurant.image}></img>
                            </div>
                        </div>
                    )
                })
            )
        } else {
            return (
                <div> LOADING DATA...</div>
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
                <div className="home-background">
                    <h1>EzEAT</h1>
                </div>
                <div>{this.showRestaurants()}</div>
            </>
        )
    };
};

export default Home;
