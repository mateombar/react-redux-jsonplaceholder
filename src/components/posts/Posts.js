import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader';
import Error from '../Error';

import * as usersActions from '../../actions/usersActions';
import * as postsActions from '../../actions/postsActions';

const { getTodos: usersGetTodos } = usersActions;
const { getByUser: postsGetByUser } = postsActions;

class Posts extends Component {
    async componentDidMount() {
        const {
            usersGetTodos,
            postsGetByUser,
            match: { params: { userId } }
        } = this.props
        if (!this.props.usersReducer.users.length) {
            await usersGetTodos();
        }
        if (this.props.usersReducer.error) {
            return;
        }
        if (!('post_id' in this.props.usersReducer.users[userId])) {
            postsGetByUser(userId);
        }
    }

    putUser = () => {
        const {
            usersReducer,
            match: { params: { userId } }
        } = this.props;

        
        if (usersReducer.error) {
            return <Error message={usersReducer.error} />
        }
        if (!usersReducer.users.length || usersReducer.loading) {
            return <Loader />
        }
        const user = usersReducer.users[userId - 1];
        return (
            <h1>{user.name}'s Publications</h1>
        )
    }

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                { this.putUser()}
            </React.Fragment>
        )
    }
}
const mapStateToProps = ({ usersReducer, postsReducer }) => {
    return { usersReducer, postsReducer };
}
const mapDispatchToProps = {
    usersGetTodos,
    postsGetByUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);