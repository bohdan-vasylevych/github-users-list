import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as usersReducer from './ducks/users'
import * as usersInfoReducer from './ducks/user'
import './index.css';

import App from './App';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({users: usersReducer.default, userInfo: usersInfoReducer.default});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(usersReducer.watchRequest);
sagaMiddleware.run(usersInfoReducer.watchRequest);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
