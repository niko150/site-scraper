import React, {PropTypes} from 'react';
import s from './Site.css';
import {Spinner} from 'react-mdl';

const SitePreloader = () =>  {


  return (

        <section className={`section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp ${s.card}`}>
          <Spinner />

        </section>

    );

};

export default SitePreloader;
