import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
import { Provider } from 'react-redux';
import history from './history';
import routes from './routes';
import store from './store';
import s from './client.css';

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
