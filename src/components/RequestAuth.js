import React from 'react';
import connection from '../tools/SpotifyConnection';

const RequestAuth = () => {
  let url = connection.getAuthUrl();

  return (
    <div className="centre-button">
      <a href={url}>Authenticate with spotify</a>
    </div>
  );
}

export default RequestAuth;
