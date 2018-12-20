import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Grid, Row, Button} from 'react-bootstrap';

import User from '../components/User'
import * as usersDuck from '../ducks/users';

class HomePage extends Component {

    componentDidMount() {
        this.props.loadUsers();
    }

    render() {
        return (
            <div className="home-page">
                <Grid className="user-list">
                    <Row>
                        {this.props.data && this.props.data.map(user => (
                            <User
                                avatar_url={user["avatar_url"]}
                                html_url={user["html_url"]}
                                login={user["login"]}
                                key={user["login"]}
                            />
                        ))}
                    </Row>
                </Grid>
                <Button
                    bsStyle="primary"
                    type="button"
                    block
                    onClick={() => {this.props.loadMoreUsers(this.props.data[this.props.data.length - 1]['id'])}}>
                    Load More
                </Button>
            </div>
        )
    }
}

export default connect(
    state => state.users,
    dispatch => ({
        loadUsers: () => {dispatch(usersDuck.onUsersFetch())},
        loadMoreUsers: (id) => dispatch(usersDuck.onMoreUsersFetch(id))
    })
)(HomePage);
