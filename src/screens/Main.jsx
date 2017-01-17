import React from 'react';

import Waves from '../components/Waves';
import Content from '../components/Content';
import routerAnimation from '../components/common/components/routerAnimation';
import checkGreeting from '../components/common/components/checkGreeting';
import Button from '../components/common/components/Button';

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
          <br/>
          <h3>Our highest goal is your successful business.<br/>We are always riding the highest wave.</h3>
          <Button
            type="buttonLink"
            href="/who_we_are"
            className="nav-button"
          >
            Check who we are
          </Button>
        </section>
      </Content>
      <Waves registerAnimation={registerAnimation} />
    </section>
  );
}

Main.propTypes = {
  registerAnimation: React.PropTypes.func.isRequired,
  isFromGreeting: React.PropTypes.bool,
};

export default checkGreeting(routerAnimation(Main));
