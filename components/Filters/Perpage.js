import React, {PropTypes} from 'react';
import {IconButton, Menu, MenuItem} from 'react-mdl';
import s from './styles.css';

const Perpage = ({onChange, values}) => {

    return (
      <div>

        <IconButton name="format_list_numbered" id="demo-menu-lower-left" />
        <p className={`${s.per_page_text}`}>Per Page</p>
        <select name="__count" onChange={onChange}>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>

      </div>
    );

};

export default Perpage;
