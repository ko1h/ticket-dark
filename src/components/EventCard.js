import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function EventCard(props){
  return(
    <div className="EventCard">
      <div className="concert">
        Concert
      </div>
      <div className="art">
       Art & Theather
      </div>
      <div className="sports">
        sports
      </div>
      <div className="location">
      location
      </div>
    </div>
  )
}

export default EventCard
