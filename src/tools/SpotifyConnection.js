import queryString from 'query-string';

class Connection {
  constructor() {
    this.clientId = '0ea4dab611da40cea8d888db992c25d2';
    this.authUrl = 'https://accounts.spotify.com/authorize';

  }
  getAuthUrl() {
    return this.authUrl + queryString.stringify({
      client_id: this.clientId,
      response_type: 'token',
      redirect_uri: process.env.PUBLIC_URL,
      scope: 'playlist-read-private playlist-modify-public playlist-modify-private',
    });
  }
  getAuthTokenData() {
    return queryString.parse(window.location.hash);
  }
}

let c = new Connection();

export default c;
