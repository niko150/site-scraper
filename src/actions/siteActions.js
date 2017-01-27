import * as types from './actionTypes';
import SiteScraperAPI from '../helpers/SiteScraperAPI';


export function addSite(site) {
  return {
    type: types.ADD_SITE,
    site
  }
}

export function loadSitesSuccess(sites) {
  return {
    type: types.LOAD_SITES_SUCCESS,
    sites
  }
}

export function loadSites() {
  return function (dispatch) {
    return SiteScraperAPI.getAllSites().then(res => {
      let sites = res.body.data;
      dispatch(loadSitesSuccess(sites));
    });

  }
}
