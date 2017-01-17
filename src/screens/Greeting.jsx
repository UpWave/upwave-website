import React from 'react';
import { browserHistory } from 'react-router';

import TypeAhead from '../components/TypeAhead';

class Greeting extends React.Component {
  static inDelay = 1000;
  static outDelay = 2400;
  static redirectDelay = 2750;

  static abortGreeting = () => {
    browserHistory.push('/');
  };

  typingTimeout = -1;
  waitingTimeout = -1;

  state = {
    startTyping: false,
  };

  componentDidMount() {
    this.typingTimeout = setTimeout(() => {
      this.setState({ startTyping: true });

      document.addEventListener('click', Greeting.abortGreeting);
      document.addEventListener('keyup', Greeting.abortGreeting);
      document.addEventListener('touchend', Greeting.abortGreeting);
    }, Greeting.inDelay);
  }

  componentWillUnmount() {
    clearTimeout(this.typingTimeout);
    clearTimeout(this.waitingTimeout);

    document.removeEventListener('click', Greeting.abortGreeting);
    document.removeEventListener('keyup', Greeting.abortGreeting);
    document.removeEventListener('touchend', Greeting.abortGreeting);
  }

  initiateRedirect = () => {
    this.waitingTimeout = setTimeout(() => {
      browserHistory.push('/');
    }, Greeting.redirectDelay);
  }

  render() {
    return (
      <section className="container">
        <section className="main-box">
          <section className="motto greeting-motto">
            <TypeAhead
              startImmediately={this.state.startTyping}
              sentence="We are "
              tag="h1"
              delayAfter={Greeting.outDelay}
            >
              <TypeAhead
                sentence="UpWave"
                tag="strong"
                onFinish={this.initiateRedirect}
              />
            </TypeAhead>
            <br/>
            <h3>Our highest goal is your successful business.<br/>We are always riding the highest wave.</h3>
          </section>
        </section>
      </section>
    );
  }
}

export default Greeting;
