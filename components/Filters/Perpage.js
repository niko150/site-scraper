import React, {PropTypes} from 'react';
import {IconButton, Menu, MenuItem} from 'react-mdl';
import s from './styles.css';

const Perpage = ({onChange, className}) => {

    return (
      <div className="mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label">
        <select onChange={onChange} className="mdl-selectfield__select" name="__count">
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
        <label className="mdl-selectfield__label" htmlFor="__count">Number of results</label>
      </div>
    );

};

export default Perpage;
