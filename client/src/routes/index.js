import React from 'react';

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
            load: () => import(/* webpackChunkName: 'home' */ './login'),
        },
        {
            path: '/register',
            load: () => import(/* webpackChunkName: 'home' */ './register'),
        },
        {
            path: '/home',
            load: () => import(/* webpackChunkName: 'home' */ './home'),
        },
        {
            path: '/settings',
            load: () => import(/* webpackChunkName: 'home' */ './settings'),
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
