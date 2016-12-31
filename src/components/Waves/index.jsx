import React from 'react';

import SVGWave from './SVGWave';

import blueWave from './assets/blueWave.svg.js';
import redWave from './assets/redWave.svg.js';
import blackWave from './assets/blackWave.svg.js';
import singleBlueWave from './assets/singleBlueWave.svg.js';
import singleRedWave from './assets/singleRedWave.svg.js';
import singleBlackWave from './assets/singleBlackWave.svg.js';
import '../../assets/stylesheets/waves.css';

class Waves extends React.Component {
  static propTypes = {
    registerAnimation: React.PropTypes.func.isRequired,
    mode: React.PropTypes.oneOf(['multiple', 'blue', 'red', 'black']),
  };

  static defaultProps = {
    mode: 'multiple',
  };

  get countByMode() {
    return this.props.mode === 'multiple' ? 3 : 1;
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      animationStatus: 'appear',
      finishCounter: 0,
    };
  }

  onFinish = () => {
    if (this.state.finishCounter >= this.countByMode) {
      this.state.routerCallback('waves');
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

  componentDidMount() {
    this.props.registerAnimation('waves', this.transitionShouldStart);
  }

  getWaves() {
    const { animationStatus } = this.state;
    const wave1 = (
      <SVGWave
        key="blue"
        svg={blueWave}
        status={animationStatus}
        onLeft={this.onLeft}
      />
    );
    const wave2 = (
      <SVGWave
        key="red"
        svg={redWave}
        status={animationStatus}
        onLeft={this.onLeft}
      />
    );
    const wave3 = (
      <SVGWave
        key="black"
        svg={blackWave}
        status={animationStatus}
        onLeft={this.onLeft}
      />
    );
    const black = (
      <SVGWave
        key="black"
        svg={singleBlackWave}
        status={animationStatus}
        onLeft={this.onLeft}
      />
    );
    const blue = (
      <SVGWave
        key="blue"
        svg={singleBlueWave}
        status={animationStatus}
        onLeft={this.onLeft}
      />
    );
    const red = (
      <SVGWave
        key="red"
        svg={singleRedWave}
        status={animationStatus}
        onLeft={this.onLeft}
      />
    );

    switch (this.props.mode) {
      case 'blue':
        return blue;
      case 'red':
        return red;
      case 'black':
        return black;
      case 'multiple':
      default:
        return [wave1, wave2, wave3];
    }
  }

  render() {
    return (
      <section className="waves">
        {this.getWaves()}
      </section>
    );
  }
};

export default Waves;
