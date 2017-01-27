import * as types from './actionTypes';

export function addSite(site) {

  return {
    type: types.ADD_SITE,
    site
  }

}
