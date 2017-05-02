import PropTypes from 'prop-types';
import React from 'react';

import '../assets/stylesheets/panel.css';

function Panel({ children, className, isContainer }) {
  return (
    <section className={`${isContainer ? 'panel-container' : 'panel'}${className ? ' ' + className : ''}`}>
      {children}
    </section>
  );
}

Panel.propTypes = {
  className: PropTypes.string,
  isContainer: PropTypes.bool,
}

Panel.defaultProps = {
  className: '',
  isContainer: false,
}

export default Panel;
