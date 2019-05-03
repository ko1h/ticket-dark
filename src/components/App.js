import React from 'react';
import './App.scss';
import Error404 from './Error404';
import Header from './Header';
import Welcome from './Welcome';
import Music from './Music';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/music' component={Music} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
