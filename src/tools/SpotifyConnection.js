import queryString from 'query-string';

class Connection {
  constructor() {
    this.clientId = '0ea4dab611da40cea8d888db992c25d2';
    this.authUrl = 'https://accounts.spotify.com/authorize';
    this.baseUrl = 'https://api.spotify.com';
    this.token = null;
    this.expires = null;
    this.tokenType = null;
  }
  getAuthUrl() {
    return this.authUrl + '?' + queryString.stringify({
      client_id: this.clientId,
      response_type: 'token',
      redirect_uri: 'http://127.0.0.1:3000',//process.env.PUBLIC_URL,
      scope: 'user-read-private playlist-read-private playlist-modify-public playlist-modify-private',
    });
  }
  getConnection() {
    let query =  queryString.parse(window.location.hash);
    if (query.access_token) {
      return query;
    }

    return false;
  }
  getMe()
  {
    const path = '/v1/me';

    return this.makeGetRequest(path);
  }
  getPlaylists(userId)
  {
    const path = '/v1/users/' + this.userId + '/playlists';

    return this.makeRequest(path);
  }

  makeGetRequest(path, options = {})
  {
    options = Object.assign({}, options, {
      'access_token': this.token,
    });

    return fetch(this.baseUrl + path + '?' + queryString.stringify(options));
  }
}

let c = new Connection();

export default c;
