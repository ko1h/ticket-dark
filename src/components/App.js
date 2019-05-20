import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './CustomNavbar';
import Error404 from './Error404';
import Welcome from './Welcome';
import Music from './Music';


export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/Music" component={Music} />
            <Route component={Error404}/>
          </Switch>
          </div>
      </BrowserRouter>
    );
  }
}
