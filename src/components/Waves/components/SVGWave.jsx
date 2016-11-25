import React from 'react';
import ReactDOM from 'react-dom';
import Snap from 'snapsvg';

import '../../../assets/stylesheets/waves.css';

class SVGWave extends React.Component {
  static propTypes = {
    svg: React.PropTypes.string.isRequired,
  };

  componentDidMount() {
    setTimeout(() => this.drawWave(), 100);
  }

  drawWave() {
    const s = this.getSnapHandler();

    s.select('#startPath').animate({
      d: this.getSVGPath(s.select('#endPath')),
    }, 600);
  }

  getSnapHandler() {
    return new Snap(
      this.getSVGDocument(ReactDOM.findDOMNode(this.refs.blackWave))
    );
  }

  getSVGDocument({ contentDocument }) { return contentDocument; }
  getSVGPath({ node }) { return node.getAttribute('d'); }

  render() {
    return (
      <object
        type="image/svg+xml"
        data={this.props.svg}
        ref="blackWave"
        className="wave acceleration"
      />
    );
  }
}

export default SVGWave;
