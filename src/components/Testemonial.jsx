import PropTypes from 'prop-types';
import React from 'react';

function Testemonial({ children, signedBy, company, url, logo, className }) {
  return (
    <section className={`testemonial-panel${className ? ' ' + className : ''}`}>
      <div className="testemonial-logo">
        <a
          className="testemonial-link"
          href={url}
          role="link"
          target="_blank"
        >
          { logo ? <img src={logo} role="presentation" /> : <h2>{company}</h2> }
        </a>
      </div>
      <div className="testemonial-text">
        <blockquote cite={url}>
          {children}
          <br />
          <span>
            - {signedBy}
            &nbsp;
            <a
              className="testemonial-link"
              href={url}
              role="link"
              target="_blank"
            >{company}</a>
          </span>
        </blockquote>
      </div>
    </section>
  );
}

Testemonial.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  signedBy: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  logo: PropTypes.string,
  url: PropTypes.string.isRequired,
};

Testemonial.defaultProps = {
  className: '',
};

export default Testemonial;
