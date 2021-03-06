import React, { Component } from 'react';
import PlaylistList from './PlaylistList';
import OptionList from './OptionList';
import RequestAuth from './RequestAuth';
import { connect } from 'react-redux';
import Loader from './ui/Loader';
import UserPanel from './ui/UserPanel';
import Tabs from './ui/Tabs';
import Tab from './ui/Tab';
import Notification from './ui/Notification';
import CreatePlaylist from './ui/CreatePlaylist';
import createPlaylist from '../actions/CreatePlaylist';
import Result from './ui/Result';
import selectTab from '../actions/SelectTab';

class App extends Component {
  render() {
    if (!this.props.authenticated) {
      return (<RequestAuth />);
    }

    // Load the user if they haven't already been
    if (this.props.userLoading) {
      return (<Loader color="light" />);
    }

    return (
      <div className="app">
        <UserPanel user={this.props.userData} />
        <h1>Spotify&nbsp;Tools</h1>
        <div className="panel">
          <Notification />
          <div className="inner">Use the tools below to select two playlists and compare/transform them.</div>
          <div className="container">
            <OptionList />
            <Tabs selectTab={this.props.selectTab} tab={this.props.tab}>
              <Tab title="Playlists">
                <PlaylistList />
              </Tab>
              <Tab title="Result" disabled={!this.props.hasResult}>
                <div>
                  <CreatePlaylist createPlaylist={this.props.createPlaylist} />
                  <Result results={this.props.results} />
                </div>
              </Tab>
            </Tabs>
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
  userLoading: state.user.loading,
  userData: state.user.data,
  results: state.result.result,
  hasResult: state.result.hasResult,
  tab: state.tab.tab,
});

const mapDispatchToProps = (dispatch) => ({
  selectTab: (tab) => dispatch(selectTab(tab)),
  createPlaylist: (name) => dispatch(createPlaylist(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
