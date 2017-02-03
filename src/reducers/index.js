import {combineReducers} from 'redux';
import sites from './siteReducer';
import sites_in_process from './siteBeingProcessedReducer';
import ajaxCallsInProgress from './ajaxStatueReducer';
import filterReducer from './filtersReducer';

const rootReducer = combineReducers({
  sites,
  ajaxCallsInProgress,
  filters:filterReducer,
  sites_in_process
});

export default rootReducer;
