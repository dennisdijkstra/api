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
            path: '/login',
            load: () => import(/* webpackChunkName: 'home' */ './login'),
        },
        {
            path: '/register',
            load: () => import(/* webpackChunkName: 'home' */ './register'),
        },
        {
            path: '/',
            load: () => import(/* webpackChunkName: 'home' */ './home'),
        },
        {
            path: '/settings',
            load: () => import(/* webpackChunkName: 'home' */ './settings'),
        },
        {
            path: '/item/:id',
            load: () => import(/* webpackChunkName: 'home' */ './detail'),
        },
        {
            path: '(.*)',
            load: () => import(/* webpackChunkName: 'home' */ './error'),
        },
    ],
};

export default routes;
