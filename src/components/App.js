import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.fetchCharacter();
    setTimeout(() => {
      // this.setState({
      //   users: [
      //     {
      //       name: 'Mateo Montanez',
      //       email: 'mateomontabaron@gmail.com',
      //       link: 'https://rockers-c5e8f.web.app/',
      //     },
      //     {
      //       name: 'Lupita Lopez',
      //       email: 'lupita@gmail.com',
      //       link: 'https://rockers-c5e8f.web.app/',
      //     },
      //   ]
      // })
    }, 1000);
  }

  async fetchCharacter() {
    try{
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
    }catch(error){
      console.error(error)
    }
  }
  putRows = () => (
    this.state.users.map(user => (
      < tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><a href={user.link}>Rockers</a></td>
      </tr >
    ))
  );
  render() {
    return (
      this.state.users ?
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
        :
        (<h3>Loading</h3>)
    );
  }
}

export default App;
