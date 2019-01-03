import React from 'react';
import DashboardTemplate from '../../components/templates/dashboard/Dashboard';
import Dashboard from './Dashboard';

const action = () => ({
    chunks: ['dashboard'],
    title: 'Dashboard',
    component: (
        <DashboardTemplate>
            <Dashboard />
        </DashboardTemplate>
    ),
});

export default action;
