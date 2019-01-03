import React from 'react';
import Dashboard from '../../components/templates/dashboard/Dashboard';
import Settings from './Settings';

const action = () => ({
    chunks: ['settings'],
    title: 'Settings',
    component: (
        <Dashboard>
            <Settings />
        </Dashboard>
    ),
});

export default action;
