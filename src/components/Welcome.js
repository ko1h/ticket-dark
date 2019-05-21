import React from 'react';
import styled from 'styled-components'
import wallpaper from '../assets/wallpaper.png'




function Welcome(props){

  return(
    <div className="Welcome">
      <img src={wallpaper}/>
        <form action="">
        <input type="search"></input>
        <i class="fa fa-search"></i>
      </form>


    </div>
  )
}

export default Welcome
