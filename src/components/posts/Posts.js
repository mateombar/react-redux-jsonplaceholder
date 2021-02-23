import React, { Component } from 'react';
class Posts extends Component {
    render() {
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

export default Posts;