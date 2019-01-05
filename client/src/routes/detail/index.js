import React from 'react';
import Dashboard from '../../components/templates/dashboard/Dashboard';
import Detail from './Detail';

const action = ({ store, params }) => {
    const { id } = params;
    const state = store.getState();
    const { user: { isAuthenticated } } = state;

    if (!isAuthenticated) {
        return { redirect: '/' };
    }

    return {
        chunks: ['detail'],
        title: 'Detail',
        component: (
            <Dashboard>
                <Detail id={id} />
            </Dashboard>
        ),
    };
};

export default action;
