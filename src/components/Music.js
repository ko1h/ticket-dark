import React from 'react'
import PropTypes from 'prop-types'
import MusicList from './Music';
import { Link } from 'react-router-dom';


function Music(props) {

  function handleDeleteMusicClick() {
      props.onDeleteMusic(props.musicId);
  }

  const mainStyle = {
    display: 'grid',
    width: '75%',
    margin: '20px 0',
    gridTemplateColumns: '50% auto',
    gridTemplateRows: '1fr 1fr 250px',
    gridGap: '5px 20px',
    color: '#C1D4D9',
    border: '1px solid red',
    paddingRight: '10px',
  }
  return(
    <div>
      <div>
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
