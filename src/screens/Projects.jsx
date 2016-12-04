import React from 'react';

import Content from '../components/Content';
import {
  routerTransition,
} from '../components/common/components/routerAnimation';

class Projects extends React.Component {
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
      <Content name="about" registerAnimation={this.registerAnimation}>
        <h2>Our work!</h2>
      </Content>
    );
  }
}

export default routerTransition(Projects);
