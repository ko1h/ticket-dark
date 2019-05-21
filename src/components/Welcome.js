import React from 'react';
import styled from 'styled-components'
import wallpaper from '../assets/wallpaper.png'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';



function Welcome(props){

  return(
    <div className="Welcome">
      <style jsx>{`
    .search.top {
      display: flex;
      position: absolute;
    }
    `}</style>
      <img src={wallpaper}/>
      <div className='search top'>
        <SearchIcon />
        <InputBase
          placeholder="Search…"
          />
      </div>
    </div>
  )
}

export default Welcome
