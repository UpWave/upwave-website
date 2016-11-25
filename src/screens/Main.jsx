import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';

import Waves from '../components/Waves';

class Main extends React.Component {
  render() {
    return (
      <section>
        <ReactTransitionGroup>
          <Waves key="waves" />
        </ReactTransitionGroup>
        <section className="container">
          <section className="motto">
            <h1>We are <strong>UpWave.</strong></h1>
            <h3>Our the highest goal is your successful business.</h3>
          </section>
        </section>
      </section>
    );
  }
}

export default Main;
