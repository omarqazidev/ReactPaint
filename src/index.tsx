import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { ReactPaintApp } from './RPTest';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
