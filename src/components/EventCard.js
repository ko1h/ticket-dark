import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import concert from '../assets/concert.jpeg'
import art from '../assets/art.jpeg'
import sports from '../assets/sports.jpeg'
import location from '../assets/location.jpeg'

function EventCard(props){
  return(
    <div className="EventCard">
      <div className="concert">
        <img src={concert}/>
        <h1>hello</h1>
      </div>
      <div className="art">
      <img src={art}/>
      </div>
      <div className="sports">
        <img src={sports}/>
      </div>
      <div className="location">
      <img src={location}/>
      </div>
    </div>
  )
}

export default EventCard
