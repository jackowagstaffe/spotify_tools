import React from 'react';

class PlaylistInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistIdentifier: null,
    }

    this.selectPlaylist = this.selectPlaylist.bind(this);
    this.updatePlaylistIdentifier = this.updatePlaylistIdentifier.bind(this);
  }
  updatePlaylistIdentifier(event) {
    this.setState({
      playlistIdentifier: event.target.value,
    });
  }
  selectPlaylist(event) {
    const bay = event.target.dataset.bay;
    const playlistIdentifier = this.state.playlistIdentifier;
    let user = '';
    let playlistId = '';

    if (playlistIdentifier === null) {
      return;
    }

    // Check if the playlist is a uri
    let parts = playlistIdentifier.split(':');
    if (parts[0] === 'spotify' && parts[3] === 'playlist') {
      user = parts[2];
      playlistId = parts[4];
    }

    // Check if the playlist is a url
    parts = playlistIdentifier.split('/');
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === 'open.spotify.com') {
        user = parts[i + 2];
        playlistId = parts[i + 4];
      }
    }

    // Don't do anything if required data wasn't found
    if (user === '' || playlistId === '') {
      return;
    }

    // Construct the Spotify api url
    const url = `https://api.spotify.com/v1/users/${user}/playlists/${playlistId}`;
    this.props.selectPlaylist(url, bay);
  }
  render() {
    return (<div className="playlist-input">
      <label>Paste a playlist url
        <input
          onChange={this.updatePlaylistIdentifier}
          className="form-control"
          type="text" id="playlist-paste-url"
        />
      </label>
      <div className="button-container">
        <a onClick={this.selectPlaylist} data-bay="A" className="button">A</a>
        <a onClick={this.selectPlaylist} data-bay="B" className="button">B</a>
      </div>
    </div>);
  }
}

export default PlaylistInput;
