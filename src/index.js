import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'smox';
import store from './redux/store';
import App from './App';

const dom = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, dom);