import React from 'react';
import styled from 'styled-components'
import EventList from './EventList'

function Music(){
  return(
    <div>
      <div className="mainPage">
        <h1>Music</h1>
        <h3>Major Lazer</h3>
        <button>learn more</button>
      </div>
      <EventList />
    </div>
  )
}

export default Music
