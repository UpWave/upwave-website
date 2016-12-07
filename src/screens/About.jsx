import React from 'react';

import Waves from '../components/Waves';
import Paragraph from '../components/Paragraph';
import Content from '../components/Content';
import {
  routerTransition,
} from '../components/common/components/routerAnimation';

import whoWeAre from '../assets/images/who-we-are.svg';
// import ruby from '../assets/images/icons/ruby.svg';
// import rails from '../assets/images/icons/rails.svg';
// import nodejs from '../assets/images/icons/nodejs.svg';
// import reactjs from '../assets/images/icons/reactjs.svg';
// import angularjs from '../assets/images/icons/angularjs.svg';
// import apple from '../assets/images/icons/apple.svg';
// import swift from '../assets/images/icons/swift.svg';
// import phonegap from '../assets/images/icons/phonegap.svg';

class About extends React.Component {
  checkAnimationsStatus() {
    let result = true;

    for (const key in this.state) {
      if (Object.hasOwnProperty.call(this.state, key) && this.state[key].callback) {
        result = result && this.state[key].completed;

        if (!result) return result;
      }
    }

    this.state.routerCallback();

    return result;
  }

  completedCallback = name => {
    this.setState({
      [name]: Object.assign({}, this.state[name], {
        completed: true,
      })
    }, this.checkAnimationsStatus);
  }

  transitionShouldStart = routerCallback => {
    this.setState({
      routerCallback,
    });

    for (const key in this.state) {
      if (Object.hasOwnProperty.call(this.state, key)) {
        if (this.state[key].callback) this.state[key].callback(this.completedCallback);
      }
    }
  }

  registerAnimation = (name, callback) => {
    this.setState({
      [name]: {
        callback,
        completed: false,
      },
    });
  }

  render() {
    return (
      <section>
        <Content name="about" registerAnimation={this.registerAnimation}>
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
            {/* <section className="our-stack">
              <section className="stack-group">
                <img src={ruby} role="presentation" alt="Ruby language" className="technology-icon" />
                <img src={rails} role="presentation" alt="Ruby on Rails framework" className="technology-icon" />
                <img src={nodejs} role="presentation" alt="NodeJS framework" className="technology-icon" />
              </section>
              <section className="stack-group">
                <img src={reactjs} role="presentation" alt="ReactJS framework" className="technology-icon" />
                <img src={angularjs} role="presentation" alt="AngularJS framework" className="technology-icon" />
              </section>
              <section className="stack-group">
                <img src={apple} role="presentation" alt="Objective-C language" className="technology-icon" />
                <img src={swift} role="presentation" alt="Swift language" className="technology-icon" />
                <img src={phonegap} role="presentation" alt="PhoneGap framework" className="technology-icon" />
              </section>
            </section> */}
          </section>
        </Content>
        <Waves mode="blue" registerAnimation={this.registerAnimation} />
      </section>
    );
  }
}

export default routerTransition(About);
