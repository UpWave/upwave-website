import React from 'react';
import { locationShape } from 'react-router';

function animationManager(WrappedComponent) {
  return class animationManager extends React.Component {
    static propTypes = {
      location: locationShape,
    };

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
        <WrappedComponent
          registerAnimation={this.registerAnimation}
          {...this.props}
        />
      );
    }
  };
}

export default animationManager;
