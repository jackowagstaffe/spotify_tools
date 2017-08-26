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
      this.token = query.access_token;
      this.expires = query.expires_in;
      this.tokenType = query.token_type;

      // After the token expiry period redirect back to the auth page.
      setTimeout(() => {
        window.location = this.getAuthUrl();
      }, (query.expires_in - 1) * 1000);

      return true;
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
    const path = '/v1/users/' + userId + '/playlists';

    let data = [];

    return this.getPlaylistItems(
      data,
      this.baseUrl + path + '?access_token=' + this.token
    );
  }

  getPlaylistItems(data, next)
  {
    return fetch(next + '&access_token=' + this.token).then(response => {
      this.handleExpiredToken(response);
      if (response.status === 200) {
        return response.json().then(response => {
          data = data.concat(response.items);

          if (response.next) {
            return this.getPlaylistItems(data, response.next);
          }

          return data;
        });
      }

      return null;
    });
  }

  makeGetRequest(path, options = {})
  {
    options = Object.assign({}, options, {
      'access_token': this.token,
    });

    return fetch(this.baseUrl + path + '?' + queryString.stringify(options))
      .then(response => {
        this.handleExpiredToken(response);
        return response;
      });
  }

  handleExpiredToken(response){
    if (response.status === 401) {
      window.location = this.getAuthUrl();
    }
  }
}

let c = new Connection();

export default c;
