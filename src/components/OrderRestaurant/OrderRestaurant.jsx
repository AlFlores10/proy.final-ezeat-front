import React, { Component } from 'react';
import './OrderRestaurant.css';
import axios from 'axios';

class OrderRestaurant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: []
        };
    };


    componentDidMount = () => {
        this.getAllOrders();
    };


    getAllOrders = async () => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        try {
            const dataOrders = await axios.get(`http://localhost:3000/order/profile/${id}`, {headers: {token}});
            this.setState({ orders: dataOrders.data.data });
            console.log(dataOrders.data.data);
        } catch (error) {
            console.log(error);
        };
    };


    deleteAccount = async () => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        try {
            const deleteAccount = await axios.delete(`http://localhost:3000/restaurant/${id}`, {headers: {token}});
            console.log(deleteAccount);
            localStorage.clear();
            this.props.history.push('/');
        } catch (error) {
            console.log(error);
        };
    };

    showOrderRestaurants = () => {
        if (this.state.orders) {
            return (
                this.state.orders.map(order => {
                    return (
                        <>
                            <div className="container-order-restaurant" key={order._id}>
                                <h2>ID Order:</h2> {order._id.toString()}<br/>
                                <h2>Restaurant:</h2> {order.restaurantID.name.toString()}<br/>
                                <h2>Customer:</h2> {order.customerID.email.toString()} <br/>
                                <h2>Order:</h2> {order.menuID.name.toString()} <br/>
                                <h2>Pay:</h2> {order.bill.toString()}<br/><br/>
                            </div>
                        </>
                    )
                })
            )
        } else {
            return (
                <div> LOADING DATA...</div>
            )
        };
    };


    render() {
        return (
            <>
                <div>{this.showOrderRestaurants()}</div><br/>
                <div className="order-restaurant">
                <button onClick={() => {this.props.history.push('/menu/create')}}>ADD NEW MENU</button><br/>
                <button onClick={() => {this.props.history.push('/menu/update')}}>UPDATE ACCOUNT</button><br/>
                <button onClick={() => {this.deleteAccount()}}>DELETE ACCOUNT</button><br/>
                </div>
            </>
        )
    };
};

export default OrderRestaurant;