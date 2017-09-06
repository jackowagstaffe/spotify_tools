import React from 'react';

const ResultItem = props => {
  let artists = '';
  for (let i = 0; i < props.result.artists.length; i++) {
    artists += ' ' + props.result.artists[i].name + ',';
  }
  return (<div className="result-item">
    {props.result.name} - <span className="secondary">{artists}</span>
  </div>);
};

export default ResultItem;
