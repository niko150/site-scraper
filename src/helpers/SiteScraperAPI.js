import request from 'superagent';

class SiteScraperAPI {


  static getAllSites(query = {}) {

    return request.get('http://localhost:8080/v1/sites/').query(query);

  }

  static addSite(site) {

    return request.post('http://localhost:8080/v1/sites/').send(site);

  }

}

export default SiteScraperAPI;
