import React from 'react'
import PropTypes from 'prop-types'
import MusicList from './Music';
import { Link } from 'react-router-dom';

import artist from '../assets/chainsmokers.jpeg'


function Music(props) {

  function handleDeleteMusicClick() {
      props.onDeleteMusic(props.musicId);
  }

  return(
    <div>
      <div>
        <img src={artist} />
        <h1>{props.name}</h1>
        <h3>{props.location}</h3>
        <p>{props.date}</p>
      </div>
      <button onClick={handleDeleteMusicClick}>DELETE</button>
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
