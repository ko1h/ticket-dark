import React from 'react';
import styled from 'styled-components'

import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (
      <div>
      <div className="topNavColumn">
        <div className="topNav">
          <div className="topNavLeft">
            <a href="#">FOLLOW @ EVENT LIGHT</a>
          </div>

          <div className="topNavRight">
            <a href="/Login">LOGIN</a>
          </div>
        </div>
        <div className="logo">
          <h1>EVENT LIGHT</h1>
        </div>
      </div>

      <div className="bodyNavColumn">
        <div className="line">

        </div>
        <div class="bodyTopNav">
          <Link to="/musiclist"><a>CONCERTS</a></Link>
          <Link to="/"><a>SPORTS</a></Link>
          <Link to="/"><a>ART AND THEATHER</a></Link>
          <Link to="/"><a>FAMILY</a></Link>
          <Link to="/"><a>LOCATION</a></Link>
       </div >

      </div>
    </div>
    );
  }
}

export default Navbar;
