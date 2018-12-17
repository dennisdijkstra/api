import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Items from './components/Items';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Items />
                </div>
            </Provider>
        );
    }
}

export default App;
