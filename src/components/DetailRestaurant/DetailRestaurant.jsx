import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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


    selectMenu = (menu) => {
        console.log(menu);
        this.props.history.push('/order/detail');
        localStorage.setItem('order', JSON.stringify(menu));
    };


    showData = () => {
        if (this.state.selectedRestaurant?._id) {
            return (
                <div className="restaurant-details" key={this.state.selectedRestaurant._id}>
                    <img alt={this.state.selectedRestaurant.name}
                        src={`https://image.tmdb.org/t/p/w300${this.state.selectedRestaurant.image}`}></img>
                    <div className="name">Name: {this.state.selectedRestaurant.name}</div>
                    <div className="adress">Adress: {this.state.selectedRestaurant.adress}</div>
                    {this.state.selectedRestaurant.menuID.map(menu => {
                        return (
                            <Link onClick = { () => this.selectMenu(menu)} className="menu">
                                {menu.name}
                            </Link>
                        )
                        })
                    }
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