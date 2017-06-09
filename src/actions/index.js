import axios from 'axios';

const ROOT_URL = 'https://itunes.apple.com';

export const
  SEARCH_ALBUMS = 'SEARCH_ALBUMS',
  GET_ALBUM_DETAILS = 'GET_ALBUM_DETAILS';

export function searchForAlbum(string) {
  const url = `${ROOT_URL}/search?entity=album&attribute=albumTerm&limit=25&term=${string}`;
  const request = axios.get(url);
  
  return {
    type: SEARCH_ALBUMS,
    payload: request
  }
}

export function getAlbumDetails(albumId) {
  const url = `${ROOT_URL}/lookup?entity=song&id=${albumId}`;
  const request = axios.get(url);

  return {
    type: GET_ALBUM_DETAILS,
    payload: request
  }
}