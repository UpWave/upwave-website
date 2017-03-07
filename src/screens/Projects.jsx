import React from 'react';
import Slider from 'nuka-carousel';

import Waves from '../components/Waves';
import Content from '../components/Content';
import Testemonial from '../components/Testemonial';
import routerAnimation from '../components/common/components/routerAnimation';

import '../assets/stylesheets/our-work.css';

function Projects({ registerAnimation }) {
  return (
    <section className="container">
      <Content
        name="projects"
        registerAnimation={registerAnimation}
        className="box our-work"
      >
        <h3>Testemonials</h3>
        <h4>Here is what our customers think of us:</h4>
        <Slider>
          <Testemonial
            signedBy="Kestas Barzdaitis, Managing partner at" company="Meaningful.place"
            url=""
          >
            Upwave is a great engineering partner thanks to their depth of knowledge in technology, their design experience, coupled with their flexibility to engage with their clients and their firm commitment to deliver. Upwave team always tries to learn and understand our business needs instead of just coding to our specs.
          </Testemonial>
          <Testemonial
            signedBy="Alex Patriquin, CEO at"
            company="EventGeek"
            url="https://www.eventgeek.com/"
          >
            We had a great experience working together with Upwave agency. Upwave made solid efforts and their contributions meaningfully advanced our company's progress. Their greatest strength is in thinking about both technical and business problems holistically.
          </Testemonial>
          <Testemonial
            signedBy="James Campion, CEO at"
            company="Ourea"
            url=""
          >
            Pavlo helped develop, design and maintain our webapp. I found his service to be very friendly and helpful. He will always go out of his way to ensure completion of tasks in the most effective way. He completed changes quickly and always to the standard you expect. I would recommend Pavlo's service to anyone looking for talented developer.
          </Testemonial>
        </Slider>
      </Content>
      <Waves mode="red" registerAnimation={registerAnimation} />
    </section>
  );
}

Projects.propTypes = {
  registerAnimation: React.PropTypes.func.isRequired,
}

export default routerAnimation(Projects);
