import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TextField
      hintText="reactjs"
      floatingLabelText="Search feed"
      defaultValue={this.props.location.query.q}
      style={{width: '100%', fontSize: 18}}
      onChange={(event) => {
        this.setState({
          searchText: event.target.value
        })
      }}
      onKeyDown={(e) => {
        if(e.keyCode === 13) {
          if(this.state.searchText === "") {
            return;
          }
          this.props.routerActions.replace(`/?q=${this.state.searchText}`);
          this.props.feedActions.fetchFeed('find', this.state.searchText);
        }
      }}
    />
  }
}

export default Search;
