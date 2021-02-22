import React, { Component } from 'react';
// Allows to connect a component with a reducer
import { connect } from 'react-redux';
import * as usersAction from '../../actions/usersAction';

import Loader from '../Loader';
import './Users.css';

class Users extends Component {
  async componentDidMount() {
    this.props.getTodos();
  }
  putContent = () => {
    if (this.props.loading) {
      return (<Loader />)
    } else {
      return (
        <table className="table">
          <thead className="table_header">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody className="table_body">
            {
              this.putRows()
            }
          </tbody>
        </table>
      )
    }
  }
  putRows = () => this.props.users.map((user) => (
    < tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td><a href={user.link}>Rockers</a></td>
    </tr >
  ));
  render() {
    console.log(this.props);
    if (this.props.error) {
      return (
        <h1>NADA QUE HACE</h1>
      )
    }
    return (
      this.putContent()
    );
  }
}
const mapStateToProps = (state) => {
  return state.usersReducer;
}
export default connect(mapStateToProps, usersAction)(Users);
