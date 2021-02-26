import React from 'react';
import { connect } from 'react-redux';
import Error from '../Error';
import Loader from '../Loader';
const Comments = (props) => {
    if (props.com_error) {
        return <Error message={props.com_error} />
    }
    if (props.com_loading && !props.comments.length) {
        return <Loader />
    }

    const putComments = () => (
        props.comments.map((comment) => (
            <li className="Comments__comment" key={comment.id}>
                <h5>{comment.email}</h5>
                <p>{comment.body}</p>
            </li>
        ))
    )
    return (
        <ul className="Comments">
            {putComments()}
        </ul>
    )
}

const mapStateToProps = ({ postsReducer }) => postsReducer

export default connect(mapStateToProps)(Comments);