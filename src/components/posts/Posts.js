import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader';
import Error from '../Error';

import './styles/Post.css';

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
            <h1>{user.name}'s Publications</h1>
        )
    }

    putPost = () => {
        const {
            usersReducer,
            usersReducer: {users},
            postsReducer,
            postsReducer: {posts},
            match: { params: { userId } }
        } = this.props;
        if(!users.length) return;
        if(usersReducer.error) return;

        if(postsReducer.loading){
            return <Loader/>
        }
        if(postsReducer.error){
            return <Error message={postsReducer.error}/>
        }
        if(!posts.length) return;
        if(!('post_id' in users[userId - 1])) return;
        const {post_id} = users[userId - 1]
        return posts[post_id].map(post =>(
            <article className="Post__container" key={post.id}>
                <h2>{post.title}</h2>
                <h3>{post.body}</h3>
            </article>
        ))
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
    postsGetByUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);