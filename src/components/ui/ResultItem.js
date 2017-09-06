import React from 'react';

const ResultItem = props => {
  let artists = '';
  for (let i = 0; i < props.result.artists.length; i++) {
    artists += ' ' + props.result.artists[i].name + ',';
  }
  return (<tr>
    <td>{props.result.name}</td><td className="secondary">{artists}</td>
  </tr>);
};

export default ResultItem;
