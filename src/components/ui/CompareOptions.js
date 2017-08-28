import React, { Component } from 'react';
import { connect } from 'react-redux';
import generateResult from '../../actions/GenerateResult';

class CompareOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.getResult = this.getResult.bind(this);
  }
  updateSelected(event) {
    this.setState({
      selected: event.target.value,
    });
  }
  getResult() {
    this.props.generateResult(this.state.selected);
  }
  render() {
    return (<div className="options-box">
      <select onChange={this.updateSelected} size="4">
        <option value="union">Combine playlists</option>
        <option value="intersect">Tracks that are in both</option>
        <option value="anotb">Tracks that are in A but not B</option>
        <option value="bnota">Tracks that are in B but not A</option>
      </select>
      <button onClick={this.getResult}>Get Result</button>
    </div>);
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({
  generateResult: (selected) => dispatch(generateResult(selected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareOptions);
