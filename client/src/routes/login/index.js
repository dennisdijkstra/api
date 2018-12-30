import React from 'react';
import Prompt from '../../components/templates/Prompt';
import Login from './login';

function action() {
    return {
        chunks: ['login'],
        title: 'Login',
        component: (
            <Prompt>
                <Login />
            </Prompt>
        ),
    };
}

export default action;
