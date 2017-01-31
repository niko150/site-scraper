import React from 'react';
import Layout from '../Layout/Layout';
import s from './AddSite.css';
import AddSiteForm from './AddSiteForm';
import {connect} from 'react-redux';
import * as siteActions from '../../src/actions/siteActions';
import {bindActionCreators} from 'redux';
import {Snackbar} from 'react-mdl';

class AddSite extends React.Component {

  constructor(props, context) {

    super(props, context);

    this.state = {
      site: Object.assign({}, this.props.site),
      errors: {},
      saving: false,
      isToastActive: false
    };

    this.updateSiteState = this.updateSiteState.bind(this);
    this.addSite = this.addSite.bind(this);


  }

  /**
   *
   * @param e
   */
  updateSiteState(e) {

    const field = e.target.name;

    let site = this.state.site;

    switch (e.target.type) {

      case 'checkbox':
        site[field] = e.target.checked;
        break;

      default:
        site[field] = e.target.value;

    }

    return this.setState({site: site});

  }

  addSite(e) {

    this.setState({saving: true});
    e.preventDefault();
    this.props.actions.addSite(this.state.site).then(() => {
      this.setState({saving: false});
      this.handleShowSnackbar();
    }).catch((error) => {
      this.setState({saving: false});
    })

  }

  render() {
    return (
      <section className={`${s.container}`}>
        <AddSiteForm
          onChange={this.updateSiteState}
          onSubmit={this.addSite}
          site={this.state.site}
          error={this.state.errors}
          saving={this.state.saving}

        />
      </section>
    );
  }

}

function mapStateToProps(state, ownProps) {
  let site = {
    url: '',
    entire_site: false
  };
  return {
    site: site
  }

}

function mapDispatchToProps(dispatch) {


  return {
    actions: bindActionCreators(siteActions, dispatch)
  }

}


export default connect(mapStateToProps,mapDispatchToProps)(AddSite);
