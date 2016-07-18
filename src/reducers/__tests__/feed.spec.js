import { expect } from 'chai';
import feed from '../feed';


describe('reducers', () => {
  describe('feed', () => {
    it('should handle initial state', () => {
      expect(feed(undefined, {})).to.deep.equal({});
    });

    it('should handle requestFeed', () => {
      expect(feed({}, { type: 'requestFeed' })).to.deep.equal({
        isLoading: true
      });
    });

    it('should handle receiveFeed for search', () => {
      expect(feed({isLoading: true}, {
        type: 'receiveFeed',
        feedType: 'find',
        response: [1,2,3]
      })).to.deep.equal({
        isLoading: false,
        find: [1,2,3]
      });
    });

    it('should handle receiveFeed for a load', () => {
      expect(feed({isLoading: true}, {
        type: 'receiveFeed',
        feedType: 'load',
        response: [1,2,3]
      })).to.deep.equal({
        isLoading: false,
        load: [1,2,3]
      });
    });

    it('should handle unknown action type', () => {
      expect(feed({isLoading: false}, { type: 'unknown' })).to.deep.equal({
        isLoading: false
      });
    });
  });
});
