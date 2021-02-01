import React, { Component } from 'react';

import './DetailRestaurant.css';

class DetailRestaurant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRestaurant: {}
        }
    };

    componentDidMount = () => {
        let datarestaurant = JSON.parse(localStorage.getItem('restaurant'));
        this.setState({ selectedRestaurant: datarestaurant });
        console.log(datarestaurant);
    };


    btnBack = () => {
        this.props.history.push('/');
    };


    showData = () => {
        if (this.state.selectedRestaurant?._id) {
            return (
                <div className="restaurant-details" key={this.state.selectedRestaurant._id}>
                    <img alt={this.state.selectedRestaurant.name} 
                    src={`https://image.tmdb.org/t/p/w300${this.state.selectedRestaurant.image}`}></img>
                    <div className="name">Name: {this.state.selectedRestaurant.name}</div>
                    <div className="adress">Adress: {this.state.selectedRestaurant.adress}</div>
                    <div className="delivery">Delivery: {this.state.selectedRestaurant.menuID[0].name}</div>
                </div>
            )
        } else {
            return (
                <div>LOADING DATA...</div>
            )
        }
    };


    render() {
        return (
            <div className="container-restaurant-details" key={this.state.selectedRestaurant._id}>
                {this.showData()}
                <button onClick={() => this.btnBack()}> BACK HOME PAGE</button>
            </div>
        )
    };
};

export default DetailRestaurant;