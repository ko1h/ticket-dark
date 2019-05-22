import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';

import NewMusicForm from './NewMusicForm';
import MusicList from './MusicList';
import Navbar from './Navbar';
import Media from './Media.js'
import Error404 from './Error404';
import Welcome from './Welcome';
import Music from './Music';
import Login from './Login';
import artist from '../assets/chainsmokers.jpg'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      masterMusicList: {
        'music1' : {
          category: 'CONCERT',
          name: 'THE CHAINSMOKERS',
          location: 'Moda Center - Portland, OR',
          date: 'Dec. 5'
        }
      }
    }

    this.handleAddingItem = this.handleAddingItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleAddingItem(newMusic) {
    let newMusicId = v4();
    let newMasterMusicList = Object.assign({}, this.state.masterMusicList, {
      [newMusicId]: newMusic
    });
    this.setState({masterMusicList: newMasterMusicList});
  }

  handleRemoveItem (eventId) {
    let newMasterMusicList = Object.assign({}, this.state.masterMusicList);
    delete newMasterMusicList[eventId];
    this.setState({masterMusicList: newMasterMusicList});
  }

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

           <Navbar />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/Login" component={Login} />

            <Route exact path='/musiclist' render={() =><MusicList musicList={this.state.masterMusicList} onDeleteMusic={this.handleRemoveItem} />} />

            <Route exact path='/newMusic' render={()=><NewMusicForm onNewMusicCreation={this.handleAddingItem} />} />

            <Route component={Error404}/>
          </Switch>
          </div>
      </BrowserRouter>
    );
  }
}
