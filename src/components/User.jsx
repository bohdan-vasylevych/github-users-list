import React from 'react'
import {Link} from 'react-router-dom';
import {Col, Image, Panel} from 'react-bootstrap'

const User = ({avatar_url, html_url, login}) => (
    <Col md={3}>
        <Link to={`/${login}`} className='user'>
            <Panel>
                <Panel.Heading>
                    {login}
                </Panel.Heading>
                <Panel.Body>
                    <Image responsive src={avatar_url} alt={login} className='user-img'/>
                </Panel.Body>
                <Panel.Footer>
                    <p>{html_url}</p>
                </Panel.Footer>
            </Panel>
        </Link>
    </Col>
);

export default User;
