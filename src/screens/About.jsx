import React from 'react';

import Waves from '../components/Waves';
import Paragraph from '../components/Paragraph';
import Content from '../components/Content';
import routerAnimation from '../components/common/components/routerAnimation';

import whoWeAre from '../assets/images/who-we-are.svg';
// import ruby from '../assets/images/icons/ruby.svg';
// import rails from '../assets/images/icons/rails.svg';
// import nodejs from '../assets/images/icons/nodejs.svg';
// import reactjs from '../assets/images/icons/reactjs.svg';
// import angularjs from '../assets/images/icons/angularjs.svg';
// import apple from '../assets/images/icons/apple.svg';
// import swift from '../assets/images/icons/swift.svg';
// import phonegap from '../assets/images/icons/phonegap.svg';

function About({ registerAnimation }) {
  return (
    <section>
      <Content name="about" registerAnimation={registerAnimation}>
        <section className="about-us">
          <img src={whoWeAre} role="presentation" className="sm-hide" />
          <section className="all-hide sm-show">
            <Paragraph>
              &#09;We are small but very ambitious software development agency, which is focused on working with rising startups. <strong>Our main goal is your successful business.</strong> We are always ready to consult and assess your project and provide the best solution to achieve greatest results.
            </Paragraph>
            <Paragraph>
              &#09;Our experience based on a bunch of projects which we’ve already made or we’re still doing. In addition, we are proud to announce that <strong>UpWave</strong> was working on <strong>Y combinator Summer 2016 startup EventGeek</strong>.
            </Paragraph>
          </section>
        </section>
      </Content>
      <Waves mode="blue" registerAnimation={registerAnimation} />
    </section>
  );
}

About.propTypes = {
  registerAnimation: React.PropTypes.func.isRequired,
}

export default routerAnimation(About);
