import React from 'react';
import Dashboard from '../../components/templates/dashboard/Dashboard';
import Detail from './Detail';

const action = async ({ store, params }) => {
    const { id } = params;
    const state = store.getState();
    const { user: { isAuthenticated } } = state;

    if (!isAuthenticated) {
        return { redirect: '/' };
    }

    try {
        const response = await fetch(`/api/item/${id}`);
        const data = await response.json();

        if (!response.ok) {
            return { redirect: '../error' };
        }

        return {
            chunks: ['detail'],
            title: 'Detail',
            component: (
                <Dashboard>
                    <Detail data={data} />
                </Dashboard>
            ),
        };
    } catch (err) {
        return { redirect: '../error' };
    }
};

export default action;
