import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import FeedPage from './containers/FeedPage';
import ViewFeed from './containers/ViewFeed';
import NotFoundPage from './containers/NotFoundPage';
import {bindActionCreators} from 'redux'
import * as FeedActions from './actions/feed'

export default function(store) {
  const feedActions = bindActionCreators(FeedActions, store.dispatch);

  const getSearch = nextState => {
    const query = nextState.location ? nextState.location.query : null;
    if (query.q) {
      feedActions.fetchFeed('find', query.q);
    }
  };
  const getFeedView = nextState => {
    if (nextState.params.url) {
      feedActions.fetchFeed('load', nextState.params.url);
    }
  }

  return <Route component={App}>
    <Route path="/" component={FeedPage} onEnter={getSearch}/>
    <Route path="/view/:url" component={ViewFeed} onEnter={getFeedView}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
}
