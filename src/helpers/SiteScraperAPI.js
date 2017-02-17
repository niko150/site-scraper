import request from 'superagent';
import {SCRAPER_API_URL} from '../../tools/config';


class SiteScraperAPI {



  static getAllSites(query = {}) {

    return request.get(SCRAPER_API_URL + '/sites/').query(query);

  }

  static addSite(site) {

    return request.post(SCRAPER_API_URL + '/sites/').send(site);

  }

  static getSite(site_id) {

    return request.get(SCRAPER_API_URL + '/sites/' + site_id);

  }

}

export default SiteScraperAPI;
