import React from 'react';
import rendered from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import UserInfo from '../../components/UsersInfo';

configure({adapter: new Adapter()});

const defaultProps = {
    avatar_url: 'avatar_url',
    name: 'name',
    followers: 'followers',
    following: 'following',
    created_at: 'created_at',
    company: 'company',
    email: 'email',
    location: 'location',
    blog: 'blog',
    bio: 'bio'
};

describe('User component', () => {

    test('matches the snapshot', () => {
        const tree = rendered.create(<Router><UserInfo {...defaultProps}/></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
