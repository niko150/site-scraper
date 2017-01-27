import React, { PropTypes } from 'react';
import Layout from '../../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import Sites from '../../../components/Sites/SiteList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as siteActions from '../../actions/siteActions';
import AddSite from '../../../components/AddSite/AddSite';

class HomePage extends React.Component {

  // static propTypes = {
  //
  //     sites: PropTypes.array.isRequired,
  //
  // };

  /**
   * Setup state and bind other functions
   *
   * @param props
   * @param context
   */
  constructor(props, context) {

    super(props, context);

    this.state = {
      site: {
        url: "Edgar Pino", recursive: false
      }
    };

  }

  componentDidMount() {
    // document.title = title;
  }

  render() {
    const {sites} = this.props;
    return (
      <Layout className={s.content}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <AddSite />
        <Sites sites={sites}/>


      </Layout>
    );
  }

}

function mapStateToProps(state, ownProps) {

  return {
    sites: state.sites
  }

}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators(siteActions, dispatch)
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
