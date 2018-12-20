import React from 'react';
import {Col, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

const UsersInfo = ({avatar_url, name, followers, following, created_at, company, email, location, blog, bio}) => (
    <Panel>
        <Panel.Heading>
            {name}
        </Panel.Heading>
        <Panel.Body>
            <Col md={6}>
                <img src={avatar_url} alt="name"/>
            </Col>
            <Col md={6}>
                <ListGroup>
                    <ListGroupItem>followers: {followers}</ListGroupItem>
                    <ListGroupItem>following: {following}</ListGroupItem>
                    <ListGroupItem>created_at: {created_at}</ListGroupItem>
                    <ListGroupItem>company: {company}</ListGroupItem>
                    <ListGroupItem>email: {email}</ListGroupItem>
                    <ListGroupItem>location: {location}</ListGroupItem>
                    <ListGroupItem>blog: {blog}</ListGroupItem>
                    <ListGroupItem>bio: {bio}</ListGroupItem>
                </ListGroup>
            </Col>
        </Panel.Body>
    </Panel>
);

export default UsersInfo;
