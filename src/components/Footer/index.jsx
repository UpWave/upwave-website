import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

import SVGElement from '../common/components/SVGElement';

import fb from './assets/facebook-logo.svg';
import gh from './assets/github-logo.svg';
import li from './assets/linkedin-logo.svg';
import tw from './assets/twitter-logo.svg';
import '../../assets/stylesheets/footer.css';

function Footer({ className, toggleSidebar }) {
  return (
    <footer className={`footer${className ? ` ${className}` : ''}`}>
      <nav className="footer-navigation">
        <nav className="sitemap">
          <h3>CHECK&nbsp;THIS</h3>
          <section className="sitemap-group">
            <Link to="/" className="sitemap-link">Home</Link>
            <Link to="/careers" className="sitemap-link">Careers</Link>
          </section>
          <section className="sitemap-group">
          <Link to="/who_we_are" className="sitemap-link">About&nbsp;us</Link>
            <Link to="/our_work" className="sitemap-link">Our&nbsp;work</Link>
          </section>
        </nav>
        <section className="social">
          <a href="#" className="social-link">
            <SVGElement svg={tw} />
          </a>
          <a href="#" className="social-link">
            <SVGElement svg={fb} />
          </a>
          <a href="https://www.linkedin.com/company/upwaveagency" target="_blank" className="social-link">
            <SVGElement svg={li} />
          </a>
          <a href="https://github.com/UpWave" target="_blank" className="social-link">
            <SVGElement svg={gh} />
          </a>
        </section>
      </nav>
      <span className="copyright">
        <span className="legit-name">
          Copyright&nbsp;©&nbsp;{(new Date()).getUTCFullYear()}&nbsp;UpWave&nbsp;Agency
        </span>
        <span className="help-links">
          <a onClick={toggleSidebar}>Contact&nbsp;us</a>
        </span>
      </span>
    </footer>
  );
}

Footer.propTypes = {
  toggleSidebar: PropTypes.func,
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
