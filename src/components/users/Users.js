import React, { Component } from 'react';
// Allows to connect a component with a reducer
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';

import Table from './Table';
import Loader from '../Loader';
import Error from '../Error';
import './css/Users.css';

class Users extends Component {
  async componentDidMount() {
    if (!this.props.users.length) {
      this.props.getTodos();
    }
  }
  putContent = () => {
    if (this.props.loading) {
      return (<Loader />)
    }
    if (this.props.error) {
      return (
        <Error message={this.props.error} />
      )
    }
    return (
      <Table users={this.props.users} />
    )
  }

  render() {
    return (
      <React.Fragment>
        <h1>Users</h1>
        {this.putContent()}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return state.usersReducer;
}
export default connect(mapStateToProps, usersActions)(Users);
