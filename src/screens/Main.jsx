import React from 'react';

import Waves from '../components/Waves';
import Content from '../components/Content';
import {
  routerTransition,
} from '../components/common/components/routerAnimation';
import TypeAhead from '../components/TypeAhead';

// TODO: Refactor!!! Move to routerTransition or new HoC
class Main extends React.Component {
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
        <Waves registerAnimation={this.registerAnimation} />
        <Content name="main" registerAnimation={this.registerAnimation}>
          {/* Fix bug with sentence prop */}
          <TypeAhead sentence="We are " tag="h1" skipAnimation={true}>
            <TypeAhead sentence="UpWave." tag="strong" />
          </TypeAhead>
          <br/>
          <h3>Our highest goal is your successful business.</h3>
        </Content>
      </section>
    );
  }
}

export default routerTransition(Main);
