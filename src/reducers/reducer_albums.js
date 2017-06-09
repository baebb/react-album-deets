import { SEARCH_ALBUMS, GET_ALBUM_DETAILS } from '../actions/index';

const INIT_STATE = { searchResults: [], searchAttempted: false, currentAlbum: {}, currentAlbumTracks: [] };

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case SEARCH_ALBUMS:
      return {
        ...state,
        searchAttempted: true,
        searchResults: action.payload.data.results
      };
    case GET_ALBUM_DETAILS:
      return {
        ...state,
        currentAlbum: action.payload.data.results[0],
        currentAlbumTracks: (action.payload.data.results).slice(1)
      };
    default:
      return state;
  }
}