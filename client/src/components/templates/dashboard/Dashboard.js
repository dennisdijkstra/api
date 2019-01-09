import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../molecules/header/Header';
import { NotificationContext } from '../../../context';
import NotificationBar from '../../molecules/notificationBar/NotificationBar';
import s from './Dashboard.css';

class Dashboard extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    static contextType = NotificationContext;

    render() {
        const { children } = this.props;

        return (
            <>
                <NotificationBar />
                <Header />
                <div className={s.content}>
                    {children}
                </div>
            </>
        );
    }
}

export default Dashboard;
