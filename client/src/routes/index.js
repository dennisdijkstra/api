import React from 'react';
import Prompt from '../components/templates/Prompt';
import Login from './login/login';
import Register from './register/register';
import Dashboard from './dashboard/dashboard';

const routes = {
    path: '/',
    async action({ next }) {
        const route = await next();
        route.title = `${route.title || 'Untitled Page'}`;
        route.description = route.description || '';
        return route;
    },
    children: [
        {
            path: '/',
            action: () => ({
                title: 'Login',
                component: <Prompt><Login /></Prompt>,
            }),
        },
        {
            path: '/register',
            action: () => ({
                title: 'Register',
                component: <Prompt><Register /></Prompt>,
            }),
        },
        {
            path: '/dashboard',
            action: () => ({
                title: 'Dashboard',
                component: <Dashboard />,
            }),
        },
        {
            path: '(.*)',
            action: () => ({
                title: 'Page not found',
                component: <h1>Page not found</h1>,
            }),
        },
    ],
};

export default routes;
