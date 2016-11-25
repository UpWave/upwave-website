import React from 'react';

import Logo from './components/Logo';
import Button from '../common/components/Button';

import '../../assets/stylesheets/header.css';

function Header() {
  return (
    <header className="header">
      <Button type="link" href="#" className="logo-button">
        <Logo />
      </Button>
      <nav className="navigation">
        <Button type="link" href="#" className="nav-button">Who we are</Button>
        <Button type="link" href="#" className="nav-button">Our work</Button>
        <Button
          type="buttonLink"
          href="mailto:contact@upwave.net"
          className="nav-button"
        >
          Get in touch
        </Button>
      </nav>
    </header>
  );
};

export default Header;
