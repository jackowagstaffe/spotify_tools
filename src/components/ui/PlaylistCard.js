import React from 'react';

export default props => {
  function selectPlaylist(event) {
    props.selectPlaylist(props.playlist.href, event.target.innerHTML);
  }

  let image = '';
  if (props.playlist.images.length > 0) {
    image = props.playlist.images[0].url;
  }

  return (<div className="playlist-card">
    <div className="playlist-image">
      <img src={image} alt={props.playlist.name} />
      <a
        onClick={selectPlaylist}
        className={props.selectedA ? 'selected' : ''}
      >
        A
      </a>
      <a
        onClick={selectPlaylist}
        className={`b ${props.selectedB ? 'selected' : ''}`}
      >
        B
      </a>
    </div>
    <p>{props.playlist.name}</p>

  </div>)
};
