import React from 'react';
import styled from 'styled-components'
import uncrate from '../assets/uncrate.png'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (
      <div>
      <div className="topNavColumn">
        <div className="topNav">
          <div className="topNavLeft">
            <a href="#">FOLLOW @ TICKET DARK</a>
          </div>
          <div className="topNavCenter">
            <a href="#">UNCRATE.COM</a>
            <a href="#">UNCRATE.SUPPLY</a>
            <a href="#">UNCRATE.TV</a>
          </div>
          <div className="topNavRight">
            <a href="#">SIGN IN</a>
          </div>
        </div>
        <div className="logo">
          <img src={uncrate}/>
        </div>
      </div>

      <div className="bodyNavColumn">
        <div className="line">

        </div>
        <div class="bodyTopNav">
          <Link to="/"><a>CONCERTS</a></Link>
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
