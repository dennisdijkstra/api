import React from 'react';
import Login from './login/login';
import Register from './register/register';

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
                component: <Login />,
            }),
        },
        {
            path: '/register',
            action: () => ({
                title: 'Register',
                component: <Register />,
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
