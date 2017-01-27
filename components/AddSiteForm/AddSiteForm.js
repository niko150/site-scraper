import React, { PropTypes } from 'react';
import {Textfield, Grid, Cell,Checkbox, Button, ProgressBar} from 'react-mdl';
import layout_css from '../Layout/Layout.css';
import s from './AddSiteForm.css';
import {connect} from 'react-redux';

const AddSiteForm = ({site, onSubmit, onChange, loading, errors}) => {
  return (
    <section className={`section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp ${s.form}`}>

      <form className={`${layout_css.content}`} method="post" action="javascript:void(0)" onSubmit={onSubmit}>

        <Grid noSpacing>
          <Cell col={12}>
            <ProgressBar indeterminate />
          </Cell>
        </Grid>
        <Grid>
          <Cell col={2} />
          <Cell col={8}>
            <Grid noSpacing>
              <Cell col={10}>
                <Textfield label="URL to Scrape" value={site.url} name="url"  floatingLabel onChange={onChange} className={`${s.url_text}`}/>
              </Cell>
              <Cell col={1} align="middle" offset={1}>
                <Checkbox onChange={onChange} checked={site.entire_site} name="entire_site"  label="Recursive" ripple />
              </Cell>
              <Cell col={12}>
                <Button raised colored disabled={loading}>Scrape</Button>
              </Cell>

            </Grid>

          </Cell>
          <Cell col={2} />

        </Grid>

      </form>

    </section>

  );
};
//
// class AddForm extends React.Component {
//
//   /**
//    * Validation
//    *
//    * @type {{actions: *}}
//    */
//   static propTypes = {
//
//     actions: PropTypes.object.isRequired
//
//   };
//
//   /**
//    * Setup state and bind other functions
//    *
//    * @param props
//    * @param context
//    */
//   constructor(props, context) {
//
//     super(props,context);
//
//     this.state = {
//       site: {
//         url: "Edgar Pino", recursive: false
//       }
//     };
//
//     this.submitForm = this.submitForm.bind(this);
//     this.handleURLTextbox = this.handleURLTextbox.bind(this);
//     this.handleCheckbox = this.handleCheckbox.bind(this);
//
//   }
//
//   handleURLTextbox(e) {
//
//     this.setState({
//       site: {
//         ...this.state.site,
//         url: e.target.value
//       }
//     });
//
//   }
//
//   handleCheckbox(e) {
//     this.setState({
//       site: {
//         ...this.state.site,
//         recursive: e.target.checked
//       }
//     });
//
//
//   }
//
//   submitForm(event) {
//
//     const site = this.state.site;
//
//     this.props.actions.addSite(site);
//
//   }
//
//   componentDidMount() {
//
//     window.componentHandler.upgradeElement(this.root);
//
//   }
//
//   componentWillUnmount() {
//
//     window.componentHandler.downgradeElements(this.root);
//
//   }
//
//
//
//   render() {
//     return (
//       <section className={`section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp ${s.form}`} ref={node => (this.root = node)}>
//
//         <form className={`${layout_css.content}`} method="post" action="javascript:void(0)" onSubmit={this.submitForm}>
//           <Grid>
//             <Cell col={2} />
//             <Cell col={8}>
//               <Grid noSpacing>
//                 <Cell col={10}>
//                   <Textfield label="URL to Scrape" floatingLabel onChange={this.handleURLTextbox} className={`${s.url_text}`}/>
//                 </Cell>
//                 <Cell col={1} align="middle" offset={1}>
//                   <Checkbox onChange={this.handleCheckbox} label="Recursive" ripple />
//                 </Cell>
//                 <Cell col={12}>
//                   <Button raised colored>Scrape</Button>
//                 </Cell>
//
//               </Grid>
//
//             </Cell>
//             <Cell col={2} />
//
//           </Grid>
//
//         </form>
//
//       </section>
//
//     );
//   }
//
// }

export default AddSiteForm;
