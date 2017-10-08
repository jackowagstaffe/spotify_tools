import React from 'react';
import Loader from './Loader';

export default props => {
  if (!props.playlist || props.playlist === null) {
    return <div className="selected-playlist">
      <div className="dud-image"><h3>Playlist {props.label}</h3></div>
    </div>;
  }

  if (props.playlist.loading) {
    return (<div className="selected-playlist a">
      <Loader />
    </div>);
  }

  return (<div className="selected-playlist">
    <h3 className="lead">Playlist {props.label}</h3>
    <div className="image-name">
      <img alt={`The playlist $(props.playlist.data.name)`} src={props.playlist.data.images[0].url} />
      <p>{props.playlist.data.name}</p>
    </div>
  </div>);
};
