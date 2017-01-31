import React, {PropTypes} from 'react';
import Perpage from './Perpage';

import {connect} from 'react-redux';
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

        this.updateFiltersState = this.updateFiltersState.bind(this);

    }

    updateFiltersState(e) {

      const field = e.target.name;
      console.log(field);
      console.log(e.target.value);

    }

    render() {
        return (

          <section>
            <Perpage onChange={this.updateFiltersState}/>
          </section>

        );
    }

}

function mapStateToProps(state, ownProps) {

    return {}

}

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(actions, dispatch)
    }

}

export default connect(mapStateToProps)(Filters);
