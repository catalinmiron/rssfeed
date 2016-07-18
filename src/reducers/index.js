import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import feed from './feed';


const rootReducer = combineReducers({
  routing,
  feed,
});


export default rootReducer;
