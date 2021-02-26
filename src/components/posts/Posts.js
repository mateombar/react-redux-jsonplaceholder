import React, { Component } from 'react';
import { connect } from 'react-redux';

import Comments from './Comments';
import Loader from '../Loader';
import Error from '../Error';

import './styles/Post.css';

import * as usersActions from '../../actions/usersActions';
import * as postsActions from '../../actions/postsActions';

const { getTodos: usersGetTodos } = usersActions;
const { getByUser: postsGetByUser, openComments, getComments } = postsActions;

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
        if (!('post_id' in this.props.usersReducer.users[userId - 1])) {
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
            <header>
                <h2>{user.name}'s Publications</h2>
            </header>
        )
    }

    putPost = () => {
        const {
            usersReducer,
            usersReducer: { users },
            postsReducer,
            postsReducer: { posts },
            match: { params: { userId } }
        } = this.props;
        if (!users.length) return;
        if (usersReducer.error) return;

        if (postsReducer.loading) {
            return <Loader />
        }
        if (postsReducer.error) {
            return <Error message={postsReducer.error} />
        }
        if (!posts.length) return;
        if (!('post_id' in users[userId - 1])) return;
        const { post_id } = users[userId - 1]
        return this.showInfo(posts, post_id);
    }

    showInfo = (posts, post_id) => (posts[post_id].map((post, post_index) => (
        <React.Fragment key={post.id}>
            <article className="Post__container" onClick={() => this.showComments(post_id, post_index, post.comments)}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                {
                    post.open ? <Comments /> : ''
                }
            </article>
            <hr />
        </React.Fragment>
    )))

    showComments = (post_id, post_index, comments) => {
        this.props.openComments(post_id, post_index);
        if (!comments.length) {
            this.props.getComments(post_id, post_index)
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="Post">
                { this.putUser()}
                { this.putPost()}
            </div>
        )
    }
}
const mapStateToProps = ({ usersReducer, postsReducer }) => {
    return { usersReducer, postsReducer };
}
const mapDispatchToProps = {
    usersGetTodos,
    postsGetByUser,
    openComments,
    getComments
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);