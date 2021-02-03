import React, { Component } from 'react';
import axios from 'axios';

import './DetailMenu.css';

class DetailMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedMenu: {}
        }
    };

    componentDidMount = () => {
        let datamenu = JSON.parse(localStorage.getItem('order'));
        this.setState({ selectedMenu: datamenu });
    };


    btnBack = () => {
        this.props.history.push('/restaurant');
    };


    createOrder = async () => {
        const order = JSON.parse(localStorage.getItem('order'));
        const token = localStorage.getItem('token');
        const newOrder = {
            customerID: localStorage.getItem('id'),
            restaurantID: order.restaurantID,
            menuID: order._id,
            bill: 'cash'
        }
        try {
            if (newOrder.customerID && newOrder.restaurantID && newOrder.menuID) {
                await axios.post('http://localhost:3000/order', newOrder, { headers: { token } })
                console.log(newOrder);
                alert("Order Created Successfully")
                this.props.history.push('/')
            } else {
                console.log(newOrder);
                alert("Error Creating Order")
            }
        } catch (error) {
            console.log(error);
            alert("Order Error")
        }
    };


    showData = () => {
        if (this.state.selectedMenu?._id) {
            return (
                <>
                    <div className="container-menu-details" key={this.state.selectedMenu._id}>
                        <h2>{this.state.selectedMenu.name}</h2>
                        {this.state.selectedMenu.ingredient.map(ingredient => {
                            return (
                                <h3>{ingredient}</h3>
                            )
                        })
                        }
                    </div>
                </>
            )
        } else {
            return (
                <div>LOADING DATA...</div>
            )
        }
    };


    render() {
        return (
            <>
                {this.showData()}<br />
                <div className="menu-details" key={this.state.selectedMenu._id}>
                    <button onClick={() => this.createOrder()}> ADD ORDER</button><br />
                    <button onClick={() => this.btnBack()}> BACK RESTAURANT</button><br />
                </div>
            </>
        )
    };
}

export default DetailMenu;