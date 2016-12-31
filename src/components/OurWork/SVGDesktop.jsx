import React from 'react';
import ReactDOM from 'react-dom';
import Snap from 'snapsvg';

import desktopSVG from './assets/desktop.svg.js';

import '../../assets/stylesheets/our-work.css';

class SVGDesktop extends React.Component {
  componentDidMount() {
    const desktop = ReactDOM.findDOMNode(this.refs.desktop);
    desktop.innerHTML = desktopSVG;

    setTimeout(() => this.startBouncing(), 0);
  }

  flyUp = () => {
    const s = this.getSnapHandler();

    s.select('#nodejs').animate({ transform:'translate(30,100)'}, 500, t => t, this.flyDown);
  }

  flyDown = () => {
    const s = this.getSnapHandler();

    s.select('#nodejs').animate({ transform:'translate(100,300)'}, 500, t => t, this.flyUp);
  }

  startBouncing() {
    this.flyUp();
  }

  getSnapHandler() {
    return new Snap(
      this.getSVGDocument(ReactDOM.findDOMNode(this.refs.desktop))
    );
  }

  getSVGDocument(element) {
    return element.querySelector('#desktop');
  }

  getSVGTransformTo({ node }) {
    return node.getAttribute('transformTo');
  }

  render() {
    return (
      <section
        ref="desktop"
        className="desktop"
      />
    );
  }
}

export default SVGDesktop;
