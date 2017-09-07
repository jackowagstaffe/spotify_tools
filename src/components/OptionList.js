import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedPlaylist from './ui/SelectedPlaylist';
import CompareOptions from './ui/CompareOptions';

class OptionList extends Component {
  render() {
    return (
      <div className="option-list inner">
        <h2>Selected Playlists</h2>
        <div className="options-container">
          <SelectedPlaylist playlist={this.props.playlistA} label="A" />
          <CompareOptions hasSelections={this.props.playlistA && this.props.playlistB} />
          <SelectedPlaylist playlist={this.props.playlistB} label="B" />
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playlistA: state.playlists.selectedA,
  playlistB: state.playlists.selectedB,
});

export default connect(mapStateToProps)(OptionList);
