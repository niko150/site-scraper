
import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';
import {Grid, Cell, ProgressBar, Textfield} from 'react-mdl';

const Header  = ({show_progress_bar, onChange}) => {

  return (
    <section>
      {show_progress_bar &&
      <Grid noSpacing>
        <Cell col={12}>
          <ProgressBar indeterminate className={`${s.loading_bar}`}/>
        </Cell>
      </Grid>
      }
      <header className={`mdl-layout__header ${s.header}`}>

        <div className={`mdl-layout__header-row ${s.row}`}>
          <Link className={`mdl-layout-title ${s.title}`} to="/">
            Website Scraper
          </Link>
          <div className="mdl-layout-spacer"></div>
          <Textfield
            name="url__contains"
            onChange={onChange}
            label="Search"
            expandable
            expandableIcon="search"
          />
        </div>
      </header>
    </section>
  );


};

export default Header;
