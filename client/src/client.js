import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import setCurrentUser from './actions/user';
import history from './history';
import routes from './routes';
import store from './store';
import s from './client.css';

if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    const decoded = jwtDecode(token);
    store.dispatch(setCurrentUser(decoded));
}

const router = new UniversalRouter(routes);

const render = (location) => {
    router.resolve({ pathname: location.pathname }).then((route) => {
        document.title = route.title;
        ReactDOM.render(
            <Provider store={store}>
                <div className={s.container}>
                    {route.component}
                </div>
            </Provider>,
            document.getElementById('root'));
    });
};

render(history.location);
history.listen(render);
