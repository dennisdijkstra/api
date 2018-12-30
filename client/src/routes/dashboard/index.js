import React from 'react';
import Dashboard from './dashboard';

function action() {
    return {
        chunks: ['dashboard'],
        title: 'Dashboard',
        component: (
            <Dashboard />
        ),
    };
}

export default action;
