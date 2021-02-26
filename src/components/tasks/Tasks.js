import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as tasksActions from '../../actions/tasksActions';
class Tasks extends Component {
    componentDidMount(){
        this.props.getTodos();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>TASKS Regards</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => state.tasksReducer;

export default connect(mapStateToProps, tasksActions)(Tasks);