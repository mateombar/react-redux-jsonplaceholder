import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';
import * as postsActions from '../../actions/postsActions';

const { getTodos: usersGetTodos } = usersActions;
const { getTodos: postsGetTodos } = postsActions;

class Posts extends Component {
    urlParams = {
        userId: this.props.match.params.userId
    }
    componentDidMount() {
        if (!this.props.usersReducer.users.length) {
            this.props.usersGetTodos();
        }
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>
                    {this.urlParams.userId}
                </h1>
            </div>
        )
    }
}
const mapStateToProps = ({ usersReducer, postsReducer }) => {
    return { usersReducer, postsReducer };
}
const mapDispatchToProps = {
    usersGetTodos,
    postsGetTodos
}
// const mapStateToProps = (state) => {
//     return { usersReducer: state.usersReducer, postsReducer: state.postsReducer };
// }
export default connect(mapStateToProps, mapDispatchToProps)(Posts);