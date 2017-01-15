import React from 'react';

import Waves from '../components/Waves';
import Content from '../components/Content';
import routerAnimation from '../components/common/components/routerAnimation';

function Careers({ registerAnimation }) {
  return (
    <section>
      <Content
        name="careers"
        registerAnimation={registerAnimation}
        className="box"
      >
        Careers!!!
      </Content>
      <Waves mode="black" registerAnimation={registerAnimation} />
    </section>
  );
}

Careers.propTypes = {
  registerAnimation: React.PropTypes.func.isRequired,
}

export default routerAnimation(Careers);
