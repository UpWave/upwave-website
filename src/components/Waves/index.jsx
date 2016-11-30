import React from 'react';

import SVGWave from './components/SVGWave';

import blueWave from './assets/blueWave.svg.js';
import redWave from './assets/redWave.svg.js';
import blackWave from './assets/blackWave.svg.js';
import '../../assets/stylesheets/waves.css';

class Waves extends React.Component {
  static propTypes = {
    registerAnimation: React.PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      animationStatus: 'appear',
      finishCounter: 0,
    };
  }

  onFinish = () => {
    if (this.state.finishCounter >= 3) {
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

export default Waves;
