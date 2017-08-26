import React from 'react';

export default props => {
  function onChange(event) {
    props.onChange(event.target.value);
  }
  return (<label htmlFor={props.id} className="search-box">
    <span className="sr-only">Search</span>
    <input id={props.id} placeholder="search" onChange={onChange} type="text" />
  </label>);
};
