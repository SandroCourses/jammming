const clientId = 'aaea42675577470497fcca3d1f79706f';
const redirectUri = 'http://localhost:3000';
const responseType = 'token';
const scope = 'playlist-modify-public';
const showDialog = false;
const authorizationUrl = `https://accounts.spotify.com/authorize/?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&show_dialog=${showDialog}`;

const Spotify = {
  _accessToken: null,
  _expirationTimeInMs: null,
  get accessToken() {
    return this._accessToken;
  },
  set accessToken(newAccessToken) {
    if(typeof newAccessToken === 'string') {
      this._accessToken = newAccessToken;
    }
  },
  get expirationTimeInMs() {
    return this._expirationTimeInMs;
  },
  set expirationTimeInMs(newExpirationTimeInMs) {
    if(typeof newExpirationTimeInMs === 'number') {
      this._expirationTimeInMs = newExpirationTimeInMs;
    }
  },
  checkQueryParameters(href) {
    if(!this.accessToken || !this.expirationTime) {
      const accessTokenArray = href.match(/access_token=([^&]*)/);
      const expiresInArray = href.match(/expires_in=([^&]*)/);
      window.history.pushState('Access Token', null, '/');

      if(accessTokenArray && expiresInArray) {
        const accessToken = accessTokenArray[1];
        const expiresIn = expiresInArray[1];

        this.setSpotifyProperties(accessToken, expiresIn);
      }
    }
  },
  setSpotifyProperties(accessToken, expiresIn) {
    if(accessToken && expiresIn) {
      this.accessToken = accessToken;

      const now = Date.now();
      const expirationTime = new Date(now + (parseInt(expiresIn, 10) * 1000));
      const expirationTimeInMs = expirationTime.getTime();
      this.expirationTimeInMs = expirationTimeInMs;
    }
  },
  search(searchInput) {
    if(!this.accessToken || !this.expirationTimeInMs) {
      window.location.href = authorizationUrl;
    } else if(Date.now() > this.expirationTimeInMs) {
      window.location.href = authorizationUrl;
    } else {
      if(searchInput) {
        const searchUrl = `https://api.spotify.com/v1/search?q=${searchInput}&type=album,artist,track`;

        return fetch(searchUrl, {
          headers: {
            'Authorization': 'Bearer ' + Spotify.accessToken
          }
        }).then(response => {
          if(response.ok) {
            return response.json();
          }
          throw new Error('request failed');
        }, networkError => console.log(networkError.message)).then(jsonResponse => {
          return jsonResponse.tracks.items.map(track => {
            return {
              id: track.id,
              title: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              uri: track.uri
            };
          });
        });
      }
    }
  },
  getUserId() {
    if(this.accessToken && this.expirationTimeInMs) {
      if(Date.now() <= this.expirationTimeInMs) {
        return fetch('https://api.spotify.com/v1/me', {
          headers: {
            'Authorization': 'Bearer ' + this.accessToken
          }
        }).then(response => {
          if(response.ok) {
            return response.json();
          }

          throw new Error('request failed');
        }, networkError => console.log(networkError.message)).then(jsonResponse => {
          return jsonResponse.id;
        });
      }
    }
  },
  createPlaylist(userId, name) {
    if(this.accessToken && this.expirationTimeInMs) {
      if(Date.now() <= this.expirationTimeInMs) {
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          method: 'POST',
          body: JSON.stringify({
            name: name,
            public: true,
            collaborative: false
          }),
          headers: {
            'Authorization': 'Bearer ' + this.accessToken,
            'Content-Type': 'application/json'
          }
        }).then(response => {
          if(response.ok) {
            return response.json();
          }

          throw new Error('request failed');
        }, networkError => console.log(networkError.message)).then(jsonResponse => {
          return jsonResponse.id;
        });
      }
    }
  },
  addTracksToPlayList(userId, playlistId, uris) {
    if(this.accessToken && this.expirationTimeInMs) {
      if(Date.now() <= this.expirationTimeInMs) {
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          method: 'POST',
          body: JSON.stringify({
            uris: uris
          }),
          headers: {
            'Authorization': 'Bearer ' + this.accessToken,
            'Content-Type': 'application/json'
          }
        }).then(response => {
          if(response.ok) {
            return response.json();
          }

          throw new Error('request failed');
        }, networkError => console.log(networkError.message)).then(jsonResponse => {
          return jsonResponse;
        });
      }
    }
  }
};

export default Spotify;
