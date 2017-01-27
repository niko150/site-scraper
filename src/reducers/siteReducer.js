import * as types from '../actions/actionTypes';

export default function siteReducer(state = [], action) {

  switch (action.type) {

    case types.ADD_SITE:

      return [...state,
        Object.assign({}, action.site)
      ];

    case types.LOAD_SITES_SUCCESS:
      return action.sites;

    default:
      return state;

  }

}
