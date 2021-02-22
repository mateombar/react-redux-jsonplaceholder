import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Users from './users/Users';
import Navbar from './Navbar';
const Tasks = (props) => (
  <Fragment>
    <h1>You are in tasks</h1>
  </Fragment>
)

const App = (props) => (
  <BrowserRouter>
    <Navbar></Navbar>
    <Switch>
      <React.Fragment>
        <div className="container">
          <Route exact path="/users" component={Users} />
          <Route exact path="/tasks" component={Tasks} />
        </div>
      </React.Fragment>
    </Switch>
  </BrowserRouter>
)


export default App;
