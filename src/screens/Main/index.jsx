import PropTypes from 'prop-types';
import React from 'react';

import Content from '../../components/Content';
import routerAnimation from '../../components/common/components/routerAnimation';
import Button from '../../components/common/components/Button';
import Testemonial from '../../components/Testemonial';

function Main({ registerAnimation, isFromGreeting }) {
  return (
    <section className="container">
      <Content
        name="main"
        registerAnimation={registerAnimation}
        className="main-box"
        skipAnimation={isFromGreeting}
      >
        <section className="motto">
          <h1>We are <strong>UpWave</strong></h1>
          <h3>Our highest goal is your successful business.<br/>We are always riding the highest wave.</h3>
          <Button
            type="buttonLink"
            href="/who_we_are"
            className="nav-button"
          >
            Check who we are
          </Button>
        </section>
        <section className="main-testimonial">
          <Testemonial
            signedBy="Kestas Barzdaitis, Managing partner at"
            company="Meaningful.place"
            url="http://www.meaningful.place/"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Upwave</strong> is a great engineering partner thanks to their depth of knowledge in technology, their design experience, coupled with their flexibility to engage with their clients and their firm commitment to deliver. <strong>Upwave</strong> team always tries to learn and understand our business needs instead of just coding to our specs.
          </Testemonial>
          <Button
            type="buttonLink"
            href="/our_work"
            className="nav-button"
          >
            Check for more reviews
          </Button>
        </section>
      </Content>
    </section>
  );
}

Main.propTypes = {
  registerAnimation: PropTypes.func.isRequired,
  isFromGreeting: PropTypes.bool,
};

export default routerAnimation(Main);
