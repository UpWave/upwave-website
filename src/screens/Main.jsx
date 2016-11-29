import React from 'react';

import Waves from '../components/Waves';
import TypeAhead from '../components/TypeAhead';

class Main extends React.Component {
  render() {
    return (
      <section>
        <Waves />
        <section className="container">
          <section className="motto">
            <TypeAhead sentence="We are " tag="h1">
              <TypeAhead sentence="UpWave." tag="strong" />
            </TypeAhead>
            <h3>Our highest goal is your successful business.</h3>
          </section>
        </section>
      </section>
    );
  }
}

export default Main;
