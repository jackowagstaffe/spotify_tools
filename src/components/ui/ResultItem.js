import React from 'react';

const ResultItem = props => {
  console.log(props.result);
  return (<div className="result-item">
    {props.result.name} - <span className="secondary">{props.result.artists[0].name}</span>
  </div>);
};

export default ResultItem;
