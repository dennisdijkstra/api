import React from 'react';
import Dashboard from './dashboard';

const action = () => ({
    chunks: ['dashboard'],
    title: 'Dashboard',
    component: (
        <Dashboard />
    ),
});

export default action;
