import React, {PropTypes} from 'react';
import s from './Site.css';

const Site = ({site}) =>  {

  return (

        <section className={`section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp ${s.card}`}>
          <header className="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">

          </header>
          <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
            <div className="mdl-card__supporting-text">
              <h5>{site.url}</h5>
              <p>Created: {site.created_at}</p>
            </div>
            <div className="mdl-card__actions">
              <a href="#" className="mdl-button">View Site</a>
              <a href="#" className="mdl-button">Download</a>
            </div>
          </div>

        </section>

    );

};

Site.propTypes = {
  site: PropTypes.object.isRequired
};

export default Site;
