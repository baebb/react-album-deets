import { expect } from 'chai';
//types
import { SEARCH_ALBUMS, GET_ALBUM_DETAILS } from '../../src/actions/index';
//reducers
import albumsReducer from '../../src/reducers/reducer_albums';

const INIT_STATE = { searchResults: [], searchAttempted: false, currentAlbum: {}, currentAlbumTracks: [] };

describe('Reducers', () => {
  describe('albumsReducer', () => {
    let action;
    it('handles action with unknown type', () => {
      action = { type: 'UNKNOWN_TYPE', payload: 'cat' };
      expect(albumsReducer(INIT_STATE, action)).to.eql(INIT_STATE);
    });

    it('handles action of type STORE_QUERY', () => {
      action = { type: 'SEARCH_ALBUMS', payload: {
        data: {
          results: ['testAlbum1', 'testAlbum2']
        }
      } };
      expect(albumsReducer(INIT_STATE, action)).to.eql(
        { searchResults: ['testAlbum1', 'testAlbum2'], searchAttempted: true, currentAlbum: {}, currentAlbumTracks: [] }
      );
    });
  });
});