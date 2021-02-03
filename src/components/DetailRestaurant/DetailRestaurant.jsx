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
                        src={this.state.selectedRestaurant.image}></img>
                    <h3><b>{this.state.selectedRestaurant.name}</b></h3>
                    <h3>{this.state.selectedRestaurant.adress}</h3>
                    <h3>{this.state.selectedRestaurant.email}</h3>
                    {this.state.selectedRestaurant.menuID.map(menu => {
                        return (
                            <Link onClick={() => this.selectMenu(menu)} className="menu">
                                <li>{menu.name}</li><br />
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
                {this.showData()}<br />
                <button onClick={() => this.btnBack()}> BACK HOME PAGE</button>
            </div>
        )
    };
};

export default DetailRestaurant;