import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import {connect} from 'react-redux';

import * as userDuck from '../ducks/user';
import UsersInfo from '../components/UsersInfo';

class UserPage extends Component {

    componentDidMount() {
        this.props.loadUserInfo(this.props.match.params.username)
    }

    render() {
        return (
            <Grid>
                <Row>
                    <UsersInfo {...this.props.data}/>
                </Row>
            </Grid>
        )
    }
}

export default connect(
    state => state.userInfo,
    dispatch => ({
        loadUserInfo: (userName) => dispatch(userDuck.onUsersInfoFetch(userName))
    })
)(UserPage);
