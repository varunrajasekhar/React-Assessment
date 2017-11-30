import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, browserHistory} from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import allReducers from './reducers/index';

const logger = createLogger();
const store = createStore(allReducers,
    applyMiddleware(thunk, promise, logger)
)

ReactDOM.render(
    <div className="section">
    <Provider store={store}>
        <App/>
    </Provider>
    </div>,
    document.getElementById('root')
);
