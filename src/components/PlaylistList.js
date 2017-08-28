import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from './ui/Loader';
import PlaylistCard from './ui/PlaylistCard';
import SearchBox from './ui/SearchBox';
import selectPlaylist from '../actions/SelectPlaylist';

class PlaylistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblePlaylists: [],
    };

    this.search = this.search.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState((prevState, props) => {
      return {visiblePlaylists: nextProps.playlists};
    });
  }
  search(query) {
    if (query === null || query === '') {
      this.setState((prevState, props) => {
        return {visiblePlaylists: this.props.playlists};
      });
      return;
    }

    let result = this.props.playlists.filter(playlist => {
      return playlist.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
    });

    this.setState((prevState, props) => {
      return {visiblePlaylists: result};
    });
  }
  render() {
    if (this.props.loading) {
      return (<Loader color="dark" />);
    }

    let playlists = [];
    for (let i=0; i < this.state.visiblePlaylists.length; i++) {
      let playlist = this.state.visiblePlaylists[i];
      playlists.push(<li key={playlist.id}>
        <PlaylistCard playlist={playlist} selectPlaylist={this.props.selectPlaylist} />
      </li>);
    }

    return (
      <div className="playlist-list">
        <SearchBox id="playlist-search" onChange={this.search} />
        <p className="lead">You have { this.props.count } playlists.</p>
        <ul>
          {playlists}
        </ul>
        <div className="playlist-list-footer"></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.playlists.loading,
  playlists: state.playlists.userPlaylists,
  count: state.playlists.userPlaylists.length,
});

const mapDispatchToProps = (dispatch) => ({
  selectPlaylist: (url, bay) => dispatch(selectPlaylist(url, bay)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistList);
