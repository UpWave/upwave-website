import PropTypes from 'prop-types';
import React from 'react';

import Content from '../../components/Content';
import routerAnimation from '../../components/common/components/routerAnimation';
import getTestemonials from './assets/testemonials';

import '../../assets/stylesheets/our-work.css';

class Projects extends React.Component {
  static propTypes = {
    registerAnimation: PropTypes.func.isRequired,
  };

  render() {
    return (
      <section className="container">
        <Content
          name="projects"
          registerAnimation={this.props.registerAnimation}
          className="box our-work"
        >
          {getTestemonials()}
        </Content>
      </section>
    );
  }
}

export default routerAnimation(Projects);
