/* eslint-disable no-unused-vars */
import createReducer from '../utils/createReducer';

const initialState = {};

const counter = createReducer(initialState, {
  requestFeed(state) {
    return Object.assign({}, state, {
      isLoading: true
    });
  },
  receiveFeed(state, action) {
    return Object.assign({}, state, {
      isLoading: false,
      [action.feedType]: action.response
    })
  }
});


export default counter;
