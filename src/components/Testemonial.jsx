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
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  signedBy: React.PropTypes.string.isRequired,
  company: React.PropTypes.string.isRequired,
  logo: React.PropTypes.string,
  url: React.PropTypes.string.isRequired,
};

Testemonial.defaultProps = {
  className: '',
};

export default Testemonial;
