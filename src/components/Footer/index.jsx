import React from 'react';
import { Link } from 'react-router';

import SVGElement from '../common/components/SVGElement';

import fb from './assets/facebook-logo.svg';
import gh from './assets/github-logo.svg';
import li from './assets/linkedin-logo.svg';
import tw from './assets/twitter-logo.svg';
import '../../assets/stylesheets/footer.css';

class Footer extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    return (
      <footer className={`footer${this.props.className.replace(/\//g, ' ')}`}>
        <nav className="footer-navigation">
          <nav className="sitemap">
            <h3>CHECK THIS</h3>
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
            <a href="#" className="social-link">
              <SVGElement svg={li} />
            </a>
            <a href="#" className="social-link">
              <SVGElement svg={gh} />
            </a>
          </section>
        </nav>
        <span className="copyright">
          Copyright © 2016 UpWork Agency&nbsp;|&nbsp;
          <a href="mailto:contact@upwave.net">Contact us</a>
        </span>
      </footer>
    );
  }
}

export default Footer;
