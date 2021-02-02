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
        this.props.history.push('/');
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
            await axios.post('http://localhost:3000/order', newOrder, {headers: {token}})
            console.log(order);
            alert("Order Created Successfully")
            this.props.history.push('/')
        } catch (error) {

        }
};


showData = () => {
    if (this.state.selectedMenu?._id) {
        return (
            <div className="menu-details" key={this.state.selectedMenu._id}>

                <div className="name">{this.state.selectedMenu.name}</div>
                {this.state.selectedMenu.ingredient.map(ingredient => {
                    return (
                        <div className="menu">
                            {ingredient}
                        </div>
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
        <div className="container-menu-details" key={this.state.selectedMenu._id}>
            {this.showData()}
            <button onClick={() => this.btnBack()}> BACK HOME PAGE</button><br />
            <button onClick={() => this.createOrder()}> ADD ORDER</button>
        </div>
    )
};
}

export default DetailMenu;