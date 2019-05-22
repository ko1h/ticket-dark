import React from 'react';
import styled from 'styled-components'
import tennis from '../assets/tennis.jpeg'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';



function Welcome(props){

  return(
    <div className="Welcome">
      <div className="leftOfImg">

      </div>
      <img src={tennis}/>
      <div className="rightOfImg">

      </div>
      <div class="container">
        <input type="text" placeholder="Search..."></input>
        <div class="search"></div>
      </div>

    </div>
  )
}

export default Welcome
