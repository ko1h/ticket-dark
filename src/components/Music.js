import React from 'react'
import PropTypes from 'prop-types'
import MusicList from './Music';
import { Link } from 'react-router-dom';

import artist from '../assets/chainsmokers.jpg'


function Music(props) {

  function handleDeleteMusicClick() {
      props.onDeleteMusic(props.musicId);
  }

  return(
    <div className="main-bg">
      <div className="Music">
        <div className="picture">
          <img src={artist} />
        </div>
        <div className="category">
        <h1>{props.category}</h1>
        </div>
        <div className="info">
          <h1>{props.name}</h1>
          <h3>{props.location}</h3>
          <p>{props.date}</p>
          <button onClick={handleDeleteMusicClick}>X</button>
        </div>
      </div>
    </div>

  );
}


Music.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  currentRouterPath: PropTypes.string,
  musicId: PropTypes.string.isRequired,
  onDeleteMusic: PropTypes.func,
};

export default Music
