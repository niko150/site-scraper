import * as types from './actionTypes';

export function updateFilters(filters) {

  return {
    type: types.UPDATED_SITE_FILTERS,
    filters
  }
}

