import React from 'react';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  show() {
    this.setState({
      visible: true,
    });
  }
  hide() {
    this.setState({
      visible: false,
    });
  }
  render() {
    let visible = this.state.visible ? 'visible' : 'hidden';
    return (<div className="tooltip-container" onMouseEnter={this.show} onMouseLeave={this.hide}>
      {this.props.children}
      <div className={`tooltip ${visible}`}>
        <div className="arrow"></div>
        {this.props.text}
      </div>
    </div>);
  }
}

export default Tooltip;
