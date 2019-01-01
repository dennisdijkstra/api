import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Dashboard.css';

class Dashboard extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    render() {
        const { children } = this.props;

        return (
            <div className={s.container}>
                <div>
                    {children}
                </div>
            </div>
        );
    }
}

export default Dashboard;
