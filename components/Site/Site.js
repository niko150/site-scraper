import React from 'react';
import Link from '../Link';
import s from './Site.css';

class Site extends React.Component {

  componentDidMount() {

    window.componentHandler.upgradeElement(this.root);

  }

  componentWillUnmount() {

    window.componentHandler.downgradeElements(this.root);

  }

  render() {
    return (
        <section className={`section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp ${s.card}`} ref={node => (this.root = node)}>
          <header className="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">

          </header>
          <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
            <div className="mdl-card__supporting-text">
              <h5>{this.props.url}</h5>
              <p>Created: {this.props.created_at}</p>
            </div>
            <div className="mdl-card__actions">
              <a href="#" className="mdl-button">View Site</a>
              <a href="#" className="mdl-button">Download</a>
            </div>
          </div>

        </section>

    );
  }

}

export default Site;
