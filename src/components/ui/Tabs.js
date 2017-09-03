import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
    };

    this.updateTab = this.updateTab.bind(this);
  }
  updateTab(event) {
    this.setState({
      currentTab: +event.target.dataset.id,
    });
  }
  render() {
    const content = this.props.children[this.state.currentTab];
    let tabList = [];
    for (let i = 0; i < this.props.children.length; i++) {
      let active = '';
      if (this.state.currentTab === i) {
        active = 'active';
      }
      tabList.push(<li key={i}>
          <a className={`tabs-button ${active}`} data-id={i} onClick={this.updateTab}>
            {this.props.children[i].props.title}
          </a>
        </li>);
    }

    return (<div className="tabs">
      <div className="tabs-list">
        <ul>
          {tabList}
        </ul>
      </div>
      <div className="tabs-content">
        {content}
      </div>
    </div>);
  }
}

export default Tabs;
