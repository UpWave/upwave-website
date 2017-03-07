import React from 'react';

function Testemonial({ children, signedBy, company, url }) {
  return (
    <section className="testemonial-panel">
      <blockquote cite={url}>
        {children}
        <br />
        <span>
          - {signedBy}
          &nbsp;
          <a href={url}>{company}</a>
        </span>
      </blockquote>
    </section>
  );
}

export default Testemonial;
