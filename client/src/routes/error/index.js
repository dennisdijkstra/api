import React from 'react';
import Dashboard from '../../components/templates/dashboard/Dashboard';
import ErrorPage from './ErrorPage';

const action = () => ({
    chunks: ['error'],
    title: 'Error',
    component: (
        <Dashboard>
            <ErrorPage />
        </Dashboard>
    ),
});
export default action;
