import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'


function Music(props){
  return(
    <div>
      <div className="mainPage">
        <h1>{props.name}</h1>
        <h3>{props.brand}</h3>
        <p>{props.details}</p>
      </div>
      <div>
        <button>BUy</button>
      </div>
    </div>
  )
}

export default Music
