import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as API from '../utils/api'
import FeedList from '../components/FeedList';
import {routerActions} from 'react-router-redux';
import * as FeedActions from '../actions/feed';
import CircularProgress from 'material-ui/CircularProgress';
import _ from 'lodash';

import Search from '../components/Search';

class FeedPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {feed} = this.props;

    return <div className="feed-page">
      <Search {...this.props} />
      {_.isEmpty(feed)
          ? this._renderEmpty()
          : feed.isLoading
              ? this._renderLoading()
              : this._renderContent()}
    </div>
  }

  _renderLoading() {
    return <CircularProgress />
  }

  _renderEmpty() {
    return <small>Please search for something.</small>
  }

  _renderContent() {
    return <div>
      <h2>Feed results for {this.props.location.query.q}</h2>
      <FeedList items={this.props.feed.find} />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    feed: state.feed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    feedActions: bindActionCreators(FeedActions, dispatch),
    routerActions: bindActionCreators(routerActions, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
