

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import Site from '../../components/Site/Site';

class HomePage extends React.Component {

  static propTypes = {

    // sites: PropTypes.object.isRequired,

  };

  componentDidMount() {
    console.log(this.props.sites);
    document.title = title;

  }

  render() {
    return (
      <Layout className={s.content}>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        {/*{this.props.sites.data.map((site, i) =>*/}
          {/*<Site key={i} {...site} />*/}
        {/*)}*/}
        <p>
          <br /><br />
        </p>

      </Layout>
    );
  }

}

export default HomePage;
