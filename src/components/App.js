import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './CustomNavbar';
import Error404 from './Error404';
import Welcome from './Welcome';
import Music from './Music';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
            <Route exact path="/" component={Welcome} />
            <Route path="/Music" component={Music} />
            <Route component={Error404}/>
        </div>
      </Router>
    );
  }
}
