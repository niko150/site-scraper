import React from 'react';
import Layout from '../../../components/Layout';
import s from './styles.css';
import AddSiteForm from '../../../components/AddSiteForm/AddSiteForm';
import {connect} from 'react-redux';
import * as siteActions from '../../actions/siteActions';
import {bindActionCreators} from 'redux';

class AddPage extends React.Component {

  constructor(props, context) {

    super(props, context);

    this.state = {
      site: Object.assign({}, this.props.site),
      errors: {}
    };

    this.updateSiteState = this.updateSiteState.bind(this);

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

  render() {
    return (
      <Layout className={s.content}>

        <AddSiteForm
          onChange={this.updateSiteState}
          site={this.state.site}
          error={this.state.errors}
        />

      </Layout>
    );
  }

}

function mapStateToProps(state, ownProps) {
  let site = {
    url: '',
    entire_site: true
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


export default connect(mapStateToProps,mapDispatchToProps)(AddPage);
