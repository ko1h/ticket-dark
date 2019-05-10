import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

function EventList(props) {
  return(
    <h1>Our event</h1>
  {Object.keys(props.eventList).map(function(eventId) {
    var event = props.eventList[eventId]
    return <Event name={event.name}
      name={event.name}
      brand={event.brand}
      details={event.details}
      onBuyTicket{props.onBuyTicket}
      eventId={eventId}
      key={eventId} />;
    })}
  </div>
  )
}

export default EventList
