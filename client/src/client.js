import '@babel/polyfill';
import ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
import history from './history';
import routes from './routes';

const router = new UniversalRouter(routes);

const render = (location) => {
    router.resolve({ pathname: location.pathname }).then((route) => {
        document.title = route.title;
        ReactDOM.render(route.component, document.getElementById('root'));
    });
};

render(history.location);
history.listen(render);
