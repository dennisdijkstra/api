import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../molecules/header/Header';
import NotificationBar from '../../molecules/notificationBar/NotificationBar';
import s from './Dashboard.css';

const Dashboard = ({ children }) => (
    <>
        <NotificationBar />
        <Header />
        <div className={s.content}>
            {children}
        </div>
    </>
);

Dashboard.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Dashboard;
