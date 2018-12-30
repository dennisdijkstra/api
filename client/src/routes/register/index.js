import React from 'react';
import Prompt from '../../components/templates/Prompt';
import Register from './register';

function action() {
    return {
        chunks: ['register'],
        title: 'Register',
        component: (
            <Prompt>
                <Register />
            </Prompt>
        ),
    };
}

export default action;
