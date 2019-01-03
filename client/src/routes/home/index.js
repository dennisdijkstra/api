import React from 'react';
import Dashboard from '../../components/templates/dashboard/Dashboard';
import Home from './Home';

const action = () => ({
    chunks: ['home'],
    title: 'Home',
    component: (
        <Dashboard>
            <Home />
        </Dashboard>
    ),
});

export default action;
