import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function filterReducer(state = initialState.filters, action) {

  if(action.type === types.UPDATED_SITE_FILTERS) {

    return Object.assign({}, action.filters);

  }

  return state;
}
