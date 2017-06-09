import { expect } from 'chai';
//types
import { SEARCH_ALBUMS, GET_ALBUM_DETAILS  } from '../../src/actions/index';
//actions
import { searchForAlbum, getAlbumDetails } from '../../src/actions/index';


describe('Actions', () => {
  describe('searchForAlbum', () => {
    it('has the correct type', () => {
      const action = searchForAlbum();
      expect(action.type).to.equal( SEARCH_ALBUMS );
    });
  });
});