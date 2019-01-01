import React from 'react';
import Prompt from '../../components/templates/prompt/Prompt';
import Register from './register';

const action = () => ({
    chunks: ['register'],
    title: 'Register',
    component: (
        <Prompt>
            <Register />
        </Prompt>
    ),
});

export default action;
