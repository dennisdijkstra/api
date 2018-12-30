import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import queryString from 'query-string';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import setCurrentUser from './actions/user';
import history from './history';
import router from './router';
import store from './store';
import s from './client.css';

if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    const decoded = jwtDecode(token);
    store.dispatch(setCurrentUser(decoded));
}

const context = {};
const container = document.getElementById('root');
let appInstance;

const render = async (location) => {
    try {
        context.pathname = location.pathname;
        context.query = queryString.parse(location.search);
        const route = await router.resolve(context);

        if (route.redirect) {
            history.replace(route.redirect);
            return;
        }

        appInstance = ReactDOM.render(
            <Provider store={store}>
                <div className={s.container}>
                    {route.component}
                </div>
            </Provider>,
            container,
            () => document.title = route.title,
        );
    } catch (error) {
        console.error(error);
    }
};

history.listen(render);
render(history.location);
