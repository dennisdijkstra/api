import React from 'react';
import Settings from './Settings';

const action = () => ({
    chunks: ['settings'],
    title: 'Settings',
    component: (
        <Settings />
    ),
});

export default action;
