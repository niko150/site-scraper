import React, {PropTypes} from 'react';
import {Textfield} from 'react-mdl';

const TextSearch = ({onChange, className}) => {

    return (
      <Textfield
        onChange={onChange}
        label="Search"
        className={className}
        name="url__contains"

      />
    );
};

export default TextSearch;
