import React from 'react';

const SearchProps = props => {
  function onChange(event) {
    props.onChange(event.target.value);
  }
  return (<label htmlFor={props.id} className="search-box">
    <span className="sr-only">Search</span>
    <input id={props.id} value={props.value} placeholder="search" onChange={onChange} type="text" />
  </label>);
};

SearchProps.defaultProps = {
  value: '',
};

export default SearchProps;
