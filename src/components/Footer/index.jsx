import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import fb from './assets/facebook-logo.svg';
import gh from './assets/github-logo.svg';
import li from './assets/linkedin-logo.svg';
import tw from './assets/twitter-logo.svg';
import '../../assets/stylesheets/footer.css';

// TODO: Make SVG component for external svgs
class Footer extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  componentDidMount() {
    let wave = ReactDOM.findDOMNode(this.refs.tw);
    wave.innerHTML = tw;

    wave = ReactDOM.findDOMNode(this.refs.fb);
    wave.innerHTML = fb;

    wave = ReactDOM.findDOMNode(this.refs.li);
    wave.innerHTML = li;

    wave = ReactDOM.findDOMNode(this.refs.gh);
    wave.innerHTML = gh;
  }

  render() {
    return (
      <footer className={`footer${this.props.className.replace(/\//g, ' ')}`}>
        <nav className="footer-navigation">
          <nav className="sitemap">
            <h3>CHECK THIS</h3>
            <section className="sitemap-group">
              <Link to="/" className="sitemap-link">Home</Link>
              <Link to="/who_we_are" className="sitemap-link">About&nbsp;us</Link>
            </section>
            <section className="sitemap-group">
              <Link to="/our_work" className="sitemap-link">Our&nbsp;work</Link>
              <Link to="/" className="sitemap-link">Contact&nbsp;us</Link>
            </section>
          </nav>
          <section className="social">
            <a href="#" className="social-link" ref="tw" />
            <a href="#" className="social-link" ref="fb" />
            <a href="#" className="social-link" ref="li" />
            <a href="#" className="social-link" ref="gh" />
          </section>
        </nav>
        <span className="copyright">Copyright © 2016 UpWork Agency</span>
      </footer>
    );
  }
}

export default Footer;
