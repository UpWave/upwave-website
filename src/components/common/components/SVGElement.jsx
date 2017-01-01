import React from 'react';
import ReactDOM from 'react-dom';

class SVGElement extends React.Component {
  static propTypes = {
    svg: React.PropTypes.string.isRequired,
  };

  componentDidMount() {
    let svgElement = ReactDOM.findDOMNode(this.refs.svgElement);
    svgElement.innerHTML = this.props.svg;
  }

  render() {
    return (
      <span ref="svgElement" />
    );
  }
}

export default SVGElement;
