import React, { Component } from 'react';
import PlaylistList from './PlaylistList';
import OptionList from './OptionList';
import RequestAuth from './RequestAuth';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    if (!this.props.authenticated) {
      return (<RequestAuth />);
    }

    return (
      <div className="app">
        <h1>Spotify Tools</h1>
        <div className="panel">
          Use the tools below to select two playlists and compare/transform them.
          <div className="container">
            <div className="block"><PlaylistList /></div>
            <div className="block"><OptionList /></div>
            <div className="block"><PlaylistList /></div>
          </div>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  authenticated: false
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(App);
