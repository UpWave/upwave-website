import React, { Component } from 'react';

import Waves from '../components/Waves';
import Background from '../components/Background';
import Header from '../components/Header';
import Content from '../components/Content';

class Main extends Component {
  render() {
    return (
      <section>
        <Background />
        <Waves />
        <Header />
        <Content />
      </section>
    );
  }
}

export default Main;
