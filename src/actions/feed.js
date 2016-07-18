import * as API from '../utils/api';

export const requestFeed = () => ({
  type: 'requestFeed',
});


export const receiveFeed = (response, feedType) => ({
  type: 'receiveFeed',
  response,
  feedType,
});

export function fetchFeed(type, query) {
  return dispatch => {
    dispatch(requestFeed());

    return API.getFeed(type, query, (err, response) => {
      if (err) {
        // implement error message
        // dispatch an action for error
      }
      dispatch(receiveFeed(response, type));
    });
  };
}
