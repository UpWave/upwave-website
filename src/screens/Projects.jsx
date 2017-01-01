import React from 'react';

import Waves from '../components/Waves';
import Content from '../components/Content';
import routerAnimation from '../components/common/components/routerAnimation';

function Projects({ registerAnimation }) {
  return (
    <section>
      <Content name="projects" registerAnimation={registerAnimation}>
        Our work!!!
      </Content>
      <Waves mode="red" registerAnimation={registerAnimation} />
    </section>
  );
}

Projects.propTypes = {
  registerAnimation: React.PropTypes.func.isRequired,
}

export default routerAnimation(Projects);
