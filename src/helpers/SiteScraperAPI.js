import request from 'superagent';

class SiteScraperAPI {


  static getAllSites() {

    return request.get('http://localhost:8080/v1/sites/');

  }

}

export default SiteScraperAPI;
