import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import UiReducer from './store/reducers/uiReducer';
import GnomeReducer from './store/reducers/gnomeReducer';

const reducer = combineReducers({
    uiReducer: UiReducer,
    gnomeReducer: GnomeReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
