import React from 'react';
import './App.scss';
import Error404 from './Error404';
import Header from './Header';
import Welcome from './Welcome';
import Music from './Music';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    masterEventList: {
      'event1' : {
        name: 'name area'
        ticket: 'ticket cost'
        details: 'details about the band'
      },
      'event2' : {
        name: 'name area',
        ticket: 'ticket cost'
        details: 'details about the band'
      }
    }


  this.handleAddingItem = this.handleAddingItem.bind(this);
  handleToBuyTicket(ticket) {
    let newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
     [newTicketId]: newTicket
   });
   this.setState({masterTicketList: newMasterTicketList});
  }

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
