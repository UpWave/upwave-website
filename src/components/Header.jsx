import PropTypes from 'prop-types';
import React from 'react';
import { withRouter, locationShape } from 'react-router';
import MediaQuery from 'react-responsive';

import Button from './common/components/Button';

import logo from '../assets/images/logo.svg';
import '../assets/stylesheets/header.css';

// TODO: Refactor dat shit
function Header({
  location: { pathname },
  isFromGreeting,
  toggleSidebar,
}) {
  return (
    <header className="header">
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
            <MediaQuery query='(min-device-width: 569px)'>
              Who we are
            </MediaQuery>
            <MediaQuery query='(max-device-width: 568px)'>
              About
            </MediaQuery>
          </Button>
          <Button
            type="link"
            href="/our_work"
            className={
              `nav-button ${pathname === '/our_work' ? 'active': ''}`
            }
          >
            <MediaQuery query='(min-device-width: 569px)'>
              Our work
            </MediaQuery>
            <MediaQuery query='(max-device-width: 568px)'>
              Work
            </MediaQuery>
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
        </nav>
        <nav className="navigation">
          <Button
            type="button"
            callback={() => toggleSidebar(true)}
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
  isFromGreeting: PropTypes.bool,
  toggleSidebar: PropTypes.func,
  location: locationShape,
};

export default withRouter(Header);
