import PropTypes from 'prop-types';
import React from 'react';

import Content from '../../components/Content';
import routerAnimation from '../../components/common/components/routerAnimation';
import Button from '../../components/common/components/Button';
import getTestemonials from '../Projects/assets/testemonials';

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
          {getTestemonials(false)[Main.getRandomValue(0, 2)]}
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

Main.getRandomValue = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default routerAnimation(Main);
