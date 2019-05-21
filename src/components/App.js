import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';


import Error404 from './Error404';
import Welcome from './Welcome';
import Music from './Music';


export default class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };


  render() {

    return (
    <BrowserRouter>
        <div>
          <style global jsx>{`
           body {
             margin: 0;
             padding: 0;
           }
           `}</style>
           <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
           <SideDrawer show={this.state.sideDrawerOpen} />


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
