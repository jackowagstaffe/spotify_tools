import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from './ui/Loader';
import PlaylistCard from './ui/PlaylistCard';
import PlaylistInput from './ui/PlaylistInput';
import SearchBox from './ui/SearchBox';
import selectPlaylist from '../actions/SelectPlaylist';
import searchPlaylists from '../actions/SearchPlaylists';

class PlaylistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblePlaylists: this.props.playlists,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState((prevState, props) => {
      return {visiblePlaylists: nextProps.playlists};
    });
  }
  render() {
    if (this.props.loading) {
      return (<Loader color="dark" />);
    }

    let playlists = [];
    for (let i=0; i < this.state.visiblePlaylists.length; i++) {
      let playlist = this.state.visiblePlaylists[i];

      let selectedA = Boolean(this.props.selectedA && this.props.selectedA.data.id === playlist.id);
      let selectedB = Boolean(this.props.selectedB && this.props.selectedB.data.id === playlist.id);

      playlists.push(<li key={playlist.id}>
        <PlaylistCard
          playlist={playlist}
          selectPlaylist={this.props.selectPlaylist}
          selectedA={selectedA}
          selectedB={selectedB}
        />
      </li>);
    }

    return (
      <div className="playlist-list">
        <PlaylistInput selectPlaylist={this.props.selectPlaylist} />
        <div className="bar">
          <SearchBox id="playlist-search" value={this.props.searchQuery} onChange={this.props.search} />
          <p className="lead">You have { this.props.count } playlists.</p>
        </div>
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
  playlists: state.playlists.visiblePlaylists,
  count: state.playlists.userPlaylists.length,
  searchQuery: state.playlists.searchQuery,
  selectedA: state.playlists.selectedA,
  selectedB: state.playlists.selectedB,
});

const mapDispatchToProps = (dispatch) => ({
  selectPlaylist: (url, bay) => dispatch(selectPlaylist(url, bay)),
  search: query => dispatch(searchPlaylists(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistList);
