import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/background.css';

class Background extends React.Component {
  backgroundElement = null;

  componentDidMount() {
    /*eslint no-undef: 0*/
    window.particleground(ReactDOM.findDOMNode(this.backgroundElement));
  }

  render() {
    return (
      <section className="background" ref={node => this.backgroundElement = node} />
    );
  }
};

export default Background;
