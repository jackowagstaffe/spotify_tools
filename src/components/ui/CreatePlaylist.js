import React from 'react';

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.createPlaylist = this.createPlaylist.bind(this);
    this.updateName = this.updateName.bind(this);
  }
  createPlaylist(event) {
    if (this.state.name === '') {
      return;
    }

    this.props.createPlaylist(this.state.name);
  }
  updateName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  render() {
    return (<div className="create-playlist">
      <label>
        Playlist Name:
        <input onChange={this.updateName} type="text" className="form-control" />
      </label>
      <button onClick={this.createPlaylist} className="button">Create Playlist</button>
    </div>);
  }
}

export default CreatePlaylist;
