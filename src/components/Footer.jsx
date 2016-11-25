import React from 'react';
import { Link } from 'react-router';

import '../assets/stylesheets/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav className="sitemap">
        <Link to="/" className="sitemap-links">Main page</Link>|
        <Link to="/who_we_are" className="sitemap-links">Who we are</Link>|
        <Link to="/our_work" className="sitemap-links">Main page</Link>
      </nav>
      <span>Copyright © 2016 UpWork Agency</span>
    </footer>
  );
}

export default Footer;
