import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/background.css';

class Background extends React.Component {
  componentDidMount() {
    /*eslint no-undef: 0*/
    window.particleground(ReactDOM.findDOMNode(this.refs.particles));
  }

  render() {
    return (
      <section className="background" ref="particles" />
    );
  }
};

export default Background;
