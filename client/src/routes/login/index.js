import React from 'react';
import Prompt from '../../components/templates/prompt/Prompt';
import Login from './Login';

const action = ({ store }) => {
    const state = store.getState();
    const { user: { isAuthenticated } } = state;

    if (isAuthenticated) {
        return { redirect: '/' };
    }

    return {
        chunks: ['login'],
        title: 'Login',
        component: (
            <Prompt>
                <Login />
            </Prompt>
        ),
    };
};

export default action;
