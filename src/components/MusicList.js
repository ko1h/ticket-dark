import React from 'react'
import Music from './Music'
import PropTypes from 'prop-types'

function MusicList(props) {
  return (
    <div>
      <h1>Music</h1>
      {Object.keys(props.musicList).map(function(musicId) {
        var music = props.musicList[musicId]
        return <Music name={music.name}
          location={music.location}
          date={music.date}
          onDeleteMusic={props.onDeleteMusic}
          musicId={musicId}
          key={musicId} />;
      })}
    </div>
  )
}

MusicList.propTypes = {
  musicList: PropTypes.object,
  onDeleteMusic: PropTypes.func,
}

export default MusicList
