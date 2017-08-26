import React from 'react';

export default (props) => {
  return (<div className={`loading-container ${props.color}`}>
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <span className="sr-only">Loading...</span>
    </div>);
}
