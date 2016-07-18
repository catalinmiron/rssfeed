import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Link} from 'react-router';

const FeedItem = (item) => {
  return <Card containerStyle={{marginBottom: 20}} style={{width: '32%', margin:0, marginBottom: 20}}>
    <CardTitle>
      <h3 dangerouslySetInnerHTML={{__html: item.title}}></h3>
    </CardTitle>
    <CardText>
      <p dangerouslySetInnerHTML={{__html: item.contentSnippet}}></p>
    </CardText>
    <CardActions>
      {!item.hideInternalLink ?
        <Link to={`/view/${encodeURIComponent(item.url)}`}>
          <FlatButton label='View' />
        </Link> : null}
      <FlatButton label='External Link' href={item.link} />
    </CardActions>
  </Card>
}



export default FeedItem;
