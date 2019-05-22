import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CarouselPage from './CarouselPage';
import EventCard from './EventCard';



function EventList(props){
  return(
    <div className="EventList">
        <EventCard />
    </div>
  )
}

export default EventList
