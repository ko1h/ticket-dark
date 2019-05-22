import React from 'react'
import Music from './Music'
import PropTypes from 'prop-types'

function MusicList(props) {
  return (
    <div className='mainContainer'>
      <style jsx>{`
          .mainContainer{
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          div{
            background-color: #394D59;
            width: 100%;
            height: 100%;
        }
      `}</style>
      <h1>Music</h1>
      {Object.keys(props.musicList).map(function(musicId) {
        var music = props.musicList[musicId]
        return <Music name={music.name}
          name={music.name}
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
