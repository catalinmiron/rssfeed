import React from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const FeedDetails = (feed) => {
  const {details, routerActions} = feed;
  const styles = {
    containerStyle: {
      marginBottom: 20,
      background: '#09c',
    }
  };

  return <Card containerStyle={ styles.containerStyle }>
    <CardTitle
      title={details.title}
      titleColor='#fff'
      subtitle={details.url}
      subtitleColor='#fff'
    />
    <CardText color='#fff'>
      {details.description}
    </CardText>
    <CardActions>
      <RaisedButton label='Go back' onClick={() => routerActions.goBack()} />
      <RaisedButton label='View the page' href={details.link} />
    </CardActions>
  </Card>;
}


export default FeedDetails;
