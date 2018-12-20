import React from 'react';
import rendered from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import User from '../../components/User';

configure({adapter: new Adapter()});
const defaultProps = {
    avatar_url: 'avatar_url',
    html_url: 'html_url',
    login: 'login'
};

describe('User component', () => {

    test('matches the snapshot', () => {
        const tree = rendered.create(<Router><User {...defaultProps}/></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
