import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../molecules/header/Header';
import s from './Dashboard.css';

class Dashboard extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    render() {
        const { children } = this.props;

        return (
            <>
                <Header />
                <div>
                    {children}
                </div>
            </>
        );
    }
}

export default Dashboard;
