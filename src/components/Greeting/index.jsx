import React from 'react';
import TypeAhead from '../TypeAhead';

class Greeting extends React.Component {
  timeout = 0;

  state = {
    transitionStarted: false,
  };

  componentDidMount() {
    this.props.registerAnimation('greeting', this.transitionShouldStart);
  }

  transitionShouldStart = routerCallback => {
    this.setState({
      transitionStarted: true,
    }, () => this.timeout = setTimeout(() => routerCallback('greeting'), 500));
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <section
        className={`container ${this.state.transitionStarted ? 'container-fade-out' : ''}`}
      >
        <section className="motto">
          {/* Fix bug with sentence prop */}
          <TypeAhead sentence="We are " tag="h1" skipAnimation={true}>
            <TypeAhead sentence="UpWave." tag="strong" />
          </TypeAhead>
          <br/>
          <h3>Our highest goal is your successful business.</h3>
        </section>
      </section>
    );
  }
}

export default Greeting;
