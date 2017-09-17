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

    return this.makeGetRequest(this.baseUrl + path);
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

  getPlaylist(url) {
    return this.makeGetRequest(url).then(response => {
      if (response.status === 200) {
        return response.json().then(response => {
          let result = {
            images: response.images,
            name: response.name,
            id: response.id,
            tracks: [],
          };

          for (let i = 0; i < response.tracks.items.length; i++) {
            result.tracks.push(response.tracks.items[i].track);
          }

          if (response.tracks.next) {
            return this.getPlaylistPart(result, response.tracks.next);
          }

          return result;
        });
      }
    });
  }

  getPlaylistPart(result, next) {
    return this.makeGetRequest(next).then(response => {
      if (response.status === 200) {
        return response.json().then(response => {
          for (let i = 0; i < response.items.length; i++) {
            result.tracks.push(response.items[i].track);
          }

          if (response.next) {
            return this.getPlaylistPart(result, response.next);
          }

          return result;
        });
      }

      return null;
    });
  }

  createPlaylist(userId, name, tracks) {
    // Create the playlist
    const data = {
      name,
    };

    // Transform tracks
    tracks = tracks.map(track => track.uri);

    return fetch(
      `${this.baseUrl}/v1/users/${userId}/playlists?access_token=${this.token}`,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    ).then(response => {
      if (response.status === 201) {
        return response.json().then(response => {
          while (tracks.length > 0) {
            fetch(
              `${response.href}/tracks?access_token=${this.token}`,
              {
                method: 'POST',
                body: JSON.stringify({
                  uris: tracks.splice(0, 100),
                }),
              }
            );
          }
        });
      }

      return;
    });
  }

  makeGetRequest(path, options = {})
  {
    options = Object.assign({}, options, {
      'access_token': this.token,
    });

    // Append to the query string if there aready is one.
    let divider = '?';
    if (path.indexOf('?') >= 0) {
      divider = '&';
    }

    return fetch(path + divider + queryString.stringify(options))
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
