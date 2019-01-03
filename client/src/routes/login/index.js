import React from 'react';
import Prompt from '../../components/templates/prompt/Prompt';
import Login from './Login';

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
