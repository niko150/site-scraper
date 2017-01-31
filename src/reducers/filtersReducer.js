import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function filterReducer(state = initialState.filters, action) {


  if(action.type === types.FILTER_API_DATA) {

    return state;

  }

  return state;
}
