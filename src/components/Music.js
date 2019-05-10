import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import EventList from './EventList'

function Music(props){
  return(
    <div>
      <div className="mainPage">
        <img src={toji} />
        <h1>{props.name}</h1>
        <h3>{props.brand}</h3>
        <p>{props.details}</p>
      </div>
      <button onClick={handleToBuyTicket}>BUy</button>
      </div>
    </div>
  )
}

export default Music
