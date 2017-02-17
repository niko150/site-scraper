import React, {PropTypes} from 'react';
import s from './Site.css';

const Site = ({site}) =>  {

  const divStyle = {
    backgroundImage: 'url(' + site.base_path + site.screenshot + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const formatData = dateStr => {

    let date = new Date(dateStr);

    return (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

  };
  return (

        <section className={`section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp ${s.card}`}>
          <header style={divStyle} className="mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">

          </header>
          <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
            <div className="mdl-card__supporting-text">
              <h5>{site.title}</h5>
              <p>URL: {site.url}</p>
              <p>Created: {formatData(site.created_at)}</p>
            </div>
            <div className="mdl-card__actions">
              <a href={site.base_path + site.directory + 'www/index.html'} target="_blank" className="mdl-button">View Site</a>
              <a href={site.base_path + site.directory + 'archive/site.zip'} target="_blank" className="mdl-button">Download Site</a>
            </div>
          </div>

        </section>

    );

};

Site.propTypes = {
  site: PropTypes.object.isRequired
};

export default Site;
