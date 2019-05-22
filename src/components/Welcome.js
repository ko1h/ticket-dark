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
      <form id="demo-2">
	       <input type="search" placeholder="Search">< /input>
       </form>

    </div>
  )
}

export default Welcome
