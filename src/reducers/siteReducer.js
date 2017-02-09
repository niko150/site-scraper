import * as types from '../actions/actionTypes';

export default function siteReducer(state = [], action) {

  switch (action.type) {

    case types.LOAD_SITES_SUCCESS:

      return action.sites;

    default:
      return state;

  }

}


