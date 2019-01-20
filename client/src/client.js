import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import queryString from 'query-string';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { setCurrentUser } from './actions/user';
import history from './history';
import router from './router';
import { store, persistor } from './store';
import { NotificationProvider } from './context';
import s from './client.css';

if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    const decoded = jwtDecode(token);
    store.dispatch(setCurrentUser(decoded));
}

const container = document.getElementById('root');

const render = async (location) => {
    try {
        const context = {
            pathname: location.pathname,
            query: queryString.parse(location.search),
        };
        const route = await router.resolve(context);

        if (route.redirect) {
            history.replace(route.redirect);
            return;
        }

        ReactDOM.render(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NotificationProvider>
                        <div className={s.wrapper}>
                            {route.component}
                        </div>
                    </NotificationProvider>
                </PersistGate>
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
