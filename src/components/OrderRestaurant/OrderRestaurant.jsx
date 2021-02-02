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

    showOrderRestaurants = () => {
        if (this.state.orders) {
            return (
                this.state.orders.map(order => {
                    return (
                        <>
                            <div className="container-order-restaurant" key={order._id}>
                                <h2 key={ order.restaurantID._id}> {order.restaurantID.name.toString()}</h2><br/>
                                <h2 key={ order.customerID._id}> {order.customerID.email.toString()} </h2><br/>
                                <h2 key={ order.menuID._id}> {order.menuID.name.toString()} </h2><br/>
                                <h2 key={ order.bill}> {order.bill.toString()} </h2><br/>
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


    render() {
        return (
            <>
                <div>{this.showOrderRestaurants()}</div>
                <button onClick={() => {this.props.history.push('/menu/create')}}>ADD MENU</button>
            </>
        )
    };
};

export default OrderRestaurant;