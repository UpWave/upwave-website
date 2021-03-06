import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Snap from 'snapsvg';

import '../../assets/stylesheets/waves.css';

class SVGWave extends React.Component {
  static propTypes = {
    svg: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    onLeft: PropTypes.func.isRequired,
    delay: PropTypes.number,
  };

  static default = {
    delay: 600,
  }

  static duration = 500;

  componentDidMount() {
    const wave = ReactDOM.findDOMNode(this.refs.wave);
    wave.innerHTML = this.props.svg;

    setTimeout(() => this.drawWave(), this.props.delay);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 'leave') {
      this.stopDrawing();
      this.eraseWave();
    }
  }

  componentWillUnmount() {
    const { status } = this.props;

    if (status !== 'left' && status !== 'leave') {
      this.stopDrawing();
      this.eraseWave();
    }
  }

  drawWave() {
    const s = this.getSnapHandler();

    s.select('#path').animate({
      d: this.getSVGPath(s.select('#endPath')),
      'fill-opacity': 1,
    }, SVGWave.duration);
  }

  stopDrawing() {
    const s = this.getSnapHandler();

    s.selectAll('d').forEach(e => e.stop());
  }

  eraseWave() {
    const s = this.getSnapHandler();

    s.select('#path').animate({
      d: this.getSVGPath(s.select('#startPath')),
      'fill-opacity': 0,
    }, SVGWave.duration, n => n, this.props.onLeft);
  }

  getSnapHandler() {
    return new Snap(
      this.getSVGDocument(ReactDOM.findDOMNode(this.refs.wave))
    );
  }

  getSVGDocument(element) {
    return element.querySelector('#wave');
  }

  getSVGPath({ node }) {
    return node.getAttribute('d');
  }

  render() {
    return (
      <section
        ref="wave"
        className="wave acceleration"
      />
    );
  }
}

export default SVGWave;
