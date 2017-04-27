import React from 'react';
// import MediaQuery from 'react-responsive';

import Content from '../../components/Content';
import Testemonial from '../../components/Testemonial';
import routerAnimation from '../../components/common/components/routerAnimation';

import '../../assets/stylesheets/our-work.css';

import ourea from './assets/ourea.png';
import eventgeek from './assets/eventgeek.png';
import meaningfulPlace from './assets/meaningful-place.png';

// TODO: REFACTOR DAT SHIT
class Projects extends React.Component {
  static propTypes = {
    registerAnimation: React.PropTypes.func.isRequired,
  };

  get testemonials() {
    return [
      <Testemonial
        key="meaningful-place"
        className="meaningful-place"
        signedBy="Kestas Barzdaitis, Managing partner at" company="Meaningful.place"
        url="http://www.meaningful.place/"
        logo={meaningfulPlace}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Upwave</strong> is a great engineering partner thanks to their depth of knowledge in technology, their design experience, coupled with their flexibility to engage with their clients and their firm commitment to deliver. <strong>Upwave</strong> team always tries to learn and understand our business needs instead of just coding to our specs.
      </Testemonial>,
      <Testemonial
        key="ourea"
        className="ourea"
        signedBy="James Campion, CEO at"
        company="Ourea"
        url="http://oureasystems.com/"
        logo={ourea}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Upwave agency</strong> helped develop, design and maintain our webapp. I found his service to be very friendly and helpful. He will always go out of his way to ensure completion of tasks in the most effective way. He completed changes quickly and always to the standard you expect. I would recommend <strong>Upwave agency's</strong> service to anyone looking for talented developers.
      </Testemonial>,
      <Testemonial
        key="eventgeek"
        className="eventgeek"
        signedBy="Alex Patriquin, CEO at"
        company="EventGeek"
        url="https://www.eventgeek.com/"
        logo={eventgeek}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We had a great experience working together with <strong>Upwave agency</strong>. Agency made solid efforts and their contributions meaningfully advanced our company's progress. Their greatest strength is in thinking about both technical and business problems holistically.
      </Testemonial>,
    ];
  }

  render() {
    return (
      <section className="container">
        <Content
          name="projects"
          registerAnimation={this.props.registerAnimation}
          className="box our-work"
        >
          <section className='testimonials-container'>
            {this.testemonials}
          </section>
        </Content>
        {/* <MediaQuery query='(min-device-width: 768px)'>
          <Waves mode="red" registerAnimation={this.props.registerAnimation} />
        </MediaQuery> */}
      </section>
    );
  }
}

export default routerAnimation(Projects);
