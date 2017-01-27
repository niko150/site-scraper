import React from 'react';
import Layout from '../../../components/Layout';
import s from './styles.css';
import AddForm from '../../../components/AddSiteForm/AddForm';

class AddPage extends React.Component {




  render() {
    return (
      <Layout className={s.content}>

        <AddForm/>

      </Layout>
    );
  }

}

export default AddPage;
