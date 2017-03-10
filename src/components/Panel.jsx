import React from 'react';

import '../assets/stylesheets/panel.css';

function Panel({ children, className, isContainer }) {
  return (
    <section className={`${isContainer ? 'panel-container' : 'panel'} ${className}`}>
      {children}
    </section>
  );
}

Panel.propTypes = {
  className: React.PropTypes.string,
  isContainer: React.PropTypes.bool,
}

Panel.defaultProps = {
  className: '',
  isContainer: false,
}

export default Panel;
