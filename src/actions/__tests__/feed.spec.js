/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy, stub } from 'sinon';
import * as actions from '../feed';
import * as API from '../../utils/api';


describe('feed actions', () => {
  let api; let response; let dispatch;
  beforeEach(() => {
    api = stub(API, 'getFeed').returns([1, 2, 3, 4]);
    dispatch = spy();
    response = [1, 2, 3, 4];
  });

  afterEach(() => {
    api.restore();
  });

  it('should request feed', () => {
    expect(actions.requestFeed()).to.deep.equal({ type: 'requestFeed' });
  });

  it('should receive feed', () => {
    expect(actions.receiveFeed(response, 'find')).to.deep.equal({
      type: 'receiveFeed',
      response,
      feedType: 'find',
    });
  });

  it('should request feed with specified params', () => {
    const fn = actions.fetchFeed('find', 'reactjs');
    expect(fn).to.be.a('function');
    fn(dispatch);

    expect(dispatch).to.have.been.calledWith({ type: 'requestFeed' });
    expect(API.getFeed).to.have.been.calledOnce;
  });

  it('should call API getFeed with params', () => {
    const fn = actions.fetchFeed('find', 'reactjs');
    fn(dispatch);

    expect(API.getFeed).to.have.been.calledWith('find', 'reactjs');
  });

  it('should do something nive', (done) => {
    const fn = actions.fetchFeed('find', 'reactjs');
    api.yields('success', response);

    fn(dispatch);

    setTimeout(() => {
      expect(dispatch).to.have.been.calledWith({
        type: 'receiveFeed',
        response,
        feedType: 'find',
      });
      done();
    }, 1);
  });
});
