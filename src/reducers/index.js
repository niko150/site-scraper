import {combineReducers} from 'redux';
import sites from './siteReducer';
import ajaxCallsInProgress from './ajaxStatueReducer';
import filterReducer from './filtersReducer';

const rootReducer = combineReducers({
  sites,
  ajaxCallsInProgress,
  filters:filterReducer
});

export default rootReducer;
