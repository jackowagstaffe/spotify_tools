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
    this.isActive = this.isActive.bind(this);
  }
  updateSelected(event) {
    this.setState({
      selected: event.currentTarget.dataset.value,
    });
  }
  getResult() {
    if (this.state.selected) {
      this.props.generateResult(this.state.selected);
    }
  }
  isActive(val) {
    return this.state.selected === val ? ' active' : '';
  }
  render() {
    return (<div className="options-box">
      <div className="option-items">
        <div>
          <div
            className={`option-item ${this.isActive('union')}`}
            onClick={this.updateSelected}
            data-value="union"
          >
            <span className="sr-only">Combine playlists</span>
            <img src="svg/union.svg" alt="Combine playlists" />
          </div>
          <div
            className={`option-item ${this.isActive('intersect')}`}
            onClick={this.updateSelected}
            data-value="intersect"
          >
            <span className="sr-only">Tracks that are in both</span>
            <img src="svg/intersection.svg" alt="Tracks that are in both" />
          </div>
        </div>
        <div>
          <div
            className={`option-item ${this.isActive('anotb')}`}
            onClick={this.updateSelected}
            data-value="anotb"
          >
            <span className="sr-only">Tracks that are in A but not B</span>
            <img src="svg/left.svg" alt="Tracks that are in A but not B" />
          </div>
          <div
            className={`option-item ${this.isActive('bnota')}`}
            onClick={this.updateSelected}
            data-value="bnota"
          >
            <span className="sr-only">Tracks that are in B but not A</span>
            <img src="svg/right.svg" alt="Tracks that are in B but not A" />
          </div>
        </div>
      </div>
      <a className="button" onClick={this.getResult}>Get Result</a>
    </div>);
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({
  generateResult: (selected) => dispatch(generateResult(selected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareOptions);
