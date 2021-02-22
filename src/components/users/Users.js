import React, { Component } from 'react';
// Allows to connect a component with a reducer
import { connect } from 'react-redux';
import './Users.css';
import * as usersAction from '../../actions/usersAction';

class Users extends Component {
  componentDidMount() {
    this.fetchCharacter();
  }

  fetchCharacter() {
    try {
      this.props.getTodos();
    } catch (error) {
      console.error(error)
    }
  }
  putRows = () => (
    this.props.users.map(user => (
      < tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><a href={user.link}>Rockers</a></td>
      </tr >
    ))
  );
  render() {
    return (
      this.props.users.length === 0 ?
        (<h3>Loading</h3>)
        :
        (<table className="table">
          <thead className="table_header">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody className="table_body">
            {this.putRows()}
          </tbody>
        </table>)
    );
  }
}
const mapStateToProps = (state) => {
  return state.usersReducer;
}
export default connect(mapStateToProps, usersAction)(Users);
