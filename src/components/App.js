import React, { Component } from 'react';
import PlaylistList from './PlaylistList';
import OptionList from './OptionList';
import RequestAuth from './RequestAuth';
import { connect } from 'react-redux';
import Loader from './ui/Loader';
import UserPanel from './ui/UserPanel';
import Tabs from './ui/Tabs';
import Tab from './ui/Tab';
import Result from './ui/Result';

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
          Use the tools below to select two playlists and compare/transform them.
          <div className="container">
            <OptionList />
            <Tabs>
              <Tab title="Playlists">
                <PlaylistList />
              </Tab>
              <Tab title="Result" disabled={!this.props.hasResult}>
                <Result results={this.props.results} />
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
});

export default connect(mapStateToProps)(App);
