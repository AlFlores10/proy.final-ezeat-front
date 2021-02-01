import React, { Component } from 'react';

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
                <button onClick={() => this.btnBack()}> BACK HOME PAGE</button>
            </div>
        )
    };
}

export default DetailMenu;