import React from 'react';

import SVGWave from './components/SVGWave';
import routerTransition from '../common/components/routerTransition';

import blueWave from './assets/blueWave.svg.js';
import redWave from './assets/redWave.svg.js';
import blackWave from './assets/blackWave.svg.js';
import '../../assets/stylesheets/waves.css';

class Waves extends React.Component {
  constructor() {
    super();

    this.state = {
      animationStatus: 'appear',
      finishCounter: 0,
    };
  }

  onFinish = () => {
    if (this.state.finishCounter >= 3) {
      this.state.routerCallback();
    }
  }

  onLeft = () => {
    this.setState({
      finishCounter: this.state.finishCounter + 1,
    }, this.onFinish);
  }

  transitionShouldStart = routerCallback => {
    this.setState({
      routerCallback,
      animationStatus: 'leave',
    }, () => this.setState({ animationStatus: 'left' }));
  }

  render() {
    const { animationStatus } = this.state;

    return (
      <section className="waves">
        <SVGWave
          svg={blueWave}
          status={animationStatus}
          onLeft={this.onLeft}
        />
        <SVGWave
          svg={redWave}
          status={animationStatus}
          onLeft={this.onLeft}
        />
        <SVGWave
          svg={blackWave}
          status={animationStatus}
          onLeft={this.onLeft}
        />
      </section>
    );
  }
};

export default routerTransition(Waves);
