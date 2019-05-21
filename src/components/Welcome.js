import React from 'react';
import styled from 'styled-components'
import wallpaper from '../assets/wallpaper.png'

function Welcome(){
  return(
    <div className="Welcome">
      <img src={wallpaper}/>
      <div>
        <input type="Search" placeholder="Search"/>
      </div>
    </div>
  )
}

export default Welcome
