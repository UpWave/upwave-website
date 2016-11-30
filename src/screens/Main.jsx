import React from 'react';

import Waves from '../components/Waves';
import Greeting from '../components/Greeting';
import routerTransition from '../components/common/components/routerTransition';

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
        <Greeting registerAnimation={this.registerAnimation} />
      </section>
    );
  }
}

export default routerTransition(Main);
