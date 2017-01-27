import {combineReducers} from 'redux';
import sites from './siteReducer';
import ajaxCallsInProgress from './ajaxStatueReducer';

const rootReducer = combineReducers({
  sites,
  ajaxCallsInProgress
});

export default rootReducer;
