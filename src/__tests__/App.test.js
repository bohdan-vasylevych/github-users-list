import React from 'react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import rendered from 'react-test-renderer';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import * as usersReducer from '../ducks/users';
import * as usersInfoReducer from '../ducks/user';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({users: usersReducer.default, userInfo: usersInfoReducer.default});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
configure({adapter: new Adapter()});

describe('App component', () => {

    test('matches the snapshot', () => {
        const tree = rendered.create(<Provider store={store}><App/></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
