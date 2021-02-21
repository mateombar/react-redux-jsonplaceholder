import React, { Component } from 'react';
import './Users.css';
// Allows to connect a component with a reducer
import { connect } from 'react-redux';

class Users extends Component {
  // componentDidMount() {
  //   this.fetchCharacter();
  // }

  async fetchCharacter() {
    try {
      // throw 'Error fetching data';
      const data = await fetch('https://jsonplaceholder.typicode.com/users/');
      const response = await data.json();
      this.setState({
        users: response
      })
      // fetch('https://jsonplaceholder.typicode.com/users/')
      //   .then((response) => response.json())
      //   .then((data) =>{
      //     this.setState({
      //       users: data
      //     })
      //   });
    } catch (error) {
      console.error(error)
    }
  }
  // putRows = () => (
  //   this.props.users.map(user => (
  //     < tr key={user.id}>
  //       <td>{user.name}</td>
  //       <td>{user.email}</td>
  //       <td><a href={user.link}>Rockers</a></td>
  //     </tr >
  //   ))
  // );
  render() {
    return (
      this.props.users ?
        (<table className="table">
          <thead className="table_header">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody className="table_body">
            {/* {this.putRows()} */}
          </tbody>
        </table>)
        :
        (<h3>Loading</h3>)
    );
  }
}
const mapStateToProps = (state) => { 
  return {users: state.usersReducer};
}
export default connect(mapStateToProps, {/*Actions Creators*/})(Users);
