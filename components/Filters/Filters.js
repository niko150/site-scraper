import React, {PropTypes} from 'react';
import Perpage from './Perpage';
import TextSearch from './TextSearch';
import {Grid, Cell} from 'react-mdl';
import s from './styles.css';
import {connect} from 'react-redux';
import {loadSites} from '../../src/actions/siteActions';
import {updateFilters} from '../../src/actions/filterActions';
import {debounce} from 'throttle-debounce';
import history from '../../src/history';

import {bindActionCreators} from 'redux';

class Filters extends React.Component {

  /**
   * Validation
   *
   * @type {{actions: *}}
   */
  static propTypes = {};

  /**
   * Setup state and bind other functions
   *
   * @param props
   * @param context
   */
  constructor(props, context) {

    super(props, context);

    this.state = {
      filters: Object.assign({}, this.props.filters),
      searching: false
    };

    this.updateFiltersState = debounce(500,this.updateFiltersState);

  }

  updateFiltersState(e) {


    const field = e.target.name;
    let filters = this.state.filters;

    filters[field] = e.target.value;

    this.setState({
      filters
    });

    this.props.actions.updateFilters(this.state.filters);
    this.props.actions.loadSites().then((data) => {
      let query = this.encodeQueryToURI(this.state.filters);
      let pathname = history.location.pathname;


      history.push({
        pathname: pathname,
        search: query,
      });

    });

  }

  encodeQueryToURI(query) {

    return Object.keys(query).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(query[key]);
    }).join('&');

  }

  handleChange = e => {
    // React event weirdness requires storing
    // the synthetic event
    e.persist();
    this.updateFiltersState(e);

  };

  render() {
    return (
      <section className={`search_form ${s.container}`}>
        <Grid noSpacing>

          <Cell col={7} >
            <TextSearch onChange={this.handleChange} className={`${s.search_box}`}/>
          </Cell>

          <Cell col={4} offset={1} align="middle">
            <Perpage onChange={this.handleChange} />
          </Cell>

        </Grid>
      </section>


    );
  }

}

function mapStateToProps(state, ownProps) {

  return {
    filters: state.filters
  }

}

function mapDispatchToProps(dispatch) {


  return {
    actions: bindActionCreators({loadSites,updateFilters}, dispatch)
  }

}


export default connect(mapStateToProps,mapDispatchToProps)(Filters);
