import PropTypes from 'prop-types';
import React from 'react';

import Paragraph from '../../components/Paragraph';
import Content from '../../components/Content';
import routerAnimation from '../../components/common/components/routerAnimation';
import SVGElement from '../../components/common/components/SVGElement';
import Button from '../../components/common/components/Button';

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
        <div className="about-us-container-both">
          <div className="screen monitor">
            <div className="content">
              <SVGElement svg={whoWeAre} className="who-we-are-term" />
            </div>
            <div className="base">
              <div className="grey-shadow"></div>
              <div className="foot top"></div>
              <div className="foot bottom"></div>
              <div className="shadow"></div>
              <div className="keyboard">
                <div className="btm"></div>
                <ul className="keys">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="shadow"></div>
              </div>
            </div>
          </div>
          <div className="laptop">
            <div className="content">
              <ul className="txt txt-laptop">
                <li></li>
                <li></li>
                <li className="thin"></li>
                <li className="thin"></li>
                <li className="thin"></li>
              </ul>
            </div>
            <div className="btm"></div>
            <div className="shadow"></div>
          </div>
        </div>
        <div className="about-us-container-laptop">
          <div className="laptop">
            <div className="content">
              <SVGElement svg={whoWeAre} className="who-we-are-term" />
            </div>
            <div className="btm"></div>
            <div className="shadow"></div>
          </div>
        </div>
        <SVGElement svg={whoWeAre} className="who-we-are-term term-only" />
        <section className="all-hide xs-show">
          <Paragraph>
            &#09;We are small software development agency, which is focused on working with rising startups. <strong>Our main goal is your successful business.</strong> We are always ready to consult and assess your project and provide the best solution to achieve the greatest results.
          </Paragraph>
          <Paragraph>
            &#09;Our experience is based on a big number of projects which we’ve already done. We prefer to build long term relationships with our customers. In addition, we are proud to announce that <strong>UpWave</strong> was working on <strong>Y combinator Summer 2016 startup EventGeek</strong>.
          </Paragraph>
        </section>
        <section className="about-us-reviews">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;For sure, we are working hard and doing our best to achieve all goals and make our customers successful. If you still don't believe us, check our reviews!
          </p>
          <Button
            type="buttonLink"
            href="/our_work"
            className="nav-button"
          >
            Check for reviews
          </Button>
        </section>
      </Content>
    </section>
  );
}

About.propTypes = {
  registerAnimation: PropTypes.func.isRequired,
}

export default routerAnimation(About);
