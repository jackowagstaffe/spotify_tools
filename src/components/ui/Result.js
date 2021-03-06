import React from 'react';
import ResultItem from './ResultItem';

const Result = props => {
  let results = [];
  for (let i = 0; i < props.results.length; i++) {
    results.push(<ResultItem key={props.results[i].id} result={props.results[i]} />);
  }
  return (<div className="result">
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
        </tr>
      </thead>
      <tbody>
        {results}
      </tbody>
    </table>
  </div>);
};

export default Result;
