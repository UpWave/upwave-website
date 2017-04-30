import PropTypes from 'prop-types';
import React from 'react';
// import MediaQuery from 'react-responsive';

import Paragraph from '../../components/Paragraph';
import Content from '../../components/Content';
import routerAnimation from '../../components/common/components/routerAnimation';
import SVGElement from '../../components/common/components/SVGElement';

import whoWeAre from './assets/who-we-are.svg';
import '../../assets/stylesheets/about.css';

function About({ registerAnimation }) {
  return (
    <section className="container">
      <Content
        name="about"
        registerAnimation={registerAnimation}
        className="box about-us"
      >
        <SVGElement svg={whoWeAre} className="who-we-are-term sm-hide" />
        <section className="all-hide sm-show">
          <Paragraph>
            &#09;We are small but very ambitious software development agency, which is focused on working with rising startups. <strong>Our main goal is your successful business.</strong> We are always ready to consult and assess your project and provide the best solution to achieve greatest results.
          </Paragraph>
          <Paragraph>
            &#09;Our experience based on a bunch of projects which we’ve already made or we’re still doing. In addition, we are proud to announce that <strong>UpWave</strong> was working on <strong>Y combinator Summer 2016 startup EventGeek</strong>.
          </Paragraph>
        </section>
      </Content>
      {/* <MediaQuery query='(min-device-width: 768px)'>
        <Waves mode="blue" registerAnimation={registerAnimation} />
      </MediaQuery> */}
    </section>
  );
}

About.propTypes = {
  registerAnimation: PropTypes.func.isRequired,
}

export default routerAnimation(About);
