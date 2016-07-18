import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';


const Main = ({ children }) => (
  <div>
    {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.any.isRequired,
};


export default Main;
