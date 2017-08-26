import React from 'react';

export default props => {
  return (<div className="mini-panel right">
    <span className="sr-only">Logged in as</span>{props.user.display_name}
  </div>);
};
