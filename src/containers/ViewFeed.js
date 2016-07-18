import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as API from '../utils/api';
import _ from 'lodash';
import FeedList from '../components/FeedList';
import FeedDetails from '../components/FeedDetails';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import * as FeedActions from '../actions/feed';
import {routerActions} from 'react-router-redux';

class ViewFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {feed} = this.props;

    if (feed.isLoading) {
      return <CircularProgress />
    }

    const feedDetails = {
      details: _.omit(feed.load, 'entries'),
      items: feed.load.entries
    }

    return <div className="view-feed">
      <FeedDetails details={feedDetails.details} routerActions={this.props.routerActions} />
      <FeedList items={feedDetails.items} hideInternalLink={true}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewFeed)
