import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersAction from '../../actions/usersAction';
class Posts extends Component {
    componentDidMount() {
        if (!this.props.users.length) {
            this.props.getTodos();
        }
    }
    render() {
        console.log(this.props);
        const urlParams = {
            userId: this.props.match.params.userId
        }
        return (
            <div>
                <h1>
                    {urlParams.userId}
                </h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state.usersReducer;
}
export default connect(mapStateToProps, usersAction)(Posts);