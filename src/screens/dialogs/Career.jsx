import React from 'react';
import PropTypes from 'prop-types';
import { locationShape } from 'react-router';

import Dialog from '../../components/Dialog';
import Button from '../../components/common/components/Button';
import positions from '../Careers/assets/positions';

class Career extends React.Component {
  render() {
    // TODO: Be careful, really hardcoded AF.
    const positionId = this.props.location.pathname.split('/')[2] - 1;

    return (
      <Dialog name='career'>
        <section className="career-dialog">
          <section className={`position-header ${positions[positionId]['name'].replace('/', '-')}`}>
            <h2>{[positions[positionId]['level'], positions[positionId]['name']].join(' ')} developer</h2>
            <Button
              type="button"
              callback={e => { e.stopPropagation(); this.props.toggleSidebar(true); }}
              className="nav-button xs-hide sm-hide"
            >
              Apply
            </Button>
          </section>
          {positions[positionId]['body']}
          <p className="mobile-contact-us">Let us know if it suits you!<br />Just send us email or use contact form on our website.</p>
        </section>
      </Dialog>
    );
  }
}

Career.propTypes = {
  toggleSidebar: PropTypes.func,
  location: locationShape,
};

export default Career;
