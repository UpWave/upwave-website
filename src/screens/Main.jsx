import React from 'react';

import Waves from '../components/Waves';
import Content from '../components/Content';
import routerAnimation from '../components/common/components/routerAnimation';
import TypeAhead from '../components/TypeAhead';
import Button from '../components/common/components/Button';

function Main({ registerAnimation }) {
  return (
    <section>
      <Content name="main" registerAnimation={registerAnimation} className="main-box">
        <section className="motto">
          {/* Fix bug with sentence prop */}
          <TypeAhead sentence="We are " tag="h1" skipAnimation={true}>
            <TypeAhead sentence="UpWave" tag="strong" />
          </TypeAhead>
          <br/>
          <h3>Our highest goal is your successful business</h3>
          <Button
            type="externalButtonLink"
            href="mailto:contact@upwave.net"
            className="nav-button all-hide sm-show"
          >
            Get in touch
          </Button>
        </section>
      </Content>
      <Waves registerAnimation={registerAnimation} />
    </section>
  );
}

Main.propTypes = {
  registerAnimation: React.PropTypes.func.isRequired,
}

export default routerAnimation(Main);
