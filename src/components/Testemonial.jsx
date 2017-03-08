import React from 'react';

function Testemonial({ children, signedBy, company, url, logo, className }) {
  return (
    <section className={`testemonial-panel ${className}`}>
      <div className="testemonial-logo">
        <a
          className="testemonial-link"
          href={url}
          role="link"
          target="_blank"
        >
          <img src={logo} role="presentation" />
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

export default Testemonial;
