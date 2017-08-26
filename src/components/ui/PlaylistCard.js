import React from 'react';

export default props => {
  let image = '';
  if (props.playlist.images.length > 0) {
    image = props.playlist.images[0].url;
  }

  return (<div className="playlist-card">
    <div className="playlist-image">
      <img src={image} alt={props.playlist.name} />
      <a>A</a><a className="b">B</a>
    </div>
    <p>{props.playlist.name}</p>

  </div>)
};
