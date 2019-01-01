import React, { Component } from 'react';
import Items from '../../components/items/Items';
import s from './dashboard.css';


class Dashboard extends Component {
    render() {
        return (
            <div className={s.dashboard}>
                <h1>Dashboard</h1>
                <Items />
            </div>
        );
    }
}

export default Dashboard;
