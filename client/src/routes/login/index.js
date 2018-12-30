import React from 'react';
import Prompt from '../../components/templates/Prompt';
import Login from './login';

const action = () => ({
    chunks: ['login'],
    title: 'Login',
    component: (
        <Prompt>
            <Login />
        </Prompt>
    ),
});

export default action;
