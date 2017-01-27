import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import Footer from '../Footer';
import s from './Layout.css';
import {connect} from 'react-redux';

class Layout extends React.Component {

  constructor(props, context) {

    super(props, context);


  }
  static propTypes = {
    className: PropTypes.string,
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
          <Header loading={this.props.loading}/>
          <main className={`mdl-layout__content ${s.main}`}>
            {this.props.children}
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    loading: state.ajaxCallsInProgress > 0
  };

}
export default connect(mapStateToProps)(Layout);
