import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          name: 'Mateo Montanez',
          email: 'mateomontabaron@gmail.com',
          link: 'https://rockers-c5e8f.web.app/',
        },
        {
          name: 'Lupita Lopez',
          email: 'lupita@gmail.com',
          link: 'https://rockers-c5e8f.web.app/',
        },
      ]
    }
  }
  putRows = () => (
    this.state.users.map(user => (
      < tr >
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><a href={user.link}>Rockers</a></td>
      </tr >
    ))
  );
  render() {

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
          {this.putRows()}
        </tbody>
      </table>
    );
  }
}

export default App;
