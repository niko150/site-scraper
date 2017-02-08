import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import Footer from '../Footer';
import s from './Layout.css';
import {connect} from 'react-redux';
import {updateFilters} from '../../src/actions/filterActions';
import {loadSites} from '../../src/actions/siteActions';
import history from '../../src/history';
import {debounce} from 'throttle-debounce';
import {bindActionCreators} from 'redux';


class Layout extends React.Component {

  constructor(props, context) {

    super(props, context);

    this.state = {
      filters: Object.assign({}, this.props.filters),
      searching: false
    };

    this.updateFiltersState = debounce(500,this.updateFiltersState);


  }
  static propTypes = {
    className: PropTypes.string,
  };

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

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {

    return (
      <div className="mdl-layout mdl-js-layout" ref={node => (this.root = node)}>
        <div className="mdl-layout__inner-container">
          <Header show_progress_bar={this.props.show_progress_bar} onChange={this.handleChange}/>
          <main className={`mdl-layout__content ${s.main}`}>
            {this.props.children}
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {


  return {
    actions: bindActionCreators({loadSites,updateFilters}, dispatch)
  }

}


function mapStateToProps(state, ownProps) {

  return {

    show_progress_bar: state.ajaxCallsInProgress > 0 || !!state.site_in_process,
    filters: state.filters

  };

}
export default connect(mapStateToProps,mapDispatchToProps)(Layout);
