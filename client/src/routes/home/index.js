import React from 'react';
import Dashboard from '../../components/templates/dashboard/Dashboard';
import Home from './Home';

const action = ({ store }) => {
    const state = store.getState();
    const { user: { isAuthenticated } } = state;

    if (!isAuthenticated) {
        return { redirect: '/login' };
    }

    return {
        chunks: ['home'],
        title: 'Home',
        component: (
            <Dashboard>
                <Home />
            </Dashboard>
        ),
    };
};


export default action;
