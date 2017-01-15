import React from 'react';
import { withRouter, locationShape } from 'react-router';

import Button from './common/components/Button';

import logo from '../assets/images/logo.svg';
import '../assets/stylesheets/header.css';

// TODO: Refactor dat shit
function Header({
  location: { pathname },
  isFromGreeting,
  className,
}) {
  return (
    <header className={`header${className ? ` ${className}` : ''}`}>
      <section
        className={`header-wrapper ${isFromGreeting ? 'header-wrapper-animation' : ''}`}
      >
        <Button type="link" href="/" className="logo-button">
          <img src={logo} alt="UpWave logo" className="logo" />
        </Button>
        <nav className="navigation">
          <Button
            type="link"
            href="/who_we_are"
            className={
              `nav-button ${pathname === '/who_we_are' ? 'active': ''}`
            }
          >
              Who we are
          </Button>
          <Button
            type="link"
            href="/our_work"
            className={
              `nav-button ${pathname === '/our_work' ? 'active': ''}`
            }
          >
              Our work
          </Button>
          <Button
            type="link"
            href="/careers"
            className={
              `nav-button ${pathname === '/careers' ? 'active': ''}`
            }
          >
              Careers
          </Button>
          <Button
            type="externalButtonLink"
            href="mailto:contact@upwave.net"
            className="nav-button sm-hide"
          >
            Get in touch
          </Button>
        </nav>
      </section>
    </header>
  );
}

Header.propTypes = {
  className: React.PropTypes.string,
  isFromGreeting: React.PropTypes.bool,
  location: locationShape,
};

Header.defaultProps = {
  className: '',
};

export default withRouter(Header);
