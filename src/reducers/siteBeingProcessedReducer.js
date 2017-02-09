import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sitesBeingProcessedReducer(state = initialState.site_in_process, action) {



  if(action.type === types.ADDED_SITE_SUCCESS) {

    return action.site;

  } else if (action.type == types.PROCESSED_SITE_ERROR || action.type == types.PROCESSED_SITE_SUCCESSFUL) {

    return false;

  }

  return state;



}
