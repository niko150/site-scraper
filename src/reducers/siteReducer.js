import * as types from '../actions/actionTypes';

export default function siteReducer(state = [], action) {

  switch (action.type) {

    case types.ADD_SITE:

      return [...state,
        Object.assign({}, action.site)
      ];

    default:
      return state;

  }

}
