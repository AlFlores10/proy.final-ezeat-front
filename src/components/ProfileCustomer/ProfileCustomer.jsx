import React, { Component } from 'react';
import './ProfileCustomer.css';
import axios from 'axios';

class ProfileCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: []
        };
    };


    componentDidMount = () => {
        this.getProfile();
    };


    getProfile = async () => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        try {
            const dataProfile = await axios.get(`http://localhost:3000/customer/${id}`, { headers: { token } });
            this.setState({ profile: dataProfile.data });
            console.log(this.state.profile);
        } catch (error) {
            console.log(error);
        };
    };


    deleteAccount = async () => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        try {
            const deleteAccount = await axios.delete(`http://localhost:3000/customer/${id}`, { headers: { token } });
            console.log(deleteAccount);
            localStorage.clear();
            this.props.history.push('/');
        } catch (error) {
            console.log(error);
        };
    };


    render() {
        return (
            <>
                <div className="container-profile-customer">
                    <h2>Name:</h2>{this.state.profile.firstname}<br />
                    <h2>LastName:</h2>{this.state.profile.lastname}<br />
                    <h2>Email:</h2>{this.state.profile.email}<br />
                    <h2>Role:</h2>{this.state.profile.role}<br /><br/>
                </div>
                <div className="profile-customer">
                    <button onClick={() => { this.props.history.push('/customer/update') }}>UPDATE ACCOUNT</button><br />
                    <button onClick={() => { this.deleteAccount() }}>DELETE ACCOUNT</button><br/>
                </div>
            </>
        )
    };
};

export default ProfileCustomer;