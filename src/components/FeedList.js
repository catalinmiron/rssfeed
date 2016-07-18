import React from 'react';
import FeedItem from './FeedItem';

const styles = {
  feedList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  feedItem: {
    marginBottom: 20
  }
}

const FeedList = (feedList) => {
  return <div className="feed-list" style={styles.feedList}>
    {feedList.items.map((item, index) =>
      <FeedItem {...item} key={index} hideInternalLink={!!feedList.hideInternalLink}/>
    )}
  </div>
}


export default FeedList;
