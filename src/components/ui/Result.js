import React from 'react';
import ResultItem from './ResultItem';

const Result = props => {
  let results = [];
  console.log(props.results);
  for (let i = 0; i < props.results.length; i++) {
    results.push(<ResultItem key={props.results[i].id} result={props.results[i]} />);
  }
  return (<div className="result">
    {results}
  </div>);
};

export default Result;
