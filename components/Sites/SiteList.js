import React, {PropTypes} from 'react';
import Site from './Site';

const SitesList = ({sites}) => {

  return (

    <section>
      {sites.map(site =>
        <Site key={site.id} site={site}/>
      )}
    </section>

  );

};


SitesList.propTypes = {
  sites: PropTypes.array.isRequired
};

export default SitesList;
